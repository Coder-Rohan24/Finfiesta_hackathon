import { FaUserShield, FaLock, FaMobileAlt } from "react-icons/fa";
import '../styles/components/page-footer.css'; // Import the CSS file

export const PageFooter = () => {
  return (
    <>
    <footer className="page-footer">
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' ,flexDirection: 'column'}}> 
      <div><h3 style={{fontSize:'25px'}}>How It Works</h3></div>
      <div className="grid">
        {/* User Verification */}
        <div className="text-center">
          <FaUserShield className="icon" />
          <h3>User Verification</h3>
          <p>Verify user identity with multi-factor authentication.</p>
        </div>

        {/* Secure Login */}
        <div className="text-center">
          <FaLock className="icon" />
          <h3>Secure Login</h3>
          <p>Secure login process to protect against unauthorized access.</p>
        </div>

        {/* Device Compatibility */}
        <div className="text-center">
          <FaMobileAlt className="icon" />
          <h3>Device Compatibility</h3>
          <p>Compatible with all devices for a seamless experience.</p>
        </div>
      </div>
      </div>
    </footer>
    <footer class="footer">
    <div class="container">
     <p>
      © 2023 SecurePay. All rights reserved.
     </p>
    </div>
   </footer>
   </>
  );
};