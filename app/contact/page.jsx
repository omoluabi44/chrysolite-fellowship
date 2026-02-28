import ContactPage from "../ui/contact";

const SITE_URL = "https://www.chrysolitefellowship.org"; // Replace with your actual domain

export const metadata = {
  title: "Contact Us | Chrysolite Interdenominational Fellowship",
  description: "Have questions or need prayer? Contact Chrysolite Fellowship. Join our meetings, reach out for counseling, or find our location. We are here for you.",
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
  openGraph: {
    title: "Get in Touch with Chrysolite Fellowship",
    description: "Reach out to us for prayer, inquiries, or to join our next fellowship meeting.",
    url: `${SITE_URL}/contact`,
    type: "website",
    images: [
      {
        url: `${SITE_URL}/og-contact.jpg`, // Ensure this exists in your public folder
        width: 1200,
        height: 630,
        alt: "Contact Chrysolite Fellowship",
      },
    ],
  },
};

export default function Contact() {
  // LocalBusiness Schema is powerful for "near me" search rankings
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "PlaceOfWorship", // Specific for churches/fellowships
    "name": "Chrysolite Interdenominational Fellowship",
    "description": "A Christ-centered community committed to unity and spiritual transformation.",
    "url": SITE_URL,
    "telephone": "++234 903 020 5960", // Add your real phone number
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1 CHRYSOLITE GLOBAL STREET, MILITARY LANDLORD'S ESTATE, ELEKO JUNCTION, IBEJU LEKKI", // Add your physical address
      "addressLocality": "Lagos",
      "addressRegion": "LA",
      "postalCode": "100001",
      "addressCountry": "NG"
    },
   
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ContactPage />
    </>
  );
}