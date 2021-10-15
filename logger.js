const cc = require("node-console-colors");
exports.info = (namespace, message, Object) => {

    const dattee = new Date().toISOString();
  if (Object) console.log(cc.set("fg_green",`[INFO][${dattee}][${namespace}] ${message} ${Object}`));
  else console.log(cc.set("fg_green",`[INFO][${dattee}}][${namespace}] ${message}`));
};

exports.warn = (namespace, message, Object) => {

    const dattee = new Date().toISOString();
  if (Object) console.log(cc.set("fg_yellow",`[WARN][${dattee}][${namespace}] ${message} ${Object}`));
  else console.warn(cc.set("fg_yellow",`[WARN][${dattee}][${namespace}] ${message}`));
};

exports.error = (namespace, message, Object) => {

    const dattee = new Date().toISOString();
  if (Object) console.log(cc.set("fg_red",`[ERROR][${dattee}][${namespace}] ${message} ${Object}`));
  else console.log(cc.set("fg_red",`[ERROR][${dattee}][${namespace}] ${message}`));
};
