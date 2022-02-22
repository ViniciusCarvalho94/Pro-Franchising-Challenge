const multer = require('multer');
const path = require('path');

const directory = path.resolve(__dirname, '..', 'uploads');

const storage = multer.diskStorage({
  destination: directory,
  filename: (_req, file, callback) => callback(null, `${file.originalname}`),
});

// código com referencia do https://stackoverflow.com/questions/38652848/filter-files-on-the-basis-of-extension-using-multer-in-express-js
module.exports = multer({
  storage,
  fileFilter: (_req, file, callback) => {
    const ext = path.extname(file.originalname);
    if (ext !== '.png' && ext !== '.jpg') {
      return callback(new Error('format image error'));
    }
    return callback(null, true);
  },
});
