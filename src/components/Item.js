import React from 'react'
import arrow from '../assets/arrow-icon.svg'

const Item = (props) => 
    <div className="item-container">
    	<div className="loc-graphic">
    		<img className="item-img" src={arrow} alt="" />
    	</div>
    	<div className="text-body">
    		<h1 className="loc-title">Location Title</h1>
    		<p className="loc-details">Location details</p>
    	</div>
    </div>

export default Item