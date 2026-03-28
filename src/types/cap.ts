export type ShareClass = 'ordinary' | 'preferred-a' | 'preferred-b' | 'preferred-c' | 'options' | 'warrants' | 'convertible' | 'unknown'

export interface Shareholder {
  id: string
  name: string
  shareClass: ShareClass
  sharesHeld: number
  investmentAmount: number | null
  investmentDate: string | null
  ownershipPct: number // calculated
  fullyDilutedPct: number // calculated
  isFounder: boolean
  isInvestor: boolean
  isEmployee: boolean // ESOP/options
  inferredSource: 'explicit' | 'ai-inferred' | 'calculated'
  confidence: 'high' | 'medium' | 'low'
  notes: string
}

export interface FundingRound {
  id: string
  name: string // e.g. "Seed", "Series A"
  date: string
  amountRaised: number
  preMoneyValuation: number | null
  postMoneyValuation: number | null
  investors: string[] // shareholder IDs
}

export interface CapTableDTO {
  companyName: string
  totalSharesIssued: number
  totalSharesFullyDiluted: number
  shareholders: Record<string, Shareholder>
  fundingRounds: FundingRound[]
  completenessScore: number
  inferenceStats: {
    totalShareholders: number
    inferred: number
    explicit: number
  }
}

export interface CapSession {
  id: string
  status: 'uploading' | 'mapping' | 'processing' | 'ready' | 'exporting'
  createdAt: string
  updatedAt: string
  fileName: string
  capTable: CapTableDTO | null
  columnMapping: Record<string, string> | null
}
