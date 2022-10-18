
const path = require("path");
const process = require("process");
const webpack = require("webpack");
const BundleAnalyzerPlugin =
    require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const CopyPlugin = require("copy-webpack-plugin");
const isAnalyze = process.argv.join(" ").includes("analyze");

const getDefaultWebpackConfig = ({
    inputFile,
    outputDir,
    outputFileName,
    copyDirectory,
    isXd = false,
    isPs = false,
    isWeb = false,
    libraryTarget,
}) => {
    const plugins = [
        new CopyPlugin({
            patterns: [{ from: copyDirectory, to: "" }],
        }),
        // fixes the styled component issue on production build
        new webpack.DefinePlugin({
            SC_DISABLE_SPEEDY: true,
            "process.env": {
                HOST_XD: isXd ? true : false,
                HOST_PS: isPs ? true : false,
                HOST_WEB: isWeb ? true : false,
            },
        }),
    ];

    return {
        entry: inputFile,
        mode: "production",
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: "ts-loader",
                    exclude: /node_modules/,
                },
                {
                    test: /\.svg/,
                    type: 'asset/inline'
                }
            ],
        },
        devtool: "cheap-source-map",
        plugins: isAnalyze ? [new BundleAnalyzerPlugin()] : plugins,
        externals: {
            application: "commonjs application",
            assets: "commonjs assets",
            clipboard: "commonjs clipboard",
            cloud: "commonjs cloud",
            commands: "commonjs commands",
            index: "commonjs index",
            interactions: "commonjs interactions",
            scenegraph: "commonjs scenegraph",
            uxp: "commonjs uxp",
            viewport: "commonjs viewport",
            photoshop: "commonjs photoshop",
        },

        resolve: {
            extensions: [".tsx", ".ts", ".js"],
        },
        output: {
            path: path.resolve(__dirname, outputDir),
            filename: outputFileName,
            libraryTarget: libraryTarget,

        },
    };
};

module.exports = { getDefaultWebpackConfig };
