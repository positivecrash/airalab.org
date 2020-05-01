// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'АНО ИЦР Аиралаб Рус',
  siteDescription: 'Мы проводим эксперименты с Умными городами и Индустрией 4.0 в России',

  chainWebpack: config => {
    const svgRule = config.module.rule('svg');

    svgRule.uses.clear();

    svgRule
      .use('vue-svg-loader')
      .loader('vue-svg-loader');
     //  .options({
     //    svgo: {
     //      plugins: [
     //        { removeDimensions: true },
     //      ],
     //    },
   		// });
  }

  // plugins: [
  //   {
  //     use: 'gridsome-plugin-yandex-metrika',
  //     options: {
  //       id: 49460833
  //     }
  //   }
  // ]

}
