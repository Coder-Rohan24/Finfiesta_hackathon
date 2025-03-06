import { Auth0Feature } from "./auth0-feature";
// import { FaFingerprint, FaShieldAlt, FaMobileAlt, FaUserLock } from "react-icons/fa";
export const SignInAuth0Features = () => {
  const featuresList = [
    {
      title: "Seamless Authentication",
      description:
        "SecurePay establishes a strong, reliable link between users and their accounts using passkeys and biometrics for passwordless authentication.",
      resourceUrl: "https://auth0.com/docs/connections",
      icon: "https://cdn.auth0.com/blog/hello-auth0/identity-providers-logo.svg" ,
    },
    {
      title: "Multi-Factor Authentication",
      description:
        "SecurePay analyzes risk levels in real-time and applies MFA dynamically, strengthening security for high-risk actions.",
      resourceUrl: "https://auth0.com/docs/multifactor-authentication",
      icon: "https://cdn.auth0.com/blog/hello-auth0/mfa-logo.svg",
    },
    {
      title: "Phishing & Social Engineering Protection",
      description:
        "Built-in anti-phishing mechanisms and context-aware authentication prevent attacks like social engineering and credential replay.",
      resourceUrl: "https://auth0.com/docs/attack-protection",
      icon: "https://cdn.auth0.com/blog/hello-auth0/advanced-protection-logo.svg",
    },
    {
      title: "Cross-Device Authentication",
      description:
        "Passkeys and biometrics work seamlessly across devices, ensuring a smooth user experience without compromising security.",
      resourceUrl: "https://auth0.com/docs/actions",
      icon: "https://cdn.auth0.com/blog/hello-auth0/private-cloud-logo.svg",
    },
  ];

  return (
    <div className="auth0-features">
      <h2 className="auth0-features__title">Explore SecurePay features</h2>
      <div className="auth0-features__grid">
        {featuresList.map((feature) => (
          <Auth0Feature
            key={feature.resourceUrl}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
          />
        ))}
      </div>
    </div>
  );
};
