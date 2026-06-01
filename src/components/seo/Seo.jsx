import { Helmet } from "react-helmet-async";

export function Seo({ title, description }) {
  return (
    <Helmet>
      <title>{title}</title>

      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="visado emprendedor España, visa emprendedor España, ley 14/2013 emprendedores, permiso residencia emprendedor, startup visa España"
      />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />

      <meta name="robots" content="index, follow" />

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LegalService",
          name: "Entre Trámites",
          description: "Asesoría legal para emprendedores extranjeros en España",
          url: "https://entretramites.com",
          telephone: "+34930185237",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.5",
            reviewCount: "600",
          },
          areaServed: "España",
        })}
      </script>
    </Helmet>
  );
}