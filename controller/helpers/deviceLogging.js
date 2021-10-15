const {ipLog} = require('../../models/iplogging')
const os = require('os');
const ip = require('../../node_modules/ipaddressapi')
exports.deviceLogging = async (req,res,next)=>
{
    const urlR = req.baseUrl + req.path
    const newVisit = new ipLog({
        Ip:await ip.address(),
        Enviroment:os.platform(),
        Hostname:os.hostname(),
        Namespace:urlR,
    })
    newVisit.save()
    next()
}


// const { ipLog } = require("../../models/iplogging");
// const os = require("os");
// const ip = require("../../node_modules/ipaddressapi");
// const namespace = "deviceLogging";
// const { info, warn, error } = require("../../logger");
// const test = async ()=>{
//   await ipLog.find((err, result) => {
//     if (result.length > 3) {
//       try {
//         ipLog.findByIdAndDelete(result[result.length - 1]._id, (err, doc) => {
//           if (err) {
//             error(namespace, "ERROR", err);
//           } else {
//             info(namespace, "Deleted The Following", doc);
//           }
//         });
//       } catch (e) {
//         error(namespace, "Error", e);
//       }
//     }
//     if (err) {
//       error(namespace, "Data Length", error);
//     }
//   });
// }
// exports.deviceLogging = async (req, res, next) => {
// await test()
//   const urlR = req.baseUrl + req.path;
//   const newVisit = new ipLog({
//     Ip: await ip.address(),
//     Enviroment: os.platform(),
//     Hostname: os.hostname(),
//     Namespace: urlR,
//   });
//   newVisit.save();
//   next();
// };
