export const projectConfig = {
  project: {
    projectName: "Client Portal Starter",
    projectType: "branded",
    environment: "production",
  },
  client: {
    displayName: "Acme Advisory Group",
    internalName: "acme-advisory-group",
    website: "www.acmeadvisory.com",
  },
  branding: {
    mode: "branded",
    primaryColor: "#1d4ed8",
    secondaryColor: "#0f172a",
    accentColor: "#22c55e",
    logoText: "Acme Advisory",
    whiteLabel: {
      enabled: false,
      agencyName: "LAIRE",
    },
  },
  content: {
    heroTitle: "Starter App Project",
    heroSubtitle:
      "This is an example of how your default template could render as a deployed client-facing app.",
    ctaPrimary: "Get Started",
    ctaSecondary: "View Settings",
  },
  integrations: {
    hubspot: true,
    forms: true,
    analytics: true,
  },
};
