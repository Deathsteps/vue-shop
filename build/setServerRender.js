const fs = require('fs')
const path = require('path')
const serialize = require('serialize-javascript')

// create bundle renderer
const createBundleRenderer = require('vue-server-renderer').createBundleRenderer
const renderer = createBundleRenderer(
  fs.readFileSync(path.resolve(__dirname, '../dist/server-bundle.js'), 'utf-8')
)
// Get the HTML layout
// NOTE: Actually the layout should be read after webpack generate the real index.html,
// I just simplify the progress here. For an full example, take a look at the follow code.
      // clientCompiler.plugin('done', () => {
      //   const fs = devMiddleware.fileSystem
      //   const filePath = path.join(clientConfig.output.path, 'index.html')
      //   if (fs.existsSync(filePath)) {
      //     const index = fs.readFileSync(filePath, 'utf-8')
      //     opts.indexUpdated(index)
      //   }
      // })
var layout = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8')

module.exports = function (app) {
  // Handle all GET requests
  app.get('*', function (request, response, next) {
    // dont handle the assets requests
    if (request.url.indexOf('/static/') > -1) {
      return next()
    }

    const context = { url: request.url }
    renderer.renderToString(
      context,
      // Handle the rendered result
      function (error, html) {
        // If an error occurred while rendering...
        if (error) {
          // Log the error in the console
          console.error(error)
          // Tell the client something went wrong
          return response
            .status(500)
            .send('Server Error')
        }
        // embed initial store state
        var initialStateScript = ''
        if (context.initialState) {
          initialStateScript =
            `<script>window.__INITIAL_STATE__=${
              serialize(context.initialState, { isJSON: true })
            }</script>`
        }
        // Send the layout with the rendered app's HTML
        var appScript = '<script type="text/javascript" src="/static/app.js"></script>'
        response.send(layout.replace('<div id="app"></div>', html + initialStateScript + appScript))
      }
    )
  })
}
