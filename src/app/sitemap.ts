import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://roundbrief.com'
  return [
    { url: base, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/pricing`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/app`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/guides`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    // Core cap table guides
    { url: `${base}/guides/cap-table-explained`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/guides/how-to-build-a-cap-table`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/guides/cap-table-template`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/guides/cap-table-software`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    // Dilution and equity guides
    { url: `${base}/guides/startup-dilution-guide`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/guides/equity-dilution-calculator`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    // Funding instruments
    { url: `${base}/guides/safe-note-vs-convertible-note`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    // Valuation and funding
    { url: `${base}/guides/pre-money-vs-post-money-valuation`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/guides/startup-funding-rounds-explained`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    // UK-specific
    { url: `${base}/guides/seis-eis-eligibility-guide`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/guides/option-pool-and-vesting-guide`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    // Templates
    { url: `${base}/guides/investor-update-template`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    // SEIS/EIS and tax
    { url: `${base}/guides/seis-vs-eis-comparison`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    // Founder equity
    { url: `${base}/guides/startup-equity-split-calculator`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    // Funding instruments
    { url: `${base}/guides/convertible-note-template-uk`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    // Legal
    { url: `${base}/guides/shareholder-agreement-template`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    // Cap tables
    { url: `${base}/guides/cap-table-for-seed-round`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    // Investor relations
    { url: `${base}/guides/investor-rights-explained`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    // Legal / exit rights
    { url: `${base}/guides/drag-along-tag-along-rights`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    // Employee equity
    { url: `${base}/guides/employee-share-scheme-uk`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  ]
}
