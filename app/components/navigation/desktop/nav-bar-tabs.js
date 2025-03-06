"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import { NavBarTab } from "./nav-bar-tab";

export const NavBarTabs = () => {
  const { user } = useUser();

  return (
    <div className="nav-bar__tabs">
    
      {user && (
        <>
          <NavBarTab path="/profile" label="Dashboard" />
          <NavBarTab path="/public" label="Transactions" />
          <NavBarTab path="/protected" label="Settings" />
          <NavBarTab path="/admin" label="Make a Payment" />
        </>
      )}
    </div>
  );
};
