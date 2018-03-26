import React from 'react'
import PropTypes from 'prop-types'

import { getReadableDate, hideEmail } from './../../../utils/utils' 

export const UserListItem = ({user, view}) => {
	const formatDate = () => getReadableDate(user.dob)
	const formatEmail = () => hideEmail(user.email)
	const colorFemale = (gender) => {
		if(gender === 'female') {
			return '#ffebee red lighten-5'
		}
	}

	

	return (view) ? 
		(
			<li className={`collection-item avatar ${colorFemale(user.gender)}`}>
				<img src={user.image} alt={user.name} className="circle" />
				<p>{user.name} {user.surname}</p>
				<p>Email: {formatEmail()} </p>
				<p>Date of birth: {formatDate()} </p>
			</li>
		) :
		(
			<div className="col s3">
				<div className={`card ${colorFemale(user.gender)}`}>
					<div className="card-image">
						<img src={user.image} alt={user.name} className="circle" />
					</div>
					<div className="card-content">
						<p>Email: {formatEmail()} </p>
						<p>Date of birth: {formatDate()} </p>
					</div>
				</div>
			</div>
		)
	
}

UserListItem.propTypes = {
	user: PropTypes.object,
	view: PropTypes.bool

}