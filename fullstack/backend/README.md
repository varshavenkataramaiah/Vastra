# Vastra Backend

Express and MongoDB API for the Vastra storefront.

## Requirements

- Node.js
- MongoDB running locally on `127.0.0.1:27017`

## Setup

Install dependencies:

```bash
npm install
```

Create `.env` in this directory:

```env
PORT=5001
MONGODB_URI=mongodb://127.0.0.1:27017/vastra
CORS_ORIGINS=http://localhost:3000,http://localhost:3005
JWT_SECRET=replace-with-a-long-random-secret
RAZORPAY_KEY_ID=your-razorpay-key-id
RAZORPAY_KEY_SECRET=your-razorpay-key-secret
ADMIN_USER_IDS=replace-with-a-mongodb-user-id
```

Start the API:

```bash
npm start
```

The default health check is available at `http://localhost:5001/api/health`.

The backend automatically seeds products when it starts against an empty database.
Set `CORS_ORIGINS` to a comma-separated list of frontend origins; configure the deployed site origin in production. Requests without an `Origin` header remain available for non-browser clients, so CORS is not an authentication mechanism.

## Scripts

- `npm start` starts the production-style Node server.
- `npm run dev` starts the server with Nodemon.
- `npm test` runs backend tests.

## API Overview

Public endpoints:

- `GET /api/health`
- `GET /api/products`
- `GET /api/products/:id`
- `POST /api/users/register`
- `POST /api/users/login`

Authenticated endpoints require `Authorization: Bearer <token>`:

- `GET /api/users/me`
- `PUT /api/users/me`
- `GET /api/users/me/preferences`
- `PUT /api/users/me/preferences`
- `GET /api/orders`
- `GET /api/orders/:id`
- `POST /api/orders/checkout`

Admin product management requires a logged-in user whose MongoDB ID is listed in the comma-separated `ADMIN_USER_IDS` environment variable. Create the account first, then configure its `_id` from MongoDB; email addresses cannot grant admin access.

- `POST /api/products`
- `PUT /api/products/:id`
- `DELETE /api/products/:id`
- `GET /api/orders/admin/all`
- `PATCH /api/orders/admin/:id/status`

For card or UPI checkout, configure both Razorpay variables. The frontend requests a server-created Razorpay order, and the backend verifies its signature and amount before saving the paid order. Cash on delivery does not require Razorpay configuration.

Checkout prices and totals are calculated from MongoDB. Product stock is reserved when an order is created and restored if order creation fails.
