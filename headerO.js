exports.headeroptions = (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "www.google.com");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
  };
