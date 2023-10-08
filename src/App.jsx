import {Routes, Route} from "react-router-dom";
import Contact from "./routes/contact/Contact";
import Home from "./routes/home/Home";
import Nav from "./components/nav/Nav";
import Serch from "./components/serch/Serch";
import End from "./components/end/End";
import Parents from "./routes/Parents/Parents";
import Aloqa from "./routes/aloqa/Aloqa"
import ProductView from "./routes/product-view/ProductView";
import Mn from "./routes/maincategory/Mn";
import Sub from "./routes/subcategor/Sub";
import Cart from "./components/cart/Cart";
import Login from "./routes/login/Login";
import Private from "./routes/private/Private";
import Admin from "./routes/admin/Admin";
import Order from "./routes/order/Order";
import OrderDetail from "./routes/orderDeatils/OrderDetail";

function App() {
  return (
		<div className='container'>
			<Nav />
			<Serch />
			<Cart />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/Parents' element={<Parents />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='login' element={<Login />} />
				<Route path='/Aloqa' element={<Aloqa />} />
				<Route path='/' element={<Private />}>
					<Route path='/admin' element={<Admin />}>
						<Route path='/admin/order' element={<Order />}>
							<Route path='/admin/order/:status' element={<OrderDetail/>}/>
						</Route>
					</Route>
				</Route>
				<Route path='/product-view/:id' element={<ProductView />} />
				<Route path='/maincategory/:id' element={<Mn />} />
				<Route path='/subcategory/:id' element={<Sub />} />
			</Routes>
			<End />
		</div>
	)
}

export default App;