// export default dynamicCopyright = companyName => `© ${new Date().getFullYear()} ${companyName}`;

module.exports = function dynamicCopyright(companyName) {
  return `© ${new Date().getFullYear()} ${companyName}`;
};
