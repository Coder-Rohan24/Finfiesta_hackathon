import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";

export const SignInHeroBanner = () => {
  const logo = "/logo.webp";

  const {user}=useUser();

  return (
    <div className="hero-banner hero-banner--pink-yellow">
      <div className="hero-banner__logo">
        <Image
          className="hero-banner__image"
          src={logo}
          alt="Next.js logo"
          height={108}
          width={108}
        />
      </div>
      <h1 className="hero-banner__headline">Hello {user.nickname}!</h1>
      <p className="hero-banner__description">
      Ensuring <strong>security</strong> against common threats while providing a <strong>seamless experience</strong> for users across <strong>different</strong> devices and environments.
      </p>
      <p
        id="code-sample-link"
        className="button button--secondary"
      >
        Check out your profile below
      </p>
    </div>
  );
};
