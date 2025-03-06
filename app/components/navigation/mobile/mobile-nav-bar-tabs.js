"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import { MobileNavBarTab } from "./mobile-nav-bar-tab";

export const MobileNavBarTabs = ({ handleClick }) => {
  const { user } = useUser();

  return (
    <div className="mobile-nav-bar__tabs">
      <MobileNavBarTab
        path="/profile"
        label="Dashboard"
        handleClick={handleClick}
      />
      <MobileNavBarTab
        path="/public"
        label="Transactions"
        handleClick={handleClick}
      />
      {user && (
        <>
          <MobileNavBarTab
            path="/protected"
            label="Settings"
            handleClick={handleClick}
          />
          <MobileNavBarTab
            path="/admin"
            label="Make a Payment"
            handleClick={handleClick}
          />
        </>
      )}
    </div>
  );
};
