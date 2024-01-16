const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/user');

exports.signUp=async(req,res,next)=>{

    const url="";

    if(req.file){//to do imageProfi if a user wants
        const image=req.file;
        url=image.path;
    }
   


    const fullName=req.body.fullName;
    const email=req.body.email;
    const nickname=req.body.nickname;
    const password=req.body.password;
    const imageProfilUrl=url;
    const dateBirth=req.body.dateBirth;
    const friends=[];
    const subscribers=[];
    const genre=req.body.genre;//tableau de false et true
   

    try{
        const hashedPassword = await bcrypt.hash(password, 12);
         
        const newUser = new User({
            fullName: fullName,
            email: email,
            nickname: nickname,
            password: hashedPassword,
            dateBirth: dateBirth,
            friends: friends,
            subscribers: subscribers,
            genre: genre,
            imageProfilUrl: imageProfilUrl
          });
        
          const savedUser = await newUser.save();


    }
    catch (error) {
        // Gérer les erreurs
        console.error(error);
        res.status(500).json({
          message: 'Une erreur est survenue lors de la création de l\'utilisateur'
        });
      }


}


exports.signIn = async (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    let loadedUserAdmin;
  
    try {
      const user = await User.findOne({ email: email });
  
      if (!user) {
        console.log('Utilisateur non trouvé');
        return res.status(401).json({ message: 'Utilisateur non trouvé' });
      }
  
      loadedUserAdmin = user;
  
      const isEqual = await bcrypt.compare(password, user.password);
  
      if (!isEqual) {
        console.log('Erreur de mot de passe');
        return res.status(401).json({ message: 'Mot de passe incorrect' });
      }
  
      const token = jwt.sign(
        {
          email: loadedUserAdmin.email,
          userId: loadedUserAdmin._id.toString(),
          
        },
        'somesupersecretsecret',//need to change this 
        { expiresIn: '1h' }
      );
  
      console.log('Utilisateur connecté');
      res.status(200).json({ token: token, userId: loadedUserAdmin._id.toString() });
    } catch (error) {
      console.log('Erreur de connexion:', error);
      res.status(500).json({ message: 'Erreur de connexion' });
    }
  };
  
  exports.getProfil=async(req,res,next)=>{
    const {id}=req.params;

    try{
        const user= awaitUser.findById(id);
        res.status(200).json({user:user});
    }catch(error){
        console.log('Erreur de connexion:', error);
        res.status(500).json({ message: 'Erreur de connexion' });
    }

    

  }


  exports.editProfil = async (req, res, next) => {
    const { id } = req.params;
    const { nickname, email, password, } = req.body;

    

    if(req.file){//to do imageProfi if a user wants
       const image=req.file;
       const url=image.path;
    }
   
  
    try {
     
      const user = await User.findById(id);
  
      if (!user) {
        return res.status(404).json({ message: 'Utilisateur non trouvé' });
      }
  
      
      user.nickname = nickname;
      user.email = email;
      user.password = password;
      user.imageProfilUrl=url;
  
     
      await user.save();
  
      res.status(200).json({ message: 'Profil mis à jour avec succès!' });
    } catch (error) {
      console.error('Erreur de connexion:', error);
      res.status(500).json({ message: 'Erreur de connexion' });
    }
  };