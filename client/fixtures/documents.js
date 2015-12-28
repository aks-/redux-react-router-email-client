export default [{
  id: 'cdtra',
  thread_id: 2, //This is the id if it's part of some thread otherwise this property won't exist in document
  message: {
    "html": "<p>Example HTML content</p>",
    "text": "Example text content",
    "subject": "example subject",
    "from": {
      "email": "a@example.com",
      "name": "A"
    },
    "unread": false,
    "to": [
      {
        "email": "b@example.com",
        "name": "B",
        "type": "to"
      }
    ],
    "timestamp": "1000",
    "headers": {
      "Reply-To": "a@example.com",
    },
    "important": false
  }
}, {
  id: 'abcde',
  thread_id: 2, //This is the id if it's part of some thread otherwise this property won't exist in document
  message: {
    "html": "<h1>Example HTML reply</h1>",
    "text": "Example reply",
    "subject": "example subject",
    "from": {
      "email": "b@example.com",
      "name": "B"
    },
    "unread": true,
    "to": [
      {
        "email": "a@example.com",
        "name": "A",
        "type": "to"
      }
    ],
    "timestamp": "1200",
    "headers": {
      "Reply-To": "b@example.com",
    },
    "important": false
  }
}, {
  id: 'abcdl',
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
        "email": "b@example.com",
        "name": "B",
        "type": "to"
      }
    ],
    "timestamp": "1300",
    "headers": {
      "Reply-To": "c@example.com",
    },
    "important": false
  }
}, {
  id: 'abcdm',
  message: {
    "html": "<h1>Example HTML content</h1>",
    "text": "Example text content",
    "subject": "example subject",
    "from": {
      "email": "a@example.com",
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
      "Reply-To": "a@example.com",
    },
    "important": false
  }
}, {
  id: 'abcdp',
  message: {
    "html": "<h1>Another Email</h1>",
    "text": "Example text content",
    "subject": "example subject",
    "from": {
      "email": "a@example.com",
      "name": "A"
    },
    "unread": true,
    "to": [
      {
        "email": "b@example.com",
        "name": "B",
        "type": "to"
      }
    ],
    "timestamp": "1000",
    "headers": {
      "Reply-To": "a@example.com",
    },
    "important": false
  }
}];
