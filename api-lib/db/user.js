import bcrypt from 'bcryptjs';
import { ObjectId } from 'mongodb';
import normalizeEmail from 'validator/lib/normalizeEmail';

export async function findUserWithEmailAndPassword(db, email, password) {
  email = normalizeEmail(email);
  const user = await db.collection('users').findOne({ email });
  if (user && (await bcrypt.compare(password, user.password))) {
    return { ...user, password: undefined }; // filtered out password
  }
  return null;
}

async function generateApplicationId(db) {
  const currentYear = new Date().getFullYear();
  const lastUser = await db
    .collection('users')
    .find({ applicationId: new RegExp(`^BMPR/${currentYear}/[0-9]{3}$`) })
    .sort({ applicationId: -1 })
    .limit(1)
    .toArray();

  let lastNumber = 0;
  if (lastUser.length > 0) {
    const parts = lastUser[0].applicationId.split('/');
    lastNumber = parseInt(parts[2], 10);
  }

  const nextNumber = (lastNumber + 1).toString().padStart(3, '0');
  return `NPWR/${currentYear}/${nextNumber}`;
}

export async function findUserForAuth(db, userId) {
  return db
    .collection('users')
    .findOne({ _id: new ObjectId(userId) }, { projection: { password: 0 } })
    .then((user) => user || null);
}

export async function findUserById(db, userId) {
  return db
    .collection('users')
    .findOne({ _id: new ObjectId(userId) }, { projection: dbProjectionUsers() })
    .then((user) => user || null);
}

export async function findUserByUsername(db, username) {
  return db
    .collection('users')
    .findOne({ username }, { projection: dbProjectionUsers() })
    .then((user) => user || null);
}

export async function findUserByEmail(db, email) {
  email = normalizeEmail(email);
  return db
    .collection('users')
    .findOne({ email }, { projection: dbProjectionUsers() })
    .then((user) => user || null);
}

export async function updateUserById(db, id, data) {
  return db
    .collection('users')
    .findOneAndUpdate(
      { _id: new ObjectId(id) },
      { $set: data },
      { returnDocument: 'after', projection: { password: 0 } }
    )
    .then(({ value }) => value);
}

export async function insertUser(
  db,
  { email, originalPassword, bio = '', profilePicture, username, firstname, lastname, gender, dateofbirth, phone, indigenefile,residentialaddress, qualification, instituition, yearofgraduation, course, certificatefile,  idtype, idnumber, idfile }
) {
  const applicationId = await generateApplicationId(db); // Generate applicationId
  const user = {
    emailVerified: false,
    profilePicture,
    email,
    username,
    bio,
    firstname,
    lastname,
    gender,
    dateofbirth, 
    phone,
    indigenefile, 
    residentialaddress,
    qualification,
    instituition,
    yearofgraduation,
    course,
    certificatefile,
    idtype,
    idnumber,
    idfile,
    applicationId
    
  };
  const password = await bcrypt.hash(originalPassword, 10);
  const { insertedId } = await db
    .collection('users')
    .insertOne({ ...user, password });
  user._id = insertedId;
  return user;
}

export async function updateUserPasswordByOldPassword(
  db,
  id,
  oldPassword,
  newPassword
) {
  const user = await db.collection('users').findOne(new ObjectId(id));
  if (!user) return false;
  const matched = await bcrypt.compare(oldPassword, user.password);
  if (!matched) return false;
  const password = await bcrypt.hash(newPassword, 10);
  await db
    .collection('users')
    .updateOne({ _id: new ObjectId(id) }, { $set: { password } });
  return true;
}

export async function UNSAFE_updateUserPassword(db, id, newPassword) {
  const password = await bcrypt.hash(newPassword, 10);
  await db
    .collection('users')
    .updateOne({ _id: new ObjectId(id) }, { $set: { password } });
}

export function dbProjectionUsers(prefix = '') {
  return {
    [`${prefix}password`]: 0,
    [`${prefix}email`]: 0,
    [`${prefix}emailVerified`]: 0,
  };
}
