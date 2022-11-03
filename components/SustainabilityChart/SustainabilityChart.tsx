import React, { useEffect, useState } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

import { SDG_RECORD, SustainabilityData, SDG_NAMES } from '../../consts'
import { mapTupplesToKeys } from 'utilities/utils'

import styles from './SustainabilityChart.module.scss'

const getCustomProp = (varName: string): string => getComputedStyle(document.documentElement)
.getPropertyValue(varName)

const SustainabilityChart = (props: SustainabilityChartProps) => {
  const { sdgs } = props;
  const sortedKeys = Object.keys(sdgs).sort();
  const [SDG, setSDG] = useState<SustainabilityData[]>();
  const [checked, setChecked] = useState<string>();
  const [sdgName, setSdgName] = useState<string>();

  useEffect(() => {
    const initId = sortedKeys[0]
    const initSDG = sdgs[initId]
    setSDG(mapTupplesToKeys(initSDG))
    setChecked(initId)
    setSdgName(SDG_NAMES.get(initId))
  }, []);

  const onSDGChange = (event: any) => {
    const SDGID = event?.target?.value;
    setSDG(mapTupplesToKeys(sdgs[SDGID]));
    setChecked(SDGID);
    setSdgName(SDG_NAMES.get(SDGID))
  }

  return (
    <article className={styles.sustainabilityChart}>
      <fieldset className={styles.sdgs}>
        <legend>SDG: <span>{sdgName}</span></legend>
        {Object.keys(sdgs).sort().map((item, index) =>
            <input
              data-label={++index}
              onChange={onSDGChange}
              type="radio"
              id={item}
              value={item}
              checked={item === checked}
              key={item}
            />
        )}
      </fieldset>
        {SDG ?
          <ResponsiveContainer width="90%" height="80%">
          <LineChart
            className={styles.lineChart}
            width={500}
            height={300}
            data={SDG}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line 
              type="monotone"
              dataKey="positive_aligment"
              stroke={getCustomProp('--green')}
              activeDot={{ r: 8 }}
            />
            <Line
              type="monotone"
              dataKey="negative_aligment"
              stroke={getCustomProp('--pink')}
            />
          </LineChart>
          </ResponsiveContainer>
          : null}
    </article>
  )
}

export interface SustainabilityChartProps {
  sdgs: SDG_RECORD
}

export default SustainabilityChart
