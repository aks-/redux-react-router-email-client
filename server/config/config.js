{
  "middleware": {

    "cookieParser": {
      "module": {
        "arguments": [ "iamnoughtouthtoken" ]
      }
    },

    "session": {
      "module": {
        "arguments": [
          {
            "secret": "boomboomboomer",
            "cookie": {
              "path": "/",
              "httpOnly": true,
              "maxAge": null
            },
            "resave": true,
            "saveUninitialized": true,
            "proxy": null
          }
        ]
      }
    }

  }
}
