const {ipLog} = require('../../models/iplogging')
const os = require('os');
const ip = require('ipaddressapi')
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
