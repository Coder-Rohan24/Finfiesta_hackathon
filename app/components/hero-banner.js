import Image from "next/image";

export const HeroBanner = () => {
  const logo = "/logo.webp";

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
      <h1 className="hero-banner__headline">Next-Generation Authentication System</h1>
      <p className="hero-banner__description">
      Ensuring <strong>security</strong> against common threats while providing a <strong>seamless experience</strong> for users across <strong>different</strong> devices and environments.
      </p>
      <p
        id="code-sample-link"
        className="button button--secondary"
      >
        Check out the features below
      </p>
    </div>
  );
};
