# SecurePay

SecurePay is a modern authentication and payment management system built with **Next.js**,**WebAuthn** and **Stripe**. It features multi-factor authentication (MFA), WebAuthn support, context-aware authentication, login alerts, and device management.

## 🚀 Features

- **Secure Authentication**: Passwordless login with WebAuthn, MFA with Auth0.
- **Context-Aware Security**: Adaptive MFA based on risk level.
- **Device Management**: Users can review and log out of active sessions.
- **Payment Integration**: Secure payments via Stripe.
- **Behavioral Biometrics**: Monitors user activity for anomaly detection.

## 🛠️ Installation & Setup

### Prerequisites
- **Node.js** (v18 or later recommended)
- **NPM** or **Yarn**

### Clone the Repository
```sh
$ git clone https://github.com/Coder-Rohan24/Finfiesta_hackathon.git
$ cd finfiesta
```

### Install Dependencies
```sh
$ npm install  # or yarn install
```

### Environment Variables
Create a `.env.local` file in the root directory and add the following:

```ini
# Auth0 Configuration
AUTH0_SECRET=<Your AUTH0_SECRET KEY>
AUTH0_BASE_URL=<YourAUTH0_BASE_URL>
AUTH0_ISSUER_BASE_URL=<Your AUTH0_ISSUER_BASE_URL>
AUTH0_CLIENT_ID=<Your AUTH0_CLIENT_ID>
AUTH0_CLIENT_SECRET=<Your AUTH0_CLIENT_SECRET KEY>

# Stripe Configuration
NEXT_PUBLIC_STRIPE_PUBLISHER_KEY=<Your NEXT_PUBLIC_STRIPE_PUBLISHER_KEY>
STRIPE_SECRET_KEY=<Your STRIPE_SECRET_KEY>
```

### Start the Development Server
```sh
$ npm run dev  # Runs on http://localhost:4040
```

## 📁 Project Structure
```
finfiesta/
│── pages/
│   ├── api/
│   │   ├── auth/[...auth0].js    # Auth0 Authentication
│   │   ├── stripe/checkout.js    # Stripe Checkout
│   │   ├── user/devices.js       # Device Management API
│   ├── index.js                  # Landing Page
│   ├── dashboard.js              # User Dashboard
│   ├── settings.js               # Account Settings
│   ├── transactions.js           # Transactions Page
│── components/
│   ├── Navbar.js
│   ├── Footer.js
│── styles/
│── public/
│── package.json
│── README.md
```

## 🔗 API Endpoints

### Authentication
- `POST /api/auth/[auth0]` → Login & Logout a user
- `GET /profile` → Fetch logged-in user details

### Payments
- `POST /api/create-intent` → Initiate a Stripe payment

## 🏗️ Build & Deploy
To build the project for production, run:
```sh
$ npm run build
```

To start the production server:
```sh
$ npm run dev
```

## 🛡️ Security Considerations
- Ensure `.env.local` is **never** committed to Git.
- Always use **HTTPS** in production.
- Rotate sensitive credentials regularly.

## 📜 License
This project is licensed under the MIT License.
