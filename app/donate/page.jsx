import GivingPage from '@/app/ui/donationPage'
import ChurchNavbr from '@/app/ui/Navbar'
import ChurchFooter from '@/app/ui/socialAddress'

const SITE_URL = "https://www.chrysolitefellowship.org";

export const metadata = {
  title: "Support Our Mission | Giving to Chrysolite Fellowship",
  description: "Your generosity fuels spiritual transformation. Support Chrysolite Interdenominational Fellowship through your tithes, offerings, and seeds to help us reach more souls.",
  alternates: {
    canonical: `${SITE_URL}`,
  },
  openGraph: {
    title: "Support Chrysolite Interdenominational Fellowship",
    description: "Join us in raising refined believers. Securely give your tithes and offerings online.",
    url: SITE_URL,
    type: "website",
    images: [
      {
        url: `${SITE_URL}/og-giving.jpg`,
        width: 1200,
        height: 630,
        alt: "Chrysolite Fellowship Giving Page",
      },
    ],
  },
};

export default function Home() {
  // We use "DonateAction" schema to tell Google this page accepts contributions
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "DonatePage",
    "name": "Chrysolite Fellowship Giving",
    "description": "Support the gospel and community outreach programs of Chrysolite Interdenominational Fellowship.",
    "url": SITE_URL,
    "mainEntity": {
      "@type": "Organization",
      "name": "Chrysolite Interdenominational Fellowship",
      "logo": `${SITE_URL}/logo.png`
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ChurchNavbr />
      <GivingPage />
      <ChurchFooter />
    </>
  );
}