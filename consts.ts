export type Fund = {
  name: string,
  id: string,
}

export const FUNDS = new Map<string, Fund>([
  ['0000PHD.NP', { name: 'Baird MidCap Fund', id: '0000PHD.NP' }],
  ['0004PWA.NP', { name: 'CTIVP - Victory Sycamore Established Value Fund', id: '0004PWA.NP' }],
  ['00034T3.NP', { name: 'Mid Cap Growth Portfolio', id: '00034T3.NP' }],
  ['0001TDF.NP', { name: 'iShares MSCI Australia ETF', id: '0001TDF.NP' }],
  ['0008LKU.NP', { name: 'Nuveen Winslow International Small Cap Fund', id: '0008LKU.NP' }],
  ['0004RCD.NP', { name: 'Paradigm Micro-Cap Fund', id: '0004RCD.NP' }],
  ['00007QC.NP', { name: 'First Trust Enhanced Equity Income Fund', id: '00007QC.NP' }],
  ['000A717.NP', { name: 'FIIG US SMALL CAP EQUITY', id: '000A717.NP' }],
  ['0008852.NP', { name: 'Goldman Sachs Hedge Industry VIP ETF', id: '0008852.NP' }],
  ['00002TB.NP', { name: 'BBR ALO Fund, LLC.', id: '00002TB.NP' }],
  ['00000KV.NP', { name: 'ABERDEEN GLOBAL DYNAMIC DIVIDEND FUND', id: '00000KV.NP' }],
  ['0007W0Q.NP', { name: 'Clarkston Fund', id: '0007W0Q.NP' }],
  ['00034HS.NP', { name: 'SA Putnam International Growth and Income Portfolio', id: '00034HS.NP' }],
  ['000AIH0.NP', { name: 'Direxion Work From Home ETF', id: '000AIH0.NP' }],
  ['00063WS.NP', { name: 'Fidelity Emerging Markets Index Fund', id: '00063WS.NP' }],
  ['0001K9W.NP', { name: 'THE HARTFORD CAPITAL APPRECIATION FUND', id: '0001K9W.NP' }],
  ['00028DY.NP', { name: 'WesMark Growth Fund', id: '00028DY.NP' }],
  ['0002A2I.NP', { name: 'VY(R) CLARION GLOBAL REAL ESTATE PORTFOLIO', id: '0002A2I.NP' }],
  ['0002A2I.NP', { name: 'JPMorgan International Equity Fund', id: '0002A2I.NP' }],
  ['0003Y5M.NP', { name: 'Edgewood Growth Fund', id: '0003Y5M.NP' }],
]);

export const FUNDS_AS_ARRAY = Array.from(FUNDS.values())

export type StringOrNumberTupple = (string | number)[][];

export type SustainabilityPerformancePayload = {
  data: {
    data: {
      datarows: {
        rows: StringOrNumberTupple,
      }
    }
  }
}

export type SDG_RECORD = Record<string, StringOrNumberTupple>

export type SustainabilityData = {
  util_id: (string | number)
  date: (string | number)
  impact_area: (string | number)
  unit: (string | number)
  methodology: (string | number)
  positive_aligment: (string | number)
  negative_aligment: (string | number)
}

export const SDG_NAMES = new Map<string, string>([
  ["SDG 01", "No Poverty"],
  ["SDG 02", "Zero Hunger"],
  ["SDG 03", "Good Health & Well-Being"],
  ["SDG 04", "Quality Education"],
  ["SDG 05", "Gender Equality"],
  ["SDG 06", "Clean Water & Sanitation"],
  ["SDG 07", "Affordable & Clean Energy"],
  ["SDG 08", "Decent Work & Economic Growth"],
  ["SDG 09", "Industry Innovation & Infrastructure"],
  ["SDG 10", "Reduce Inequalities"],
  ["SDG 11", "Sustainable Cities & Communities"],
  ["SDG 12", "Responsible Consumption and Production"],
  ["SDG 13", "Climate Action"],
  ["SDG 14", "Life Below Water"],
  ["SDG 15", "Life On Land"],
  ["SDG 16", "Peace Justice and Strong Institutions"],
  ["SDG 17", "Partnership for the Goals"],
])