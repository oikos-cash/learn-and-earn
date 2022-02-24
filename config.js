const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://oikos.cash/',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: 'https://i.imgur.com/cSmL6S6.png',
    logoLink: '/',
    title:
      "<a href='https://oikos.cash/'>Home</a>",
    githubUrl: 'https://github.com/oikos-cash',
    helpUrl: '',
    tweetText: '',
    social: `<li>
		    <a href="https://twitter.com/oikos_cash" target="_blank" rel="noopener">
		      <div class="twitterBtn">
		        <img src='https://i.imgur.com/VjAnbpy.png' alt={'Twitter'}/>
		      </div>
		    </a>
		  </li>
			<li>
		    <a href="https://discord.gg/eEZbtVKgbb" target="_blank" rel="noopener">
		      <div class="discordBtn">
		        <img src='https://i.imgur.com/dgYNO9Q.png' alt={'Discord'}/>
		      </div>
		    </a>
		  </li>`,
    links: [{ text: '', link: '' }],
    search: {
      enabled: true,
      indexName: 'onboarding',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/wallets',
      '/minter',
      '/burn',
      '/debt',
    /*  '/rewards', */
      '/exchange',
      '/loans',
      '/liquidations',
      '/yield_farming',
    ],
    collapsedNav: [
      '/codeblock', // add trailing slash if enabled above
    ],
    links: [{ text: 'Home', link: '/' }],
    frontline: false,
    ignoreIndex: true,
    title:
      "<a href='#'></a><div class='goldCircle'></div><a href='#'>User Guide</a>",
  },
  siteMetadata: {
    title: 'Oikos Cash - Learn',
    description: 'Decentralized synthetic asset trading on BSC',
    ogImage: null,
    docsLocation: '',
    favicon: 'https://raw.githubusercontent.com/oikos-cash/oikos-website/master/static/images/favicon.ico',
  },
};

module.exports = config;
