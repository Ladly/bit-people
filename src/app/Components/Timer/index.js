import React from 'react'
import PropTypes from 'prop-types'

export const Timer = ({timeElapsed}) => {
	
	const timeOfLastFetch = () => {
		let timer = ''
			
		if(timeElapsed < 60000){
			timer = 'Less than minute'
		} else if ( timeElapsed > 60001 && timeElapsed < 1200000) {
			timer = 'Less than 20 minutes ago'
		} else if (timeElapsed > 1200001 && timeElapsed < 3600000) {
			timer = 'Over an hour ago'
		} else if (timeElapsed > 3600001 && timeElapsed < 172800000){
			timer = 'Two days ago'
		} else if (timeElapsed > 172800001 && timeElapsed < 604800000) {
			timer = 'Over a week ago'
		} else if (timeElapsed > 604800001 && timeElapsed < 2629746000) {
			timer = 'One month ago'
		} else {
			timer = 'Over a month ago'
		}

		return timer
	}

	return (
		<span className="right">TimeElapsed: {timeOfLastFetch()}</span>
	)
}

Timer.propTypes = {
	timeElapsed: PropTypes.number,
}