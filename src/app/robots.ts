import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: ['AdsBot-Google', 'AdsBot-Google-Mobile', 'Mediapartners-Google', 'Googlebot'],
        allow: '/',
      },
    ],
    sitemap: 'https://d7ventures.com/sitemap.xml',
  };
}

