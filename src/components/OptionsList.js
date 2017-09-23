import React from 'react'
import EbtIconLg from '../assets/ebt-icon-lg.svg'
import SnapIconLg from '../assets/snap-icon-lg.svg'
import WicIconLg from '../assets/wic-icon-lg.svg'


const OptionsList = (props) => {
	return (
	<div className="options-container">
		<h3>Select an option below to filter results</h3>
	    <ul className="icon-list">
	        <li className="icon ebt">
				<div className="checkbox">
					<input type="checkbox"  />
				</div>
	        	<div className="icon-img">
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
	        	<div className="icon-img">
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
	        	<div className="icon-img">
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
