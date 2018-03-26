import { USERS_URL } from './../utils/constants'
import { createUserInstances } from './../utils/utils'

class FetchService {

	fetchUsers() {
		return fetch(USERS_URL)
			.then(response => response.json())
			.then(result => createUserInstances(result))
	}
}

export const fetchServiceInstance = new FetchService()