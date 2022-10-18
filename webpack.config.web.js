const { getDefaultWebpackConfig } = require("./webpack.config.common");
const DIST_FOLDER = "dist/web"

module.exports = getDefaultWebpackConfig({
    inputFile: "./src/main.web.tsx",
    outputDir: DIST_FOLDER,
    outputFileName: "index.js",
    copyDirectory: "public/web",
    isWeb: true,
    // for ps you don't need to set it to anything or else it will throw error
    // "This entry module is referenced by other modules so it can't be inlined"
    // which will cause the error module is not defined
    libraryTarget: "commonjs2",
});
