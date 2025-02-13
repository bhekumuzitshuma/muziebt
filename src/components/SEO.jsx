// components/Seo.js
import Head from "next/head";

export default function Seo({
  title,
  description,
  ogTitle,
  ogDescription,
  ogImage,
  ogUrl,
}) {
  return (
    <Head>
      {/* Basic SEO */}
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Open Graph (OG) Tags */}
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:image" content={ogImage || "/devsurvey.png"} />
      <meta
        property="og:url"
        content={ogUrl || "https://bhekumuzitshuma.netlify.app/"}
      />
      <meta property="og:type" content="website" />

      {/* Twitter Card (optional) */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogTitle || title} />
      <meta name="twitter:description" content={ogDescription || description} />
      <meta name="twitter:image" content={ogImage || "/devsurvey.png"} />
    </Head>
  );
}
