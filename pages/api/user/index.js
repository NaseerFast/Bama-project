import { ValidateProps } from '@/api-lib/constants';
import { findUserByUsername, updateUserById } from '@/api-lib/db';
import { auths, validateBody } from '@/api-lib/middlewares';
import { getMongoDb } from '@/api-lib/mongodb';
import { ncOpts } from '@/api-lib/nc';
import { slugUsername } from '@/lib/user';
import { v2 as cloudinary } from 'cloudinary';
import multer from 'multer';
import nc from 'next-connect';

const upload = multer({ dest: '/tmp' });
const handler = nc(ncOpts);

if (process.env.CLOUDINARY_URL) {
  const {
    hostname: cloud_name,
    username: api_key,
    password: api_secret,
  } = new URL(process.env.CLOUDINARY_URL);

  cloudinary.config({
    cloud_name,
    api_key,
    api_secret,
  });
}

handler.use(...auths);

handler.get(async (req, res) => {
  if (!req.user) return res.json({ user: null });
  return res.json({ user: req.user });
});

handler.patch(
  upload.fields([
    { name: 'profilePicture', maxCount: 1 },
    { name: 'indigenefile', maxCount: 1 },
    { name: 'profilePicture', maxCount: 1 },
    { name: 'certificatefile', maxCount: 1 },
    { name: 'idfile', maxCount: 1 },
  ]),
  validateBody({
    type: 'object',
    properties: {
      username: ValidateProps.user.username,
      firstname: ValidateProps.user.firstname,
      bio: ValidateProps.user.bio,
    },
    additionalProperties: true,
  }),
  async (req, res) => {
    if (!req.user) {
      req.status(401).end();
      return;
    }

    const db = await getMongoDb();

    let profilePicture;
    if (req.files['profilePicture']) {
      const image = await cloudinary.uploader.upload(req.files['profilePicture'][0].path, {
        width: 512,
        height: 512,
        crop: 'fill',
      });
      profilePicture = image.secure_url;
    }

    let indigenefile;
    if (req.files['indigenefile']) {
      const image = await cloudinary.uploader.upload(req.files['indigenefile'][0].path, {
        width: 512,
        height: 512,
        crop: 'fill',
      });
      indigenefile = image.secure_url;
    }


    let certificatefile;
    if (req.files['certificatefile']) {
      const image = await cloudinary.uploader.upload(req.files['certificatefile'][0].path, {
        width: 512,
        height: 512,
        crop: 'fill',
      });
      certificatefile = image.secure_url;
    }

    let idfile;
    if (req.files['idfile']) {
      const image = await cloudinary.uploader.upload(req.files['idfile'][0].path, {
        width: 512,
        height: 512,
        crop: 'fill',
      });
      idfile = image.secure_url;
    }



    const { firstname, bio } = req.body;

    let username;

    if (req.body.username) {
      username = slugUsername(req.body.username);
      if (
        username !== req.user.username &&
        (await findUserByUsername(db, username))
      ) {
        res
          .status(403)
          .json({ error: { message: 'The username has already been taken.' } });
        return;
      }
    }

    const user = await updateUserById(db, req.user._id, {
      ...(username && { username }),
      ...(firstname && { firstname }),
      ...(typeof bio === 'string' && { bio }),
      ...(profilePicture && { profilePicture }),
      ...(indigenefile && { indigenefile }),
      ...(certificatefile && { certificatefile }),
      ...(idfile && { idfile }),


    });

    res.json({ user });
  }
);

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;
