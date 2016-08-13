module.exports = {
    entry: './app/app.module.js',
    output: {
        path: './bin',
        filename: 'app.bundle.js',
    },
    module: {
        loaders: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
        },
        { test: /\.html$/, loader: "html" },
        { test: /\.css$/, loader: "style!css" }
      ]
    },
    devtool: "#inline-source-map"
}
