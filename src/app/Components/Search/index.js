import React from 'react'
import PropTypes from 'prop-types'

export const Search = ({value, handleChange}) => {
	
	return (
		<div className="input-field">
			<input id="search" type="search" className="center" value={value}  onChange={handleChange} required />
			<label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
			<i className="material-icons">close</i>
		</div>
	)
}

Search.propTypes = {
	handleChange: PropTypes.func,
	value: PropTypes.string
}