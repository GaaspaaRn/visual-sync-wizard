import React from 'react';
import { Helmet } from 'react-helmet-async';

const StructuredData = ({ type = 'website', data = {} }) => {
  const getStructuredData = () => {
    const baseData = {
      "@context": "https://schema.org",
      "@type": type === 'artist' ? 'Person' : 'Organization',
      "name": data.name || "Gruv Label",
      "url": data.url || "https://gruvlabel.com",
      "description": data.description || "Empresa especializada em Producers de Música Eletrônica e DJs para eventos em São Paulo"
    };

    if (type === 'artist') {
      return {
        ...baseData,
        "@type": "Person",
        "jobTitle": "Electronic Music Producer & DJ",
        "genre": ["Electronic Music", "Mega Funk", "Brazilian Electronic"],
        "memberOf": {
          "@type": "Organization",
          "name": "Gruv Label",
          "url": "https://gruvlabel.com"
        },
        "sameAs": data.socialLinks ? Object.values(data.socialLinks).filter(Boolean) : [],
        "image": data.image,
        "performer": {
          "@type": "PerformingGroup",
          "name": data.name,
          "genre": ["Electronic Music", "Mega Funk"]
        },
        "knowsAbout": ["Music Production", "DJ Performance", "Electronic Music", "Event Entertainment"]
      };
    }

    if (type === 'website') {
      return {
        ...baseData,
        "@type": "Organization",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "São Paulo",
          "addressRegion": "SP",
          "addressCountry": "BR"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+5511999999999",
          "contactType": "customer service",
          "availableLanguage": "Portuguese"
        },
        "sameAs": [
          "https://instagram.com/gruvlabel",
          "https://youtube.com/@gruvlabel"
        ],
        "offers": {
          "@type": "Offer",
          "name": "Serviços de DJ Electronic Music para Eventos",
          "description": "Producers de música eletrônica e DJs profissionais especializados em Mega Funk para festas, casamentos, eventos corporativos",
          "category": "Entertainment Services",
          "genre": ["Electronic Music", "Mega Funk", "Brazilian Electronic"]
        }
      };
    }

    return baseData;
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(getStructuredData())}
      </script>
    </Helmet>
  );
};

export default StructuredData;