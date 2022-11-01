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

export const FUNDS_AS_ARRAY = Array.from(FUNDS.values());