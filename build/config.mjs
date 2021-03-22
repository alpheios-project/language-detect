import path from 'path'
const projectRoot = process.cwd()

const webpack = {
  common: {
    entry: './index.js',
    output: {
      library: 'LanguageDetect',
      libraryTarget: 'window',
      chunkFilename: 'language-detect.[name].js',
      path: path.join(projectRoot, 'dist/')
    },
    resolve: {
      alias: {
        '@': path.join(projectRoot, 'src')
      }
    },
    plugins: [
    ],
    module: {
      rules: [
      ]
    }
  },

  production: {
    mode: 'production',
    output: {
      filename: 'alpheios-language-detect.min.js'
    },
    plugins: [
    ]
  },

  development: {
    mode: 'development',
    output: {
      filename: 'alpheios-language-detect.js'
    },
    plugins: [
    ]
  }
}

export { webpack }
