import React, { useEffect, useState } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

import styles from './SustainabilityChart.module.scss'
import { SDG_RECORD, SustainabilityData } from '../../consts'
import { mapTupplesToKeys } from 'utilities/utils'

const SustainabilityChart = (props: SustainabilityChartProps) => {
  const { sdgs } = props;
  const sortedKeys = Object.keys(sdgs).sort();
  const [SDG, setSDG] = useState<SustainabilityData[]>();

  useEffect(() => {
    const initSDG = sdgs[sortedKeys[0]]
    setSDG(mapTupplesToKeys(initSDG))
  }, []);

  const onSDGClick = (event: any) => {
    const SDGID = event?.target?.getAttribute("data-id");
    console.log('clicked SDG', SDGID)
    setSDG(mapTupplesToKeys(sdgs[SDGID]));
  }

  console.log('sdg', SDG);


  return (
    <article className={styles.sustainabilityChart}>
      <nav>
        <dl>
          <dt>SDGs:</dt>
          <dd><ul onClick={onSDGClick} className={styles.sdgs}>
            {Object.keys(sdgs).sort().map((item, index) =>
              <li className={styles.sdg} key={item}>
                <button data-id={item}>{++index}</button>
              </li>
            )}
          </ul>
        </dd>
        </dl>

      </nav>
      <main>
        {SDG ?
          // <ResponsiveContainer width="100%" height="100%">
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
            <Line type="monotone" dataKey="positive_aligment" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="negative_aligment" stroke="#82ca9d" />
          </LineChart>
          // </ResponsiveContainer>
          : null}
      </main>
    </article>
  )
}

export interface SustainabilityChartProps {
  sdgs: SDG_RECORD
}

export default SustainabilityChart
