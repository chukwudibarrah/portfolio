import fs from 'fs';
import path from 'path';
import { createSitemap } from 'sitemaps';
import * as contentful from 'contentful';
import { Client, query as q } from 'faunadb';
import moment from 'moment';

const contentfulClient = contentful.createClient({
  space: process.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: process.env.VITE_CONTENTFUL_ACCESS_TOKEN,
});

const faunaClient = new Client({
  secret: process.env.VITE_FAUNA_ADMIN_KEY,
});

const handler = async (event, context) => {
  const urls = [];

  try {
    const journalEntries = await contentfulClient.getEntries({ content_type: 'journal' });
    journalEntries.items.forEach((entry) => {
      urls.push({
        loc: `https://chukwudibarrah.com/journal/${entry.fields.slug}`,
        lastmod: moment(entry.fields.published).format('YYYY-MM-DD'),
        changefreq: 'monthly',
        priority: 0.8,
      });
    });
  } catch (error) {
    console.error('Error fetching journal entries:', error);
    return { statusCode: 500, body: 'Error fetching journal entries' };
  }

  try {
    const projectsResult = await faunaClient.query(
      q.Map(
        q.Paginate(q.Documents(q.Collection('projects'))),
        q.Lambda('doc', q.Get(q.Var('doc')))
      )
    );
    projectsResult.data.forEach((project) => {
      urls.push({
        loc: project.data.url,
        lastmod: moment(project.data.updatedAt || project.data.createdAt).format('YYYY-MM-DD'),
        changefreq: 'monthly',
        priority: 0.6,
      });
    });
  } catch (error) {
    console.error('Error fetching projects:', error);
    return { statusCode: 500, body: 'Error fetching projects' };
  }

  urls.push(
    { loc: 'https://chukwudibarrah.com', changefreq: 'weekly', priority: 1.0 },
    { loc: 'https://chukwudibarrah.com/about', changefreq: 'monthly', priority: 0.7 },
    { loc: 'https://chukwudibarrah.com/contact', changefreq: 'yearly', priority: 0.5 }
  );

  const sitemapPath = path.join('/tmp', 'sitemap.xml');
  createSitemap({
    filePath: sitemapPath,
    urls,
  });

  const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');

  const publicSitemapPath = path.join(__dirname, '..', '..', '..', 'public', 'sitemap.xml');
  fs.writeFileSync(publicSitemapPath, sitemapContent);

  console.log('Sitemap generated successfully.');
  return { statusCode: 200, body: 'Sitemap generated successfully' };
};

export { handler };
