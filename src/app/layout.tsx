import type { Metadata } from "next";
import "./globals.css";
import ScrollToTop from "../components/ScrollToTop";

export const metadata: Metadata = {
  metadataBase: new URL("https://d7ventures.com"),
  title: {
    default: "Multi Cuisine at district 7 - d7ventures.com",
    template: "%s | District 7 Kochi",
  },
  description:
    "Savor multi cuisine with Pan-Asian, Continental, Mediterranean and exquisite cakes and desserts served late night until 2 AM and 3 AM in Kadavanthra and Vyttila, Kochi. Perfect for any craving!",
  keywords: [
    "best steaks in kochi",
    "restaurants in kochi open late night",
    "kadavanthra restaurants",
    "vyttila restro cafe",
    "late night food ernakulam",
    "d7 encore",
    "district 7 restro cafe",
    "dulce cakes kochi",
    "best birthday cakes kochi",
    "hospitality consultancy kerala",
  ],
  authors: [{ name: "District 7 Ventures" }],
  creator: "BeezySolutions",
  publisher: "District 7 Ventures",
  formatDetection: {
    telephone: true,
    address: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "District 7 Hospitality Ventures | Kochi, Kerala",
    description:
      "Kochi's premier multi-venue dining group. Signature steaks, late-night hangouts till 3 AM, and Parisian patisserie in Kadavanthra and Vyttila.",
    url: "https://d7ventures.com",
    siteName: "District 7 Ventures",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://img1.wsimg.com/isteam/ip/351c4fe6-4561-484e-b03d-17791075b6bf/fb_3323984874544746_1440x1440.jpg",
        width: 1200,
        height: 630,
        alt: "District 7 Kochi Multi-Cuisine Experience",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "District 7 Hospitality Ventures | Kochi, Kerala",
    description: "Kochi's signature steaks, late-night hangouts till 3 AM, and French patisserie.",
    images: ["https://img1.wsimg.com/isteam/ip/351c4fe6-4561-484e-b03d-17791075b6bf/fb_3323984874544746_1440x1440.jpg"],
  },
  other: {
    "geo.region": "IN-KL",
    "geo.placename": "Kochi, Ernakulam, Kerala",
    "geo.position": "9.9674;76.2999",
    ICBM: "9.9674, 76.2999",
  },
  icons: {
    icon: "/images/district7-logo.png",
    apple: "/images/district7-logo.png",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Restaurant",
      "@id": "https://d7ventures.com/#encore",
      name: "District 7 Encore",
      image: "https://img1.wsimg.com/isteam/ip/351c4fe6-4561-484e-b03d-17791075b6bf/fb_3183803445229557_1080x733.jpg",
      url: "https://d7ventures.com/encore",
      telephone: "+917736030777",
      priceRange: "₹₹ - ₹₹₹",
      servesCuisine: ["Steaks", "Continental", "Pan-Asian", "Fine Dining", "Molecular Gastronomy"],
      address: {
        "@type": "PostalAddress",
        streetAddress: "Ozone Greens, Jawahar Nagar, Kadavanthra",
        addressLocality: "Kochi",
        addressRegion: "Kerala",
        postalCode: "682020",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 9.9674,
        longitude: 76.2999,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          opens: "12:00",
          closes: "02:00",
        },
      ],
      acceptsReservations: "True",
    },
    {
      "@type": "Restaurant",
      "@id": "https://d7ventures.com/#restrocafe",
      name: "District 7 Restro Cafe",
      image: "https://img1.wsimg.com/isteam/ip/351c4fe6-4561-484e-b03d-17791075b6bf/IMG-20241115-WA0016.jpg",
      url: "https://d7ventures.com/restro-cafe-1",
      telephone: "+917736030777",
      priceRange: "₹₹",
      servesCuisine: ["Steaks", "Sizzlers", "Burgers", "Loaded Fries", "Pastas", "Pan-Asian"],
      address: {
        "@type": "PostalAddress",
        streetAddress: "Near Mobility Hub, Vyttila",
        addressLocality: "Kochi",
        addressRegion: "Kerala",
        postalCode: "682019",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 9.9688,
        longitude: 76.3195,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          opens: "12:00",
          closes: "03:00",
        },
      ],
      acceptsReservations: "True",
    },
    {
      "@type": "Bakery",
      "@id": "https://d7ventures.com/#dulce",
      name: "District 7 Dulce Patisserie",
      image: "https://img1.wsimg.com/isteam/ip/351c4fe6-4561-484e-b03d-17791075b6bf/fb_878749324252078_1440x1440.jpg",
      url: "https://d7ventures.com/dulce-1",
      telephone: "+917736030777",
      priceRange: "₹₹",
      servesCuisine: ["French Patisserie", "Custom Cakes", "Cheesecakes", "Desserts"],
      address: {
        "@type": "PostalAddress",
        streetAddress: "Ozone Greens, Jawahar Nagar, Kadavanthra",
        addressLocality: "Kochi",
        addressRegion: "Kerala",
        postalCode: "682020",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 9.9674,
        longitude: 76.2999,
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="bg-white text-[#222222] min-h-screen">
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
