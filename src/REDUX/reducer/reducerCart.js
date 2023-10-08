const intelsProduct = {
     cartProduct: []
}


 const reducerCarts = (state = intelsProduct , action) => {
    switch (action.type) {
			case '@ADD_TO_CART':
				return {
					cartProduct: [...state.cartProduct, action.product],
				}
			case '@REMOVE_CART':
				let remove = state?.cartProduct?.findIndex(
					removeProduct => removeProduct?.id === action?.id
				)
				state.cartProduct.splice(remove, 1)
				return {
					cartProduct: [...state.cartProduct],
				}
			default:
				return state
		}
}


export default reducerCarts
