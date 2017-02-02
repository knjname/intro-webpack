module.exports = {
    entry: './src/index.js',
    output: {
        path: 'assets',
        publicPath: 'assets/', // たとえば url('./hoge.png')であれば url('assets/hoge.png' ) のようにここのパスで展開される
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            // https://github.com/webpack-contrib/css-loader
            // 依存CSSファイルをJS化してくれるやつ
            // https://github.com/webpack-contrib/style-loader
            // JS化されたCSSを <style> タグの中に入れるやつ
            test: /\.css$/,
            loaders: ['style-loader', 'css-loader'], // 適用順序は css-loader => style-loader の順番.
        }, {
            // https://github.com/webpack-contrib/url-loader
            // 依存ファイルを Base64 URL 化してくれるやつ
            test: /foobar\.png$/,
            loader: 'url-loader',
        }, {
            // https://github.com/webpack-contrib/file-loader
            // 依存ファイルをassetsの下に ``ハッシュ.png` とかで`コピーしてくれるやつ
            test: /barbaz\.png$/,
            loader: 'file-loader',
        }, ]
    }
}
