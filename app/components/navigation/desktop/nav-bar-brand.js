import Link from "next/link";
import Image from "next/image";

export const NavBarBrand = () => {
  return (
    <div className="nav-bar__brand">
      <h2 style={{color:"white", marginTop: "1.2rem", marginBottom: "1.2rem"}}>SecurePay</h2>
      <Link href="/">
        <Image
          className="nav-bar__logo"
          src="/logo.webp"
          alt="Auth0 shield logo"
          width={50}
          height={50}
          style={{height:"7.2rem", width:"7.2rem"}}
        />
      </Link>
    </div>
  );
};
