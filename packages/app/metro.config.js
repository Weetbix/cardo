// jest-haste-map hates that we have package json files in folders with the same
// name in our lerna project up in backend/amplify/etc/etc/etc and will refuse
// to build.
// Here we blacklist those folders. see: https://github.com/facebook/react-native/issues/7271
const blacklist = require("metro-config/src/defaults/blacklist");

module.exports = {
  resolver: {
    blacklistRE: blacklist([/backend\/amplify\/.*/]),
  },
};
