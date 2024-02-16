import { ChangeEvent } from "react"
import { Select } from '@chakra-ui/react'

const baOptions= [
    {value: 'AECI', label: 'Associated Electric Cooperative, Inc.'},
    {value: 'AVA', label: 'Avista Corporation'},
    {value: 'AVRN', label: 'Avangrid Renewables, LLC'},
    {value: 'AZPS', label: 'Arizona Public Service Company'},
    {value: 'BANC', label: 'Balancing Authority of Northern California'},
    {value: 'BPAT', label: 'Bonneville Power Adminstration'},
    {value: 'CHPD', label: 'Public Utility District No. 1 of Chelan County'},
    {value: 'CISO', label: 'California Independent System Operator'},
    {value: 'CPLE', label: 'Duke Energy Progress East'},
    {value: 'CPLW', label: 'Duke Energy Progress West'},
    {value: 'DEAA', label: 'Arlington Valley, LLC'},
    {value: 'DOPD', label: 'PUD No. 1 of Douglas County'},
    {value: 'DUK', label: 'Duke Energy Carolinas'},
    {value: 'EPE', label: 'El Paso Electric Company'},
    {value: 'ERCO', label: 'Electric Reliability Council of Texas, Inc.'},
    {value: 'FMPP', label: 'Florida Municipal Power Pool'},
    {value: 'FPC', label: 'Duke Energy Florida, Inc.'},
    {value: 'FPL', label: 'Florida Power & Light Co.'},
    {value: 'GCPD', label: 'Public Utility District No. 2 of Grant County, Washington'},
    {value: 'GRID', label: 'Gridforce Energy Management, LLC'},
    {value: 'GVL', label: 'Gainesville Regional Utilities'},
    {value: 'GWA', label: 'NaturEner Power Watch, LLC'},
    {value: 'HGMA', label: 'New Harquahala Generating Company, LLC'},
    {value: 'HST', label: 'City of Homestead'},
    {value: 'IID', label: 'Imperial Irrigation District'},
    {value: 'IPCO', label: 'Idaho Power Company'},
    {value: 'ISNE', label: 'ISO New England'},
    {value: 'JEA', label: 'JEA'},
    {value: 'LDWP', label: 'Los Angeles Department of Water and Power'},
    {value: 'LGEE', label: 'Louisville Gas and Electric Company and Kentucky Utilities Company'},
    {value: 'MISO', label: 'Midcontinent Independent System Operator, Inc.'},
    {value: 'NE', label: 'New England'},
    {value: 'NEVP', label: 'Nevada Power Company'},
    {value: 'NWMT', label: 'NorthWestern Corporation'},
    {value: 'NY', label: 'New York'},
    {value: 'NYIS', label: 'New York Independent System Operator'},
    {value: 'PACE', label: 'PacifiCorp East'},
    {value: 'PACW', label: 'PacifiCorp West'},
    {value: 'PGE', label: 'Portland General Electric Company'},
    {value: 'PJM', label: 'PJM Interconnection, LLC'},
    {value: 'PNM', label: 'Public Service Company of New Mexico'},
    {value: 'PSCO', label: 'Public Service Company of Colorado'},
    {value: 'PSEI', label: 'Puget Sound Energy, Inc.'},
    {value: 'SC', label: 'South Carolina Public Service Authority'},
    {value: 'SCEG', label: 'Dominion Energy South Carolina, Inc.'},
    {value: 'SCL', label: 'Seattle City Light'},
    {value: 'SEC', label: 'Seminole Electric Cooperative'},
    {value: 'SEPA', label: 'Southeastern Power Administration'},
    {value: 'SOCO', label: 'Southern Company Services, Inc. - Trans'},
    {value: 'SPA', label: 'Southwestern Power Administration'},
    {value: 'SRP', label: 'Salt River Project Agricultural Improvement and Power District'},
    {value: 'SWPP', label: 'Southwest Power Pool'},
    {value: 'TAL', label: 'City of Tallahassee'},
    {value: 'TEC', label: 'Tampa Electric Company'},
    {value: 'TEN', label: 'Tennessee'},
    {value: 'TEPC', label: 'Tucson Electric Power'},
    {value: 'TEX', label: 'Texas'},
    {value: 'TIDC', label: 'Turlock Irrigation District'},
    {value: 'TPWR', label: 'City of Tacoma, Department of Public Utilities, Light Division'},
    {value: 'TVA', label: 'Tennessee Valley Authority'},
    {value: 'WACM', label: 'Western Area Power Administration - Rocky Mountain Region'},
    {value: 'WALC', label: 'Western Area Power Administration - Desert Southwest Region'},
    {value: 'WAUW', label: 'Western Area Power Administration - Upper Great Plains West'},
    {value: 'WWA', label: 'NaturEner Wind Watch, LLC'},
    {value: 'YAD', label: 'Alcoa Power Generating, Inc. - Yadkin Division'}
]

export const BalancingAuthorityDropdown = ({ onChange }: { onChange: (val: ChangeEvent<HTMLSelectElement>) => void }) => {
     return (
        <Select onChange={onChange}>
            {baOptions.map((ba, i)=> <option key={i} value={ba.value}>{ba.label}</option>)}
        </Select>
     )
}

