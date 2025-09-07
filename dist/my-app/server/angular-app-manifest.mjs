
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5080, hash: 'ee75949ffc2d8168b5101cc900356e244b5ac9081b5d16392fda916a83711efa', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1196, hash: 'ca6cbe0432ce1da1aaad0eb8b2e2addf45dbd6ad5f7e84ac93b1db6bc6fba6cd', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 85917, hash: '4a3f8d7af7325d4899dbf00a5b7e505b395a8945a7aa4d5472a0e8dc2a6118ec', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-CQCKUAHT.css': {size: 231651, hash: 'GganuOuVPo0', text: () => import('./assets-chunks/styles-CQCKUAHT_css.mjs').then(m => m.default)}
  },
};
