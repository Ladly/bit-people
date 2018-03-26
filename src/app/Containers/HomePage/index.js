import React, { Component, Fragment } from 'react'

import { Header } from './../../Components/Header'
import { Search } from './../Search'
import { UserList } from './../../Components/UserList'
import { Loading } from './../../Components/Loading'
import { Footer } from './../../Components/Footer'

import { fetchServiceInstance } from './../../../services/FetchService'
import { localStorageService } from './../../../services/LocalStorageService'
import { createUserInstancesFromArray } from './../../../utils/utils'
import { NO_MATCH_IMAGE_URL } from './../../../utils/constants'

class HomePage extends Component {
	constructor(){
		super()
		this.state = {
			users: [],
			listView : this.getLocalStorageView(),
			loaded: true,
			lastFatched : this.timer(),
			inputValue: '',
			filteredUsers: [],
			stats: {}
		}

		this.handleChange = this.handleChange.bind(this)
	}

	fetchUsers = () => {
		this.setState({
			...this.state,
			loaded: false
		})
		this.storeTimeOfFetch()
		localStorage.removeItem('users')
		fetchServiceInstance.fetchUsers()
			.then (users => {
				this.prepareAndStoreUsers(users)
				this.setState({
					...this.state,
					users,
					loaded: true
				})
			})
	}

	storeTimeOfFetch = () => {
		const date = new Date()
		const dateOfFetch = Date.parse(date)
		localStorageService.storeFetchDate(dateOfFetch)		
	}

	timer = () => {
		const date = new Date() 
		const currentDate = Date.parse(date)
		const timeElapsed = currentDate - localStorage.getItem('date')

		return timeElapsed
	}

	prepareAndStoreUsers = (users) => {
		if(localStorage.getItem('users') === null){
			localStorageService.storeUsers(JSON.stringify(users))
		}
	}

	getStoredUsers = () => {
		const storedUsers = JSON.parse(localStorage.getItem('users'))		
		createUserInstancesFromArray(storedUsers)
		this.setState({users: storedUsers})		
	}
	
	componentDidMount() {
		if(localStorage.getItem('users') === null){
			this.fetchUsers()
		} else {
			this.getStoredUsers()
		}	
	}

	getLocalStorageView = () => {
		return localStorage.getItem('view') === null ? true : JSON.parse(localStorage.getItem('view'))
	}

	changeView = () =>  {
		const changedView = !(this.state.listView)
		this.setState({
			...this.state,
			listView: changedView
		})
		localStorageService.storeView(changedView)
	}

	searchUsers = () => {		
		return this.state.users.filter(user => {
			const searchArea = user.name + user.surname			
			return searchArea.includes(this.state.inputValue)
		})
	}

	getUSerStats = () => {
		let males = 0
		let females = 0
		const filtered = this.state.filteredUsers
		for(let i = 0; i < filtered.length; i++) {
			if(filtered[i].gender === 'female') {
				females++
			} else {
				males ++
			}
		}
		this.setState({
			stats:{males, females}
		}) 
	}

	handleChange = (e) => {	
		this.setState({
			...this.state,
			inputValue: e.target.value
		})

		const searchedUsers = this.searchUsers()
		
		this.setState({
			filteredUsers: createUserInstancesFromArray(searchedUsers)
		})	
		
		if(this.state.filteredUsers.length) {
			this.getUSerStats()
		}
	}

	loadingScreen = () => (this.state.loaded) ? <Search handleChange={this.handleChange}  value={this.state.inputValue} /> : <Loading />

	search = () => {
		if (this.state.filteredUsers.length){
			return this.state.filteredUsers
		} else if(this.state.filteredUsers === []) {
			return <img src={NO_MATCH_IMAGE_URL} alt="No users found"/>
		} else {
			return this.state.users
		}

	}

	viewBadges = () => {
		if(this.state.filteredUsers.length){
			return (
				<div>
					<span className="badge red">Females: {this.state.stats.females}</span>
					<span className="badge blue">Males: {this.state.stats.males}</span>
				</div>)
		}
	}

	render() {
		this.timer()

		return (
			<Fragment>
				<Header view={this.state.listView} changeView={this.changeView}  fetchUsers={this.fetchUsers} />
				<div className="container">
					{this.loadingScreen()}
					{this.viewBadges()}
					<UserList users={this.search()} view={this.state.listView} />
				</div>
				<Footer timeElapsed={this.state.lastFatched}/>
			</Fragment>
		)
	}
}

export { HomePage }