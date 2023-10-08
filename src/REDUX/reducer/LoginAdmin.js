const intiealState = {
	admin: null,
	token: localStorage.getItem('access-admin-token') || "",
	isLoggin: false,
}

const loginReducer = (state = intiealState , action) => {
    switch (action.type) {
			case '@LOGIN__ADMIN':
				localStorage.setItem('access-admin-token', action.payload.token)
				return {
					admin: action.payload.user,
					token: action.payload.token,
					isLoggin: true,
				}
                case "@REMOVE__LOCAL" :
                    return ({
                    })
			default:
				return state
		}
}


export default loginReducer