const path = require('path');

module.exports = {
     module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.scss$/,
                include: [
                    path.resolve(__dirname, 'src', 'sass')
                ],
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    }
}