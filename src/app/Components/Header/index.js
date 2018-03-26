import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export const Header = (props) => {

	const pickView = () => {
		return props.view ?
			<li><a onClick={props.changeView}><i className="material-icons">view_module</i></a></li> :
			<li><a onClick={props.changeView}><i className="material-icons">view_list</i></a></li>
	}

	const pickPage = () => {
		return window.location.hash === '#/' ?
			(
				<header>
					<nav>
						<div className="nav-wrapper">
							<div className="container">
								<a className="brand-logo center">Bit People</a>
								<ul className="right hide-on-med-and-down">
									<li><Link to="/about" >About</Link></li>
									{pickView()}
									<li><a onClick={props.fetchUsers}><i className="material-icons">refresh</i></a></li>
								</ul>
							</div>
						</div>
					</nav>
				</header>
			) :
			(
				<header>
					<nav>
						<div className="nav-wrapper">
							<div className="container">
								<a href="#!" className="brand-logo center">Bit People</a>
								<ul className="right hide-on-med-and-down">
									<li><Link to="/" >Home</Link></li>
								</ul>
							</div>
						</div>
					</nav>
				</header>
			)
	}

	return (
		<Fragment>
			{pickPage()}
		</Fragment>
	)
}

Header.propTypes = {
	changeView: PropTypes.func,
	fetchUsers: PropTypes.func,
	view: PropTypes.bool
}