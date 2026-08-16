# Nexroor — working storefront build

This is a functional storefront foundation, not a screenshot/mockup. It includes:
- Real product photography loaded from Unsplash
- Responsive product catalogue
- Category filtering and price sorting
- Add-to-cart, quantity controls and remove
- Buy-now flow
- Checkout form with address fields
- Local order history
- Persistent cart/orders via browser localStorage

## Important for production
This package is intentionally not connected to a live payment gateway, database, or supplier account because those require your business credentials/accounts.

Before accepting real money:
1. Put the site on HTTPS hosting.
2. Add a real backend/database.
3. Connect Razorpay/Stripe or another gateway using your own merchant account.
4. Add server-side order validation.
5. Connect an approved supplier/fulfillment provider.
6. Add shipping, returns, privacy, terms and required ecommerce/tax compliance.
7. Replace example support contact and product data.

The frontend already has the core shopping interactions wired together.