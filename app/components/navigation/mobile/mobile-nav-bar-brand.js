import Link from "next/link";
import Image from "next/image";

export const MobileNavBarBrand = ({ handleClick }) => {
  return (
    <div onClick={handleClick} className="mobile-nav-bar__brand">
      <Link href="/">
        <Image
          className="mobile-nav-bar__logo"
          src="/logo.webp"
          alt="Auth0 shield logo"
          width={30}
          height={30}
        />
      </Link>
    </div>
  );
};
