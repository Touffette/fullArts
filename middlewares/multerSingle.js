const multer=require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      const destination=req.body.destination;//  ../images/photoProfil je pars de ce middleware multer vers le dossier que j'ai envie

      cb(null, destination);
    },
    filename: (req, file, cb) => {
      cb(null, new Date().toISOString() + '-' + file.originalname);
    }
  });

  const fileFilter = (req, file, cb) => {
    if (
      file.mimetype === 'image/png' ||
      file.mimetype === 'image/jpg' ||
      file.mimetype === 'image/jpeg'
    ) {
      cb(null, true);
    } else {
      cb(null, false);
    }
  };

module.exports=multer({storage:storage,fileFilter:fileFilter}).single('file');