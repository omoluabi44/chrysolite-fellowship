import AboutPage from "../ui/about";

// This is the standard Next.js Metadata API (JavaScript version)
export const metadata = {
  title: "About Us | Chrysolite Interdenominational Fellowship",
  description: "Discover Chrysolite Fellowship—a Christ-centered community raising believers firm in faith and rich in biblical wisdom. Join our global family.",
  alternates: {
    canonical: "https://www.chrysolitefellowship.org/about",
  },
  openGraph: {
    title: "About Chrysolite Interdenominational Fellowship",
    description: "Raising refined believers firm in faith and passionate about God’s purpose.",
    url: "https://www.chrysolitefellowship.org/about",
    siteName: "Chrysolite Fellowship",
    type: "website",
    images: [
      {
        url: "https://yourdomain.com/og-about.jpg",
        width: 1200,
        height: 630,
        alt: "Chrysolite Fellowship Community",
      },
    ],
  },
};

export default function About() {
  // Schema.org Structured Data to help Google categorize your organization
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Chrysolite Interdenominational Fellowship",
    "url": "https://www.chrysolitefellowship.org/",
    "logo": "https://yourdomain.com/logo.png",
    "description": "A Christ-centered community committed to unity and spiritual transformation.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lagos", 
      "addressCountry": "NG"
    }
  };

  return (
    <>
      {/* Injecting Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AboutPage />
    </>
  );
}