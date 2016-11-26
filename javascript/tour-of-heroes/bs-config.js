module.exports = {
  port: 8000,
  files: [
    'dist/**/*.{html,css,js,png,jpg}'
  ],
  server: {
    baseDir: 'dist/',
    middleware: {
      0: null // removes default 'connect-logger' middleware
    }
  },
  logLevel: 'silent'
};
