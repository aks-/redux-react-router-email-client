import * as db from '../lib/db';

const design = 'emails';

module.exports = (router) => { 
  router.post('/sent', (req, res) => {
    const view = 'byFromEmail';
    const key = req.body.email;

    getItems(design, view, {
      key: [key]
    })
    .then(items => {
      res.status(200).json(items)
    })
  });

  router.post('/inbox', (req, res) => {
    const view = 'byToEmail';
    const key = req.body.email;

    getItems(design, view, {
      key
    })
    .then(items => {
      res.status(200).json(items);
    });
  });

  router.post('/unread', (req, res) => {
    var view = 'byToEmail';
    const key = req.body.email;

    getItems(design, view, {
      key
    })
    .then(items => {
      var unread = items.length;
      res.status(200).json(unread);
    })
  });
}; 

const getItems = (design, view, keyObj) => {
  return db.findBy(design, view, keyObj)
  .then(body => {
    var rows = body.rows;
    var items = rows.map(row => {
      return row.value;
    });
    return items;
  });
};
