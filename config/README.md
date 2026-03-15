# Client Sites Configuration

This file configures the login URLs for different client sites. Update this configuration when you add new clients or need to change login URLs.

## How to Configure

1. **For WordPress sites**: Use the standard WordPress login URL format: `https://yoursite.com/wp-login.php`

2. **For custom sites**: Use whatever login URL your custom CMS or authentication system uses

3. **Dashboard URLs**: Optionally specify a dashboard URL that users should be redirected to after login

## Example Configuration

```typescript
export const clientSites: Record<string, ClientSite> = {
  default: {
    name: "Default Site",
    loginUrl: "https://your-wordpress-site.com/wp-login.php",
    dashboardUrl: "https://your-wordpress-site.com/wp-admin/"
  },
  abcRoofing: {
    name: "ABC Roofing",
    loginUrl: "https://abcroofing.com/wp-login.php",
    dashboardUrl: "https://abcroofing.com/wp-admin/"
  },
  xyzAuto: {
    name: "XYZ Auto Shop",
    loginUrl: "https://xyzauto.com/login",
    dashboardUrl: "https://xyzauto.com/dashboard"
  }
};
```

## Usage in Components

The subscription buttons throughout the site use `getClientLoginUrl()` which currently returns the default site URL. You can modify this function to:

- Accept a client ID parameter
- Use URL parameters or user context to determine which client site to redirect to
- Implement user-specific redirects based on their subscription

## Dynamic Client Selection

To make the login URLs truly dynamic based on the user's subscription, you could:

1. Store client information in a database
2. Use authentication to determine which client a user belongs to
3. Pass client IDs through URL parameters
4. Use a client selection dropdown before subscription

For now, all subscription buttons redirect to the default configured site.