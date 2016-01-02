import * as db from '../lib/db';

const design = 'emails';

module.exports = (router) => { 
  router.post('/sent', (req, res) => {
    const view = 'byFromEmail';
    const { email } = req.body;

    getItems(design, view, {
      key: email
    })
    .then(items => {
      res.status(200).json(items)
    })
  });

  router.post('/inbox', (req, res) => {
    const view = 'byToEmail';
    const { email } = req.body;

    getItems(design, view, {
      key: email
    })
    .then(items => {
      res.status(200).json(items);
    });
  });

  router.post('/unread', (req, res) => {
    const view = 'byToEmail';
    const key = req.body.email;

    getItems(design, view, {
      key
    })
    .then(items => {
      var unread = items.length;
      res.status(200).json(unread);
    })
  });

  router.post('/reply', (req, res) => {
    const { to, text, subject, thread_id, from } = req.body;
    const reply = {
      thread_id: thread_id,
      message: {
        "html": `<p>${text}</p>`,
        "text": text,
        "subject": subject,
        "from": from,
        "unread": true,
        "to": to,
        "timestamp": new Date().toISOString(),
        "headers": {
          "Reply-To": ''
        },
        "important": false
      },
      type: "message"
    };

    db.save(reply)
    .then(() => {
      res.status(200).json(reply);
    });
  });

  router.post('/forward', (req, res) => {
    const { to, html, text, subject, from } = req.body;

    const email = {
      message: {
        "html": `<p>begin forwarded message</p></br>${html}`,
        "text": `begin forwarded message --- ${text}`,
        "subject": subject,
        "from": from,
        "unread": true,
        "to": to,
        "timestamp": new Date().toISOString(),
        "headers": {
          "Reply-To": {
            "name": "A",
            "email": "a@example.com"
          }
        },
        "important": false
      },
      type: "message"
    };

    db.save(email)
    .then(() => {
      res.status(200).json(email);
    });
  });

  router.post('/compose', (req, res) => {
    const { to, text, subject } = req.body;

      const email = { 
        message: {
          "html": `<p>${text}</p>`,
          "text": text,
          "subject": subject,
          "from": {
            "name": "A",
            "email": "a@example.com"
          }, //TODO how to resolve this
          "unread": true,
          "to": to,
          "timestamp": new Date().toISOString(),
          "headers": {
            "Reply-To": 'a@example.com'
          },
          "important": false
        },
        type: "message"
      }; 

      db.save(email)
      .then(() => {
        res.status(200).json(email)
      })
  });

  router.post('/get-user-info', (req, res) => {
    const view = 'userInfoByEmail';
    const { email } = req.body;

    db.findBy(design, view, {
      key: email
    })
    .then(body => {
      const rows = body.rows;
      const info = rows[0].value;
      const userInfo = {
        email: info.email,
        name: info.name
      }
      res.status(200).json(userInfo);
    });
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
