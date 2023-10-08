import { combineReducers } from "redux";
import reducerCarts from "./reducerCart";
import langReducer from "./reduceLang";
import loginReducer from "./LoginAdmin";

const rootReduer = combineReducers({
	langueageTarnslate: langReducer,
    cart: reducerCarts,
    Login: loginReducer,
})

export default rootReduer