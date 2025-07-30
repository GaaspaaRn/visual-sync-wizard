import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

function SEOCanonical() {
  const location = useLocation();
  const canonicalUrl = `https://gruvlabel.com${location.pathname}`;

  return (
    <Helmet>
      <link rel="canonical" href={canonicalUrl} />
    </Helmet>
  );
}

export default SEOCanonical;