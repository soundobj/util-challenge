import { filterArrayByText } from './utils';

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
});