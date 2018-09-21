const tailwind = require('../tailwind');

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Denham Rogers - Web Developer and Designer', // Navigation and Site Title
  siteTitleAlt: 'Denham Rogers - Web Devleop and Designer', // Alternative Site title for SEO
  siteUrl: 'https://denhamrogers.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logos/logo-1024.png', // Used for SEO and manifest
  siteDescription: 'Denham Rogers is a web developer and graphic designer in Murray, KY. He freelances on the side and is currently for hire.',

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@denham_rogers', // Twitter Username
  ogSiteName: 'denhamrogers', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
};
