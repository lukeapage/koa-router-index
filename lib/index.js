const route = require('koa-route')
const render = require('./render')

function indexPageMiddleware (router, options = {}) {
  const {
    meta = {},
    excludeMethods = [ 'HEAD' ]
  } = options

  const renderedIndexPage = render(meta, router.stack, { excludeMethods })

  return route.get('/', ({ response }) => {
    response.set('Content-Type', 'text/html; charset=utf-8')
    response.body = renderedIndexPage
  })
}

module.exports = indexPageMiddleware
