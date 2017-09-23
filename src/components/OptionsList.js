import React from 'react'
import EbtIconLg from '../assets/ebt-icon-lg.svg'
import SnapIconLg from '../assets/snap-icon-lg.svg'
import WicIconLg from '../assets/wic-icon-lg.svg'


const OptionsList = () =>
    <ul className="icon-list">
        <li className="icon ebt"><img src={EbtIconLg} alt="ebt icon" />EBT</li>
        <li className="icon snap"><img src={SnapIconLg} alt="snap icon" />SNAP</li>
        <li className="icon wic"><img src={WicIconLg} alt="wic icon" />WIC</li>
    </ul>

export default OptionsList
