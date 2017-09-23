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
		<div className="options-container">
		<h3 className="options-instruction">
			Select an icon below to filter results
		</h3>
    <ul className="icon-list">
        <li className="icon ebt" name="ebt" onClick={props.handleEbt}>
			<div className={ebt}>
        		<img src={EbtIconLg} alt="ebt icon" />
        	</div>
        	<div className="icon-text">
        		<h3>EBT</h3>
        	</div>
        </li>
        <li className="icon snap" name="snap" onClick={props.handleSnap}>
			<div className={snap}>
        		<img src={SnapIconLg} alt="snap icon" />
        	</div>
        	<div className="icon-text">
        		<h3>SNAP</h3>
        	</div>
        </li>
        <li className="icon wic" name="wic" onClick={props.handleWic}>
			<div className={wic}>
        		<img src={WicIconLg} alt="wic icon" />
        	</div>
        	<div className="icon-text">
        		<h3>WIC</h3>
        	</div>
        </li>
    </ul>
    </div>
	)
}

export default OptionsList
