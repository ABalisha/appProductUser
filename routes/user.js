const express = require("express");
const router = express();
const userController = require("../controller/user");
const {headeroptions}  = require ('../headerO')
const logger = require('../logger')

const {
  allUsers,
  allUsersPost,
  allUsersDelete,
  allUsersUpdate,
  getSingleUser
} = require("../controller/allusersjson");
const { authenticateapi } = require("../controller/helpers/apiauthenticate");
// Middleware/ 
// const verifyLogin = (user, pass) => {
//   return user === object.Username && pass === object.Password;
// };
router.get("/", authenticateapi, userController.userspage);
router.post("/", userController.adduser);
router.post("/search", userController.SearchRes);
router.get("/del/:DeleteParam", userController.Delete);
router
  .route("/json")
  .get(headeroptions,allUsers)
  .post(headeroptions, allUsersPost)
  .delete(headeroptions, allUsersDelete)
  .put(headeroptions, allUsersUpdate);

  // Param Routes / Search based on ID parameter
  router.get("/json/:id",headeroptions,getSingleUser)
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


module.exports = router;

// const object = {
//   Username: "Test",
//   Password: "test",
// };
