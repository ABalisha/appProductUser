const { ipLog } = require("../../models/iplogging");
const os = require("os");
const ip = require("../../node_modules/ipaddressapi");
const namespace = "deviceLogging";
const { info, warn, error } = require("../../logger");
const test = async ()=>{
  await ipLog.find()
  .then((result)=>{
    if(result.length > 25){
    ipLog.findByIdAndDelete(result[0]._id)
    .then((data)=>{
        info(namespace,"Data That was deleted", data)
    })
    .catch((err)=>{
error(namespace,"Error",err)
    })
    }
  })
}
exports.deviceLogging = async (req, res, next) => {
await test()
  const urlR = req.baseUrl + req.path;
  const newVisit = new ipLog({
    Ip: await ip.address(),
    Enviroment: os.platform(),
    Hostname: os.hostname(),
    Namespace: urlR,
  });
  newVisit.save();
  info(namespace,"New Device Added",newVisit)
  next();
};
