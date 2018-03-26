import { User } from './../entities/Users'

export const createUserInstances = res => {
	return res.results.map(elem => {
		const {name, email, dob, picture, gender} = elem
		const { first } = name
		const { last } = name
		const { large } = picture
		return new User(first, last, email, dob, large, gender)
	})
}

export const createUserInstancesFromArray  = (arr) => {	
	return arr.map(elem => {
		return new User(elem.name, elem.surname, elem.email, elem.dob, elem.image, elem.gender)
	})
}

export const getReadableDate = (date) => {
	const givenDate = new Date()
	const year = givenDate.getFullYear()
	const month = givenDate.getMonth() + 1
	const day = givenDate.getDate()

	return `${day}.${month}.${year}`
}

export const hideEmail = (email) => {
	const getMonkey = email.indexOf('@')
	const firstPart = email.slice(0,3)
	const secondPart = email.slice(getMonkey - 2)

	return `${firstPart}...${secondPart}`
}