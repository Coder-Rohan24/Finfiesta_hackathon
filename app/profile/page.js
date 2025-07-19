"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import { useEffect } from "react";
// import { CodeSnippet } from "../components/code-snippet";
// import { PageLayout } from "../components/page-layout";
// import Image from "next/image";
import { SignInAuth0Features } from "../components/signinauth0-features";
import { SignInHeroBanner } from "../components/signinhero-banner";
import { SignupPageLayout } from "../components/signup-page-layout";
const Profile = () => {
  // const defaultPicture =
  //   "https://cdn.auth0.com/blog/hello-auth0/auth0-user.png";
  const { user } = useUser();
  useEffect(() => {
    if (user) {
      fetch("/api/send-login-alert", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: user.email,
          name: user.name || "User",
        }),
      }).then((res) => {
        if (res.ok) {
          console.log("Login alert email sent!");
        } else {
          console.error("Failed to send login alert.");
        }
      });
    }
  }, [user]);
  if (!user) {
    return null;
  }

  return (
      <SignupPageLayout>
        <>
          <SignInHeroBanner />
          <SignInAuth0Features />
        </>
      </SignupPageLayout>
  );
};

export default Profile;
