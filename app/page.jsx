import ChurchNavbr from '@/app/ui/Navbar'
import ChurchHero from '@/app/ui/heroSection'
import MonthlyProgram from '@/app/ui/section'
import SermonGrid from '@/app/ui/virtualLibrary'
import ChurchFooter from '@/app/ui/socialAddress'

const SITE_URL = "https://www.chrysolitefellowship.org";

export const metadata = {
  title: "Chrysolite Interdenominational Fellowship | Raising Refined Believers",
  description: "A Christ-centered community committed to unity and spiritual transformation. Explore our virtual sermon library, join our monthly programs, and grow in faith.",
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Chrysolite Interdenominational Fellowship",
    description: "Firm in faith, rich in wisdom. Join our fellowship and explore our sermon library.",
    url: SITE_URL,
    siteName: "Chrysolite Fellowship",
    type: "website",
    images: [
      {
        url: "/og-home.jpg", // Ensure this is in your public folder
        width: 1200,
        height: 630,
        alt: "Chrysolite Fellowship Community",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chrysolite Fellowship",
    description: "Raising believers firm in faith and passionate about God's purpose.",
    images: ["/og-home.jpg"],
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "url": SITE_URL,
        "name": "Chrysolite Interdenominational Fellowship",
        "description": "Interdenominational Christian Fellowship in Nigeria",
        "publisher": { "@id": `${SITE_URL}/#organization` }
      },
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        "name": "Chrysolite Interdenominational Fellowship",
        "url": SITE_URL,
        "logo": `${SITE_URL}/logo.png`,
        "sameAs": [
          "https://facebook.com/chrysolite", // Add your real links
          "https://instagram.com/chrysolite",
          "https://youtube.com/chrysolite"
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ChurchNavbr />
      <ChurchHero />
      <SermonGrid />
      <MonthlyProgram />
      <ChurchFooter />
    </>
  );
}