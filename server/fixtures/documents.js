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
        avatar: "https://avatars1.githubusercontent.com/u/2876?v=3&s=460",
        "name": "Aria"
      },
      "unread": false,
      "to": [ {
        "email": "ashok@snake-eyes.com",
        avatar: "https://avatars3.githubusercontent.com/u/8316625?v=3&s=460",
        "name": "Ashok",
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
        avatar: "https://avatars3.githubusercontent.com/u/8316625?v=3&s=460",
        "name": "Ashok"
      },
      "unread": true,
      "to": [
        {
          "email": "aria@snake-eyes.com",
          avatar: "https://avatars1.githubusercontent.com/u/2876?v=3&s=460",
          "name": "Aria",
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
    _id: 'abcdp',
    message: {
      "html": "<h1>Another Email</h1>",
      "text": "Example text content",
      "subject": "example subject",
      "from": {
        "email": "aria@snake-eyes.com",
        avatar: "https://avatars1.githubusercontent.com/u/2876?v=3&s=460",
        "name": "Aria"
      },
      "unread": true,
      "to": [
        {
          "email": "ashok@snake-eyes.com",
          avatar: "https://avatars3.githubusercontent.com/u/8316625?v=3&s=460",
          "name": "Ashok",
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
    thread_id: 2, //This is the id if it's part of some thread otherwise this property won't exist in document
    message: {
      "html": "<p>Example HTML content</p>",
      "text": "Example text content",
      "subject": "example subject",
      "from": {
        "email": "pete@snake-eyes.com",
        avatar: "https://avatars0.githubusercontent.com/u/239742?v=3&s=460",
        "name": "Pete"
      },
      "unread": false,
      "to": [ {
        "email": "fishrock123@snake-eyes.com",
        avatar: "https://avatars1.githubusercontent.com/u/1093990?v=3&s=400",
        "name": "Jeremiah",
        "type": "to"
      }
      ],
      "timestamp": "1000",
      "headers": {
        "Reply-To": "pete@snake-eyes.com",
      },
      "important": false
    },
    type: "message"
  }, {
    thread_id: 2, //This is the id if it's part of some thread otherwise this property won't exist in document
    message: {
      "html": "<h1>Example HTML reply</h1>",
      "text": "Example reply",
      "subject": "example subject",
      "from": {
        "email": "fishrock123@snake-eyes.com",
        avatar: "https://avatars1.githubusercontent.com/u/1093990?v=3&s=400",
        "name": "Jeremiah"
      },
      "unread": true,
      "to": [
        {
          "email": "pete@snake-eyes.com",
          avatar: "https://avatars0.githubusercontent.com/u/239742?v=3&s=460",
          "name": "Pete",
          "type": "to"
        }
      ],
      "timestamp": "1200",
      "headers": {
        "Reply-To": "fishrock123@snake-eyes.com",
      },
      "important": false
    },
    type: "message"
  }, {
    message: {
      "html": "<h1>Another Email</h1>",
      "text": "Example text content",
      "subject": "example subject",
      "from": {
        "email": "pete@snake-eyes.com",
        avatar: "https://avatars0.githubusercontent.com/u/239742?v=3&s=460",
        "name": "Pete"
      },
      "unread": true,
      "to": [
        {
          "email": "fishrock123@snake-eyes.com",
          avatar: "https://avatars1.githubusercontent.com/u/1093990?v=3&s=400",
          "name": "Jeremiah",
          "type": "to"
        }
      ],
      "timestamp": "1000",
      "headers": {
        "Reply-To": "pete@snake-eyes.com",
      },
      "important": false
    },
    type: "message"
  }, {
    thread_id: 2, //This is the id if it's part of some thread otherwise this property won't exist in document
    message: {
      "html": "<p>Example HTML content</p>",
      "text": "Example text content",
      "subject": "example subject",
      "from": {
        "email": "pete@snake-eyes.com",
        avatar: "https://avatars0.githubusercontent.com/u/239742?v=3&s=460",
        "name": "Pete"
      },
      "unread": false,
      "to": [ {
        "email": "dan@snake-eyes.com",
        avatar: "https://avatars0.githubusercontent.com/u/810438?v=3&s=460",
        "name": "Dan",
        "type": "to"
      }
      ],
      "timestamp": "1000",
      "headers": {
        "Reply-To": "pete@snake-eyes.com",
      },
      "important": false
    },
    type: "message"
  }, {
    thread_id: 2, //This is the id if it's part of some thread otherwise this property won't exist in document
    message: {
      "html": "<h1>Example HTML reply</h1>",
      "text": "Example reply",
      "subject": "example subject",
      "from": {
        "email": "dan@snake-eyes.com",
        avatar: "https://avatars0.githubusercontent.com/u/810438?v=3&s=460",
        "name": "Dan"
      },
      "unread": true,
      "to": [
        {
          "email": "pete@snake-eyes.com",
          avatar: "https://avatars0.githubusercontent.com/u/239742?v=3&s=460",
          "name": "Pete",
          "type": "to"
        }
      ],
      "timestamp": "1200",
      "headers": {
        "Reply-To": "dan@snake-eyes.com",
      },
      "important": false
    },
    type: "message"
  }, {
    message: {
      "html": "<h1>Another Email</h1>",
      "text": "Example text content",
      "subject": "example subject",
      "from": {
        "email": "pete@snake-eyes.com",
        avatar: "https://avatars0.githubusercontent.com/u/239742?v=3&s=460",
        "name": "Pete"
      },
      "unread": true,
      "to": [
        {
          "email": "dan@snake-eyes.com",
          avatar: "https://avatars0.githubusercontent.com/u/810438?v=3&s=460",
          "name": "Dan",
          "type": "to"
        }
      ],
      "timestamp": "1000",
      "headers": {
        "Reply-To": "pete@snake-eyes.com",
      },
      "important": false
    },
    type: "message"
  }, {
    name: "Ashok",
    email: "ashok@snake-eyes.com",
    avatar: "https://avatars3.githubusercontent.com/u/8316625?v=3&s=460",
    type: "user"
  }, {
    name: "Dan",
    email: "dan@snake-eyes.com",
    avatar: "https://avatars0.githubusercontent.com/u/810438?v=3&s=460",
    type: "user"
  }, {
    name: "Aria",
    email: "aria@snake-eyes.com",
    avatar: "https://avatars1.githubusercontent.com/u/2876?v=3&s=460",
    type: "user"
  }, {
    name: "Pete",
    email: "pete@snake-eyes.com",
    avatar: "https://avatars0.githubusercontent.com/u/239742?v=3&s=460",
    type: "user"
  }, {
    name: "Jeremiah",
    email: "fishrock123@snake-eyes.com",
    avatar: "https://avatars1.githubusercontent.com/u/1093990?v=3&s=400",
    type: "user"
  }]
};
