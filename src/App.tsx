import { useState } from 'react'
import { Select } from '@chakra-ui/react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [balancingAuthority, setBalancingAuthority] = useState(1)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <div className="card">
        <Select placeholder='Select Balancing Authority'>
          <option value='AECI'>Associated Electric Cooperative, Inc.</option>
          <option value='AVA'>Avista Corporation</option>
          <option value='AVRN'>Avangrid Renewables, LLC</option>
          <option value='AZPS'>Arizona Public Service Company</option>
          <option value='BANC'>Balancing Authority of Northern California</option>
          <option value='BPAT'>Bonneville Power Adminstration</option>
          <option value='CHPD'>Public Utility District No. 1 of Chelan County</option>
          <option value='CISO'>California Independent System Operator</option>
          <option value='CPLE'>Duke Energy Progress East</option>
          <option value='CPLW'>Duke Energy Progress West</option>
          <option value='DEAA'>Arlington Valley, LLC</option>
          <option value='DOPD'>PUD No. 1 of Douglas County</option>
          <option value='DUK'>Duke Energy Carolinas</option>
          <option value='EPE'>El Paso Electric Company</option>
          <option value='ERCO'>Electric Reliability Council of Texas, Inc.</option>
          <option value='FMPP'>Florida Municipal Power Pool</option>
          <option value='FPC'>Duke Energy Florida, Inc.</option>
          <option value='FPL'>Florida Power & Light Co.</option>
          <option value='GCPD'>Public Utility District No. 2 of Grant County, Washington</option>
          <option value='GRID'>Gridforce Energy Management, LLC</option>
          <option value='GVL'>Gainesville Regional Utilities</option>
          <option value='GWA'>NaturEner Power Watch, LLC</option>
          <option value='HGMA'>New Harquahala Generating Company, LLC</option>
          <option value='HST'>City of Homestead</option>
          <option value='IID'>Imperial Irrigation District</option>
          <option value='IPCO'>Idaho Power Company</option>
          <option value='ISNE'>ISO New England</option>
          <option value='JEA'>JEA</option>
          <option value='LDWP'>Los Angeles Department of Water and Power</option>
          <option value='LGEE'>Louisville Gas and Electric Company and Kentucky Utilities Company</option>
          <option value='MISO'>Midcontinent Independent System Operator, Inc.</option>
          <option value='NE'>New England</option>
          <option value='NEVP'>Nevada Power Company</option>
          <option value='NWMT'>NorthWestern Corporation</option>
          <option value='NY'>New York</option>
          <option value='NYIS'>New York Independent System Operator</option>
          <option value='PACE'>PacifiCorp East</option>
          <option value='PACW'>PacifiCorp West</option>
          <option value='PGE'>Portland General Electric Company</option>
          <option value='PJM'>PJM Interconnection, LLC</option>
          <option value='PNM'>Public Service Company of New Mexico</option>
          <option value='PSCO'>Public Service Company of Colorado</option>
          <option value='PSEI'>Puget Sound Energy, Inc.</option>
          <option value='SC'>South Carolina Public Service Authority</option>
          <option value='SCEG'>Dominion Energy South Carolina, Inc.</option>
          <option value='SCL'>Seattle City Light</option>
          <option value='SEC'>Seminole Electric Cooperative</option>
          <option value='SEPA'>Southeastern Power Administration</option>
          <option value='SOCO'>Southern Company Services, Inc. - Trans</option>
          <option value='SPA'>Southwestern Power Administration</option>
          <option value='SRP'>Salt River Project Agricultural Improvement and Power District</option>
          <option value='SWPP'>Southwest Power Pool</option>
          <option value='TAL'>City of Tallahassee</option>
          <option value='TEC'>Tampa Electric Company</option>
          <option value='TEN'>Tennessee</option>
          <option value='TEPC'>Tucson Electric Power</option>
          <option value='TEX'>Texas</option>
          <option value='TIDC'>Turlock Irrigation District</option>
          <option value='TPWR'>City of Tacoma, Department of Public Utilities, Light Division</option>
          <option value='TVA'>Tennessee Valley Authority</option>
          <option value='WACM'>Western Area Power Administration - Rocky Mountain Region</option>
          <option value='WALC'>Western Area Power Administration - Desert Southwest Region</option>
          <option value='WAUW'>Western Area Power Administration - Upper Great Plains West</option>
          <option value='WWA'>NaturEner Wind Watch, LLC</option>
          <option value='YAD'>Alcoa Power Generating, Inc. - Yadkin Division</option>
        </Select>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
