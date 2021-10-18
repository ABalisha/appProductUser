const { ipLog } = require("../../models/iplogging");
const os = require("os");
const ip = require("../../node_modules/ipaddressapi");
const cookieParser = require("cookie-parser");
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
  var cookie = req.cookies.DeviceLoggingCookie
  const urlR = req.baseUrl + req.path;
  info(namespace,"Cookie",typeof cookie)
  if(typeof cookie === 'undefined' && !cookie){
await test()
  
  const newVisit = new ipLog({
    Ip: await ip.address(),
    Enviroment: os.type(),
    Hostname: os.hostname(),
    Namespace: urlR,
    UserAgent: JSON.stringify(req.headers)
  });
  var cookieNumber=Math.random().toString();
  res.cookie('DeviceLoggingCookie',cookieNumber, { maxAge: 90000, httpOnly: true });
  newVisit.save();
  info(namespace,"New Device Added",newVisit)
  next();
}
else{

  const currentVisit = new ipLog({
    Ip: await ip.address(),
    Namespace: urlR,
  UserAgent: JSON.stringify(req.headers)
  })
  currentVisit.save();
  info(namespace,"Device that was already logged",currentVisit)
  next()
}
};
