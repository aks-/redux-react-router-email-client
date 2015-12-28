module.exports = (router) => { 
  router.get('/sent-items', function(req, res) {
    const email = req.body.email; 
  });

  router.get('/inbox', function(req, res) {
    const email = req.body.email;
  });

  router.get('/unread', function(req, res) {
    const email = req.body.email;
  });
}; 
