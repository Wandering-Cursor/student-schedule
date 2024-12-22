let path = process.env.PUBLIC_PATH;

if (path === undefined) {
  path = '/';
}
if (path.indexOf('/') !== -1) {
  path.split('/').map((item) => {
    if (item !== '') {
      path = item;
    }
  });
}

module.exports = {
  publicPath: process.env.PUBLIC_PATH.split("/") || '/',
}
