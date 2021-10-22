const express = require("express");
const router = express();
// const userController = require("../controller/user");
const {headeroptions}  = require ('../headerO')
const logger = require('../logger')

const {
  allUsers,
  allUsersPost,
  allUsersDelete,
  allUsersUpdate,
  getSingleUser,
  RandomUser
} = require("../controller/allusersjson");
// const { authenticateapi } = require("../controller/helpers/apiauthenticate");
// // Middleware/ 
// // const verifyLogin = (user, pass) => {
// //   return user === object.Username && pass === object.Password;
// // };
// router.get("/", authenticateapi, userController.userspage);
// router.post("/", userController.adduser);
// router.post("/search", userController.SearchRes);
// router.get("/del/:DeleteParam", userController.Delete);


router.use(headeroptions) // Set Header Options on this router 

// Post, Get, Put and Delete request with loaded modules
router
  .route("/json")
  .get(allUsers)
  .post(allUsersPost)
  .delete(allUsersDelete)
  .put(allUsersUpdate);

  // Param Routes / Search based on ID parameter
  router.get("/json/:id",getSingleUser)
router.get('/json/1/random',headeroptions,RandomUser)
// function loginverify(req, res, next) {
//   if (!verifyLogin(req.body.username, req.body.password)) {
//     console.log("Bad Login");
//   } else {
//     next();
//   }
// }
// router.get("/testlogin", loginverify, (req, res) => {
//   console.log("Logged in Succesfully");
// });


module.exports = router; // Exporting this router to use on the main app.js file 

// const object = {
//   Username: "Test",
//   Password: "test",
// };
