// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {
  // api.loadSource(({ addCollection }) => {
  //   // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
  // })

  api.loadSource(async store => {
    store.addMetadata('bloglink', 'https://zen.yandex.ru/id/5b2f619a3acfb800a8af799a')
    store.addMetadata('subscribelink', 'https://forms.gle/cG9HMKL1a3yhEAPK6')
    store.addMetadata('email', 'ping@airalab.org')
    store.addMetadata('formBlockchainStamp', 'https://forms.gle/T9b9AypLMY4Ti2Av8')
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })
}
