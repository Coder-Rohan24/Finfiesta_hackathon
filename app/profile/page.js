"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
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
