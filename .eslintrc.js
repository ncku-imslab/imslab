module.exports = {
  "extends": [
    "google",
    "plugin:react/recommended",
  ],
  "env": {
    "es6": true,
  },
  "settings": {
    "react": {
      "version": "detect",
    },
  },
  "parser": "babel-eslint",
  "rules": {
    "max-len": [ 
      "error", 
      { 
        "code": 120,
        "ignoreUrls": true,
      },
    ],
  },
};
