import { Auth0Features } from "./components/auth0-features";
import { HeroBanner } from "./components/hero-banner";
import { SignupPageLayout } from "./components/signup-page-layout";
const Home = () => (
  <SignupPageLayout>
    <>
      <HeroBanner />
      <Auth0Features />
    </>
  </SignupPageLayout>
);

export default Home;
