import { filterArrayByText, groupBySDG } from './utils'
import sdgStub from './sustainabilityPerformance.json'

describe('utils', () => {
  describe('filterArrayByText', () => {
    it('returns items whose name property matches search text', () => {
      const stub = [
        { name: 'bla foo' },
        { name: 'bar' },
        { name: 'baz' },
      ]
      const res = filterArrayByText(stub, 'foo');
      expect(res).toMatchObject([stub[0]]);
    });
  });
  describe('groupBySDG', () => {
    it('groups by SDG removing date duplicates', () => {
      const stub = sdgStub.data.datarows.rows
      const actual = groupBySDG(stub);
      const expected = [
        [
          '00034T3.NP',
          '2019-09-30',
          'SDG 01',
          'PCT',
          'geo',
          0.0105,
          0.0089
        ],
        ['00034T3.NP', '2019-12-31', 'SDG 01', 'PCT', 'geo', 0.0103, 0.008],
        [
          '00034T3.NP',
          '2020-03-31',
          'SDG 01',
          'PCT',
          'geo',
          0.0099,
          0.0063
        ],
        [
          '00034T3.NP',
          '2020-06-30',
          'SDG 01',
          'PCT',
          'geo',
          0.0111,
          0.0065
        ],
        [
          '00034T3.NP',
          '2020-09-30',
          'SDG 01',
          'PCT',
          'geo',
          0.0112,
          0.0076
        ],
        [
          '00034T3.NP',
          '2020-12-31',
          'SDG 01',
          'PCT',
          'geo',
          0.0125,
          0.0074
        ],
        [
          '00034T3.NP',
          '2021-03-31',
          'SDG 01',
          'PCT',
          'geo',
          0.0151,
          0.0114
        ]
      ]

      expect(expected).toMatchObject(actual['SDG 01']);
    });
  });
});