import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import "./Order.scss"

const Order = () => {
  return (
		<div className='order'>
			<nav className='main_order-nav'>
				<h1>Буюртмалар</h1>
				<ul className='ul_order-nav'>
					<li className='li_order-nav'>
						<NavLink to='/admin/order/all'>Барча буюртмалар</NavLink>
					</li>
					<li className='li_order-nav'>
						<NavLink to='/admin/order/notcontact'>Aлоқага чиқилмаган буюртмалар</NavLink>
					</li>
					<li className='li_order-nav'>
						<NavLink to="/admin/order/contact">Aлоқага чиқилган буюртмалар</NavLink>
					</li>
				</ul>
			</nav>
			<Outlet />
		</div>
	)
}

export default Order