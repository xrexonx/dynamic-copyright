"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = dynamicCopyright = function dynamicCopyright(companyName) {
  return "\xA9 " + new Date().getFullYear() + " " + companyName;
};

// module.exports = function dynamicCopyright(companyName) {
//   return `© ${new Date().getFullYear()} ${companyName}`;
// };