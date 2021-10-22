const user = require("../models/user");

// -------------------Showing all users -------------------
exports.allUsers = async (req, res, next) => {
  if(!req.query){
  await user
    .find()
    .then((data) => res.status(200).send(data))
    .catch((err) => {
      res.status(400).send(error);
    });
  next();
}
else
{
  await user
  .find(req.query)
  .then((data) => res.status(200).send(data))
  .catch((err) => {
    res.status(400).send(error);
  });
next(); 
}
};

// -----------------------------------------------------------
// Adding User
exports.allUsersPost = async (req, res, next) => {
  const userInfo = req.body;
  const newUser = new user(userInfo);
  newUser
    .save()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};
// -----------------------------------------------------------
// Deleting User
exports.allUsersDelete = async (req, res, next) => {
  const userInfo = req.body;
  await user
    .deleteOne(userInfo)
    .then((resul) => {
      res.status(200).send("Deleted Successfully" + resul);
    })
    .catch((err) => {
      res.status(400).send("Bad Request" + err);
    });
};
// -----------------------------------------------------------
// Updating User
exports.allUsersUpdate = async (req, res, next) => {
  const userInfo = req.body;
  const id = req.query.id;
  await user
    .findOneAndUpdate(
      { _id: id },
      {
        $set: {
          Username: req.body.Username,
          FullName: req.body.FullName,
          Address: req.body.Address,
          zip: req.body.zip,
          Country: req.body.Country,
          Password: req.body.Password,
          role: req.body.role,
        },
      },
      { new: true }
    )
    .then((resul) => {
      res.status(200).send("Changed Succesfully" + resul);
    })
    .catch((err) => {
      res.status(400).send("Bad Request" + err);
    });
};
// -----------------------------------------------------------
// Get single user by id  using params
exports.getSingleUser = async (req, res, next) => {
  const par = req.params.id;
  user
    .find({_id:par})
    .then((resu) => {
      console.log(resu)
      res.status(200).json(resu)
    })
    .catch((err) =>
    {
      res.status(401).send("No Results");
    })
  }
  exports.RandomUser = async (req,res,next) =>
  {
    console.log()
    try{
      user.find(
        (err,res1)=>{
  res.status(200).send(res1[Math.floor(Math.random() * res1.length)])
      })
    }
catch(e){
  console.log(e)
}
  }
// -----------------------------------------------------------
  //// OPTIONALLY WITHOUT THEN AND CATCH -----------------------------------------------------

// // Showing all users
// exports.allUsers = async (req, res, next) => {
//   if(!req.query){
//   await user
//     .find((err,data)=>{ //callback function with 2 par err and results
//       if(err){
//         console.log(err)
//       }
//       else
//       {
//         res.status(200).send(data)
//       }
//     })
//   next();
// }
// else
// {
//   await user
//   .find(req.query,(err,data)=>{ //callback function with 2 par err and results
//     if(err){
//       console.log(err)
//     }
//     else
//     {
//       res.status(200).send(data)
//     }
//   })
// next();
// }
// };
