import React from 'react'
import EbtIcon from '../assets/ebt-icon.svg'
import SnapIcon from '../assets/snap-icon.svg'
import WicIcon from '../assets/wic-icon.svg'

const OptionsList = () =>
    <ul className="icon-list">
        <li className="icon wic"><img src={EbtIcon} alt="ebt icon" />one</li>
        <li className="icon ebt"><img src={SnapIcon} alt="ebt icon" />two</li>
        <li className="icon snap"><img src={WicIcon} alt="ebt icon" />three</li>
    </ul>

export default OptionsList
