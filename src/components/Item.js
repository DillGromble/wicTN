import React from 'react'
import arrow from '../assets/arrow-icon.svg'
import EbtIconLg from '../assets/ebt-icon-lg.svg'
import SnapIconLg from '../assets/snap-icon-lg.svg'
import WicIconLg from '../assets/wic-icon-lg.svg'

const Item = (props) => 
	<div className="item-wrapper">
	    <div className="item-container">
	    	<div className="loc-graphic">
	    		<img className="item-img" src={arrow} alt="" />
	    	</div>
	    	<div className="text-body">
	    		<h1 className="loc-title">Location Title</h1>
	    		<p className="loc-details">Location details</p>
	    	</div>
	    </div>
	    <div className="add-item-container">
	    	<h4>Click an icon to add that location to the map!</h4>
			<div className="add-item-content">
				<div className="add-icon add-ebt">
					<img src={EbtIconLg} alt="add ebt location icon" />
				</div>
				<div className="add-icon add-snap">
					<img src={SnapIconLg} alt="add snap location icon" />
				</div>
				<div className="add-icon add-wic">
					<img src={WicIconLg} alt="add wic location icon" />
				</div>
			</div>
	    </div>
    </div>

export default Item