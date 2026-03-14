// config/client-sites.ts
// Configuration for client WordPress/custom sites and their login URLs
// Update this file with actual client site URLs

export interface ClientSite {
  name: string;
  loginUrl: string;
  dashboardUrl?: string;
}

// Default/placeholder configuration
// Replace with actual client sites
export const clientSites: Record<string, ClientSite> = {
  default: {
    name: "Default Site",
    loginUrl: "https://your-wordpress-site.com/wp-login.php",
    dashboardUrl: "https://your-wordpress-site.com/wp-admin/"
  },
  // Example client configurations:
  // contractorExample: {
  //   name: "ABC Roofing",
  //   loginUrl: "https://abcroofing.com/wp-login.php",
  //   dashboardUrl: "https://abcroofing.com/wp-admin/"
  // },
  // automotiveExample: {
  //   name: "XYZ Auto",
  //   loginUrl: "https://xyzauto.com/login",
  //   dashboardUrl: "https://xyzauto.com/dashboard"
  // }
};

// Helper function to get login URL for a client
export function getClientLoginUrl(clientId: string = 'default'): string {
  return clientSites[clientId]?.loginUrl || clientSites.default.loginUrl;
}

// Helper function to get dashboard URL for a client
export function getClientDashboardUrl(clientId: string = 'default'): string {
  return clientSites[clientId]?.dashboardUrl || clientSites.default.dashboardUrl;
}