"use client";


import { PageLayout } from "../components/page-layout";


const Protected = () => {


  return (
    <PageLayout>
      <main className="settings-container">
      {/* Account Settings Header */}
      <section className="settings-header">
        <h2>Account Settings</h2>
        <p>Manage your account settings and preferences.</p>
      </section>

      {/* Personal Information Section */}
      <section className="settings-section">
        <h3>Personal Information</h3>
        <form className="settings-form">
          <div className="settings-input-group">
            <label htmlFor="name">Name</label>
            <input id="name" type="text" placeholder="Enter your name" />
          </div>
          <div className="settings-input-group">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" placeholder="Enter your email" />
          </div>
          <div className="settings-input-group">
            <label htmlFor="phone">Phone Number</label>
            <input id="phone" type="tel" placeholder="Enter your phone number" />
          </div>
          <button type="submit" className="settings-button">
            Save Changes
          </button>
        </form>
      </section>

      {/* Security Settings Section */}
      <section className="settings-section">
        <h3>Security Settings</h3>
        <form className="settings-form">
          <div className="settings-input-group">
            <label htmlFor="current-password">Current Password</label>
            <input id="current-password" type="password" placeholder="Enter current password" />
          </div>
          <div className="settings-input-group">
            <label htmlFor="new-password">New Password</label>
            <input id="new-password" type="password" placeholder="Enter new password" />
          </div>
          <div className="settings-input-group">
            <label htmlFor="confirm-password">Confirm New Password</label>
            <input id="confirm-password" type="password" placeholder="Confirm new password" />
          </div>
          <button type="submit" className="settings-button">
            Update Password
          </button>
        </form>
      </section>

      {/* Notification Preferences Section */}
      <section className="settings-section">
        <h3>Logged In Devices</h3>
        <form className="settings-form">
          <div className="settings-checkbox-group">
            <input id="email-notifications" type="checkbox" />
            <label htmlFor="email-notifications">IPhone 15 PRO</label>
          </div>
          <div className="settings-checkbox-group">
            <input id="sms-notifications" type="checkbox" />
            <label htmlFor="sms-notifications">Samsung Galaxy S25</label>
          </div>
          <div className="settings-checkbox-group">
            <input id="push-notifications" type="checkbox" />
            <label htmlFor="push-notifications">MacBook PRO</label>
          </div>
          <button type="submit" className="settings-button">
            Logout
          </button>
        </form>
      </section>
    </main>
    </PageLayout>
  );
};

export default Protected;
