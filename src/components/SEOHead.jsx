import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEOHead = ({ 
  title, 
  description, 
  image, 
  url, 
  type = 'website',
  artist = null,
  socialLinks = {}
}) => {
  const siteUrl = 'https://gruvlabel.com';
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl;
  const fullImageUrl = image ? `${siteUrl}${image}` : `${siteUrl}/og-image.jpg`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Gruv Label" />
      
      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://open.spotify.com" />
      <link rel="preconnect" href="https://www.youtube.com" />
      <link rel="preconnect" href="https://www.instagram.com" />
      
      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//www.instagram.com" />
      
      {/* Structured Data for Artist */}
      {artist && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": artist.name,
            "description": artist.description,
            "url": fullUrl,
            "image": fullImageUrl,
            "jobTitle": "DJ/Producer",
            "memberOf": {
              "@type": "Organization",
              "name": "Gruv Label"
            },
            "sameAs": Object.values(socialLinks).filter(Boolean)
          })}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead;