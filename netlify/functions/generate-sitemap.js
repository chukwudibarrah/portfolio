// netlify/functions/generate-sitemap.js
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
    console.log('Fetching journal entries from Contentful...');
    const journalEntries = await contentfulClient.getEntries({ content_type: 'journal' });
    console.log('Fetched journal entries:', journalEntries.items.length);

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
    return { statusCode: 500, body: JSON.stringify({ error: 'Error fetching journal entries' }) };
  }

  try {
    console.log('Fetching projects from FaunaDB...');
    const projectsResult = await faunaClient.query(
      q.Map(
        q.Paginate(q.Documents(q.Collection('projects'))),
        q.Lambda('doc', q.Get(q.Var('doc')))
      )
    );
    console.log('Fetched projects:', projectsResult.data.length);

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
    return { statusCode: 500, body: JSON.stringify({ error: 'Error fetching projects' }) };
  }

  urls.push(
    { loc: 'https://chukwudibarrah.com', changefreq: 'weekly', priority: 1.0 },
    { loc: 'https://chukwudibarrah.com/about', changefreq: 'monthly', priority: 0.7 },
    { loc: 'https://chukwudibarrah.com/contact', changefreq: 'yearly', priority: 0.5 }
  );

  try {
    console.log('Generating sitemap...');
    const sitemapPath = path.join(__dirname, '..', '..', 'public', 'sitemap.xml');
    if (!fs.existsSync(path.dirname(sitemapPath))) {
      fs.mkdirSync(path.dirname(sitemapPath), { recursive: true });
    }
    createSitemap({
      filePath: sitemapPath,
      urls,
    });

    console.log('Sitemap generated successfully.');

    return { statusCode: 200, body: 'Sitemap generated successfully' };
  } catch (error) {
    console.error('Error generating sitemap:', error);
    return { statusCode: 500, body: JSON.stringify({ error: 'Error generating sitemap' }) };
  }
};

export { handler };
