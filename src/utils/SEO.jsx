import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function SEO({
  title,
  description,
  name,
  type,
  imageUrl,
  url,
  locale = "en_GB"
}) {
  return (
    <HelmetProvider>
      <Helmet>
        {/* Basic HTML Metadata */}
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={url} />
        <html lang="en" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content={type} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:url" content={url} />
        <meta property="og:locale" content={locale} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content={name} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={imageUrl} />
      </Helmet>
    </HelmetProvider>
  );
}
