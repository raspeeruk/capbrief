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
  ]
}
