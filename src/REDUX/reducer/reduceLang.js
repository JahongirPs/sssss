const intelState = {
    lang: localStorage.getItem("lang")
}


 const langReducer = (state = intelState , action) => {
    console.log(action);
    switch (action.type) {
			case '@PRODUCT_LANG':
				return {
					lang: action.langProducts,
				}
			default:
				return state
		}
}
export default langReducer