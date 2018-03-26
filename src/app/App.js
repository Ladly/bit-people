import React, { Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'

import { HomePage } from './Containers/HomePage'
import { AboutPage } from './Components/AboutPage'

export const App = () => {
	return (
		<Fragment>
			<Switch>
				<Route exact path="/" component={HomePage}></Route>
				<Route exact path="/about" component={AboutPage}></Route>
			</Switch>
		</Fragment>
  	)
}

