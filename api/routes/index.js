const middleware = require('@blocklet/sdk/lib/middlewares');
const router = require('express').Router();

router.use('/user', middleware.user(), (req, res) => res.json(req.user || {}));

const blockchain = require('../controller/blockchain');

router.use('/blockchain/:hash', middleware.user(), (req, res) => {
  blockchain(req.params.hash)
    .then((x) => {
      res.json(x.data);
      res.end();
    })
    .catch((err) => {
      res.status(err.response.status);
      res.json(err.response.data);
    });
});

module.exports = router;
