import React from 'react'
import EbtIconLg from '../assets/ebt-icon-lg.svg'
import SnapIconLg from '../assets/snap-icon-lg.svg'
import WicIconLg from '../assets/wic-icon-lg.svg'


const OptionsList = () =>
    <ul className="icon-list">
        <li className="icon ebt">
        	<div className="icon-img">
        		<img src={EbtIconLg} alt="ebt icon" />
        	</div>
        	<div className="icon-text">
        		<h3>EBT</h3>
        	</div>
        </li>
        <li className="icon snap">
        	<div className="icon-img">
        		<img src={SnapIconLg} alt="snap icon" />
        	</div>
        	<div className="icon-text">
        		<h3>SNAP</h3>
        	</div>
        </li>
        <li className="icon wic">
        	<div className="icon-img">
        		<img src={WicIconLg} alt="wic icon" />
        	</div>
        	<div className="icon-text">
        		<h3>WIC</h3>
        	</div>
        </li>
    </ul>

export default OptionsList
