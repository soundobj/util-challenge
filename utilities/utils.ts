import groupBy from 'lodash/groupBy'
import uniqBy from 'lodash/uniqBy'

import { StringOrNumberTupple, SDG_RECORD } from '../consts'

export const filterArrayByText = <T extends { name: string }>(array: Array<T>, text: string): Array<T> => array.filter(
  item =>
    !text ||
    item.name
      .toLowerCase()
      .includes(text.toLowerCase())
);

export const groupBySDG = (rows: StringOrNumberTupple) => {
  /* 
    tupple structure 
    [util_id, date, impact_area, unit, methodology, positive_aligment, negative_aligment]
  */
  const sdgGrouped = groupBy(rows, item => item[2]) // impact_area
  const uniqueByDate = Object.keys(sdgGrouped)
    .reduce((acc: SDG_RECORD, cur): SDG_RECORD => {
      acc[cur] = uniqBy(sdgGrouped[cur], item => item[1]) // date
      return acc
    }, {})
  return uniqueByDate;
}