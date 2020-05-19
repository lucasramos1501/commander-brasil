import multer from "multer";
import { resolve, extname } from "path";

const storage = multer.diskStorage({
  destination: resolve(__dirname, "..", "..", "temp", "uploads"),
  filename: function (request, file, callback) {
    const uniqueSuffix = Date.now() + Math.round(Math.random() * 1e9);
    callback(null, file.fieldname + "-" + uniqueSuffix + extname(file.originalname));
  }

});

function fileFilter(request, file, callback) {
  const format = ["image/png", "image/jpg", "image/jpeg"].find(acceptedFormt => acceptedFormat == file.mimetype);
  if (format) return callback(null, true);

  return callback(null, false)
}

const upload = multer({ storage });

export default upload;