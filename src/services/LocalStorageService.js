class LocalStorageService {

	storeView(view) {
		localStorage.setItem('view', view)
	}

	storeUsers(users) {
		localStorage.setItem('users', users)
	}

	storeFetchDate(date) {
		localStorage.setItem('date', date)
	}

	getStoredData(key) {
		localStorage.getItem(key)
	}

	removeStoredItem(key) {
		localStorage.removeItem(key)
	}
}

export const localStorageService = new LocalStorageService()
