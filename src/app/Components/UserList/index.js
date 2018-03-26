import React from 'react' 
import PropTypes from 'prop-types'

import { UserListItem } from './../UserListItem'

export const UserList = ({users, view}) => {
	const createItems = () => {
		return users.map((user, i) => {
			return <UserListItem key={i} user={user} view={view}/>
		})
	}
	
	return (view) ? 
		(
			<ul className="collection">
				{createItems()}
			</ul>
		) :
		(
			<div className="row">
				{createItems()}
			</div>
		)
}

UserList.propTypes = {
	users: PropTypes.array,
	view: PropTypes.bool

}

