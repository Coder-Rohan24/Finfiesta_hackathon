import { UserProvider } from "@auth0/nextjs-auth0/client";
import "./styles/styles.css";

export const metadata = {
  title: "SecurePay",
  description:
    "Learn how to add user authentication to Next.js web apps easily.",
  themeColor: "#000000",
  icons: {
    shortcut: ["/logo.webp"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link
          rel="shortcut icon mask-icon"
          href="/logo.webp"
          color="#000000"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </head>
      <UserProvider>
        <body>{children}</body>
      </UserProvider>
    </html>
  );
}
