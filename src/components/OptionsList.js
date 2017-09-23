import React from 'react'
import EbtIconLg from '../assets/ebt-icon-lg.svg'
import SnapIconLg from '../assets/snap-icon-lg.svg'
import WicIconLg from '../assets/wic-icon-lg.svg'


const OptionsList = (props) => {
	let ebt, snap, wic
	ebt = props.ebt ? "icon-img-color" : "icon-img"
	snap = props.snap ? "icon-img-color" : "icon-img"
	wic = props.wic ? "icon-img-color" : "icon-img"
	return (
    <ul className="icon-list">
        <li className="icon ebt">
			<div className="checkbox">
				<input type="checkbox"  />
			</div>
        	<div className={ebt}>
        		<img src={EbtIconLg} alt="ebt icon" />
        	</div>
        	<div className="icon-text">
        		<h3>EBT</h3>
        	</div>
        </li>
        <li className="icon snap">
			<div className="checkbox">
				<input type="checkbox"  />
			</div>
        	<div className={snap}>
        		<img src={SnapIconLg} alt="snap icon" />
        	</div>
        	<div className="icon-text">
        		<h3>SNAP</h3>
        	</div>
        </li>
        <li className="icon wic">
			<div className="checkbox">
				<input type="checkbox"  />
			</div>
        	<div className={wic}>
        		<img src={WicIconLg} alt="wic icon" />
        	</div>
        	<div className="icon-text">
        		<h3>WIC</h3>
        	</div>
        </li>
    </ul>
	)
}

export default OptionsList
