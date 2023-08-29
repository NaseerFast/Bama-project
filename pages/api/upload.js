import multer from 'multer';
import { v2 as cloudinary } from 'cloudinary';
import mongoose from 'mongoose';

// Configure Cloudinary
cloudinary.config({
  cloud_name: 'your-cloud-name',
  api_key: 'your-api-key',
  api_secret: 'your-api-secret',
});

// Set up Multer for file upload
const upload = multer({ dest: 'uploads/' });

// Connect to MongoDB
mongoose.connect('mongodb+srv://jaafarnasir71:jaafarnasir71@cluster0.45febgu.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a schema and model for your data
const fileSchema = new mongoose.Schema({
  filename: String,
  cloudinaryUrl: String,
});

const File = mongoose.model('File', fileSchema);

// Create the API route
export default async function handler(req, res) {
  try {
    // Upload the file to Cloudinary
    const fileUploadResult = await cloudinary.uploader.upload(req.file.path);

    // Save file information in your MongoDB database
    const newFile = new File({
      filename: fileUploadResult.original_filename,
      cloudinaryUrl: fileUploadResult.secure_url,
    });

    await newFile.save();

    res.status(200).json({ message: 'File uploaded successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'File upload failed' });
  }
}
