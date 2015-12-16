# React Relay Chat

![](https://raw.githubusercontent.com/sibeliusseraphini/react-relay-chat/master/screenshots/messenger.png)

## Installation

```
npm install --global babel
npm install
```

## Running

Start a local server:

```
npm start
```

## Developing

Any changes you make to files in the `js/` directory will cause the server to
automatically rebuild the app and refresh your browser.

If at any time you make changes to `data/schema.js`, stop the server,
regenerate `data/schema.json`, and restart the server:

```
npm run update-schema
npm start
```

A working in progress, I will base myself on [flux-chat](https://github.com/facebook/flux/tree/master/examples/flux-chat)
