export const metadata = {
  title: "Mortgage Fishing | Contact",
  description:
    "Reach out to us for personalized financial guidance and support. Connect with our team to discuss your specific needs and queries.",
  keywords: [
    "contact mortgage broker",
    "free advice",
    "chat about mortgage rates",
    "chat about interest rates",
    "mortgage brokers",
    "mortgage rates informations",
    "chat for free information",
    "chat for with broker",
    "contact broker",
  ],
  openGraph: {
    title: "Mortgage Fishing | Contact",
    description:
      "Reach out to us for personalized financial guidance and support. Connect with our team to discuss your specific needs and queries.",
    url: "https://mortgagefishing.com/contact",
    type: "website",
    images: [
      {
        url: "/assets/presentation.png",
        width: 500,
        height: 500,
        alt: "image of a presenter with a whiteboard",
      },
    ],
  },
};

export default function ContactLayout({ children }) {
  return <div>{children}</div>;
}
