import groupBy from 'lodash/groupBy'
import uniqBy from 'lodash/uniqBy'

export const filterArrayByText = <T extends { name: string }>(array: Array<T>, text: string): Array<T> => array.filter(
  item =>
    !text ||
    item.name
      .toLowerCase()
      .includes(text.toLowerCase())
);

export type StringOrNumberTupple = (string | number)[][];

export const groupBySDG = (rows: StringOrNumberTupple) => {
  const sdgGrouped = groupBy(rows, item => item[2])
  const uniqueByDate = Object.keys(sdgGrouped)
    .reduce((acc: Record<string, StringOrNumberTupple>, cur): Record<string, StringOrNumberTupple> => {
      acc[cur] = uniqBy(sdgGrouped[cur], item => item[1])
      return acc
    }, {})
  return uniqueByDate;
}