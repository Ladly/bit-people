import React from 'react'
import PropTypes from 'prop-types'

import { Timer } from './../Timer'

import './style.css'

export const Footer = ({timeElapsed}) => {
	return (
		<footer className="page-footer">
			<div className="container">           
            © 2018 Bit Student
				<Timer timeElapsed={timeElapsed}/>
			</div>
		</footer>
	)
}

Footer.propTypes = {
	timeElapsed: PropTypes.number,
}