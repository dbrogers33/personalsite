import React from 'react';
import Helmet from 'react-helmet';
import config from '../../config/website';

const SEO = () => {
  const title = config.siteTitle;
  const description = config.siteDescription;
  const realPrefix = config.pathPrefix === '/' ? '' : config.pathPrefix;
  const image = config.siteUrl + realPrefix + config.siteLogo;
  const blogURL = config.siteUrl + config.pathPrefix;
  const schemaOrgJSONLD = [
    {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      url: blogURL,
      name: title,
      alternateName: config.siteTitleAlt ? config.siteTitleAlt : '',
    },
  ];
  return (
    <Helmet>
      <html lang={config.siteLanguage} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="image" content={image} />
      <script type="application/ld+json">{JSON.stringify(schemaOrgJSONLD)}</script>
    </Helmet>
  );
};

export default SEO;
