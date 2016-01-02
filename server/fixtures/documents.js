export default {
  "docs": [{
    _id: 'cdtra',
    thread_id: 2, //This is the id if it's part of some thread otherwise this property won't exist in document
    message: {
      "html": "<p>Example HTML content</p>",
      "text": "Example text content",
      "subject": "example subject",
      "from": {
        "email": "aria@snake-eyes.com",
        "name": "A"
      },
      "unread": false,
      "to": [ {
          "email": "ashok@snake-eyes.com",
          "name": "B",
          "type": "to"
        }
      ],
      "timestamp": "1000",
      "headers": {
        "Reply-To": "aria@snake-eyes.com",
      },
      "important": false
    },
    type: "message"
  }, {
    _id: 'abcde',
    thread_id: 2, //This is the id if it's part of some thread otherwise this property won't exist in document
    message: {
      "html": "<h1>Example HTML reply</h1>",
      "text": "Example reply",
      "subject": "example subject",
      "from": {
        "email": "ashok@snake-eyes.com",
        "name": "B"
      },
      "unread": true,
      "to": [
        {
          "email": "aria@snake-eyes.com",
          "name": "A",
          "type": "to"
        }
      ],
      "timestamp": "1200",
      "headers": {
        "Reply-To": "ashok@snake-eyes.com",
      },
      "important": false
    },
    type: "message"
  }, {
    _id: 'abcdl',
    message: {
      "html": "<h1>Example HTML content</h1>",
      "text": "Example text content",
      "subject": "example subject",
      "from": {
        "email": "c@example.com",
        "name": "C"
      },
      "unread": true,
      "to": [
        {
          "email": "ashok@snake-eyes.com",
          "name": "B",
          "type": "to"
        }
      ],
      "timestamp": "1300",
      "headers": {
        "Reply-To": "c@example.com",
      },
      "important": false
    },
    type: "message"
  }, {
    _id: 'abcdm',
    message: {
      "html": "<h1>Example HTML content</h1>",
      "text": "Example text content",
      "subject": "example subject",
      "from": {
        "email": "aria@snake-eyes.com",
        "name": "A"
      },
      "unread": true,
      "to": [
        {
          "email": "c@example.com",
          "name": "C",
          "type": "to"
        }
      ],
      "timestamp": "1000",
      "headers": {
        "Reply-To": "aria@snake-eyes.com",
      },
      "important": false
    },
    type: "message"
  }, {
    _id: 'abcdp',
    message: {
      "html": "<h1>Another Email</h1>",
      "text": "Example text content",
      "subject": "example subject",
      "from": {
        "email": "aria@snake-eyes.com",
        "name": "A"
      },
      "unread": true,
      "to": [
        {
          "email": "ashok@snake-eyes.com",
          "name": "B",
          "type": "to"
        }
      ],
      "timestamp": "1000",
      "headers": {
        "Reply-To": "aria@snake-eyes.com",
      },
      "important": false
    },
    type: "message"
  }, {
    name: "Ashok",
    email: "ashok@snake-eyes.com",
    type: "user"
  }, {
    name: "Dan",
    email: "dan@snake-eyes.com",
    type: "user"
  }, {
    name: "Aria",
    email: "aria@snake-eyes.com",
    type: "user"
  }, {
    name: "Pete",
    email: "pete@snake-eyes.com",
    type: "user"
  }]
};
