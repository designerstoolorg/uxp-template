// @ts-check
const { getDefaultWebpackConfig } = require("./webpack.config.common");
const DIST_FOLDER = "dist/adobe-xd";

module.exports = getDefaultWebpackConfig({
    inputFile: "./src/main.xd.tsx",
    outputFileName: "main.js",
    outputDir: DIST_FOLDER,
    copyDirectory: "public/xd",
    isXd: true,
    libraryTarget: "commonjs2",
});
