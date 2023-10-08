import "./Admin.scss"
import { Link, Outlet } from "react-router-dom"
import {FiShoppingCart} from "react-icons/fi"
import {RiShoppingBasket2Line} from "react-icons/ri"
import {BiCartAdd} from "react-icons/bi"
import { IoAnalyticsOutline, IoExitOutline } from 'react-icons/io5'
import { useDispatch } from "react-redux"

const Admin = () => {

   const dispatch = useDispatch()

   function deleteStroge(){
   
     dispatch({
				type: '@REMOVE__LOCAL',
				btn: localStorage.clear('access-admin-token'),
			})
   }

  return (
		<div className='Admin'>
			<div className='Saidbar'>
				<div className='saidbars__img'>
					<Link to='/'>
						<img
							src='https://mold-components-14sxqbw1r-ijalalov69-gmailcom.vercel.app/static/media/logoBlue.b0b9396a6e0808fb9ca8b5bbf73c5d4d.svg'
							alt=''
						/>
					</Link>
				</div>
				<div className='saidbar__lang'>
					<div className='lang'>
						<img
							src='https://mold-components-14sxqbw1r-ijalalov69-gmailcom.vercel.app/static/media/flag.2e639ba3f44a946f839ee15d94b3ec49.svg'
							alt=''
						/>
					</div>
					<div className='lang'>
						<img
							src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAHYAAAB2AH6XKZyAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAALFJREFUeJzt16GNAmEURtEZMoYK6IQmcIhtkBbAIaAP9Nod1CYY6IIj/nsquPmSJ940JUmSZEzz6fo46whpXtf1rSOkjQ7QGkAHaA2gA7QG0AFaA+gArQF0gDb8AMvv30s3UPN0PPcNjqwBdIDWADpAawAdoDWADtAaQAdoDaADtPm+3Q/9DS67/6duoIY/gQbQAVoD6ACtAXSA1gA6QGsAHaANP8ByO/xcdESSJEnyfR8erBIBIDKMHQAAAABJRU5ErkJggg=='
							alt=''
						/>
					</div>
				</div>
				<div className='saidbar__account'>
					<div className='accoutn__avatr'>
						<svg
							stroke='currentColor'
							fill='currentColor'
							stroke-width='0'
							viewBox='0 0 24 24'
							height='1em'
							width='1em'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path fill='none' d='M0 0h24v24H0z'></path>
							<g fill-rule='evenodd'>
								<circle cx='17' cy='15.5' r='1.12'></circle>
								<path d='M17 17.5c-.73 0-2.19.36-2.24 1.08.5.71 1.32 1.17 2.24 1.17s1.74-.46 2.24-1.17c-.05-.72-1.51-1.08-2.24-1.08z'></path>
								<path d='M18 11.09V6.27L10.5 3 3 6.27v4.91c0 4.54 3.2 8.79 7.5 9.82.55-.13 1.08-.32 1.6-.55A5.973 5.973 0 0017 23c3.31 0 6-2.69 6-6 0-2.97-2.16-5.43-5-5.91zM11 17c0 .56.08 1.11.23 1.62-.24.11-.48.22-.73.3-3.17-1-5.5-4.24-5.5-7.74v-3.6l5.5-2.4 5.5 2.4v3.51c-2.84.48-5 2.94-5 5.91zm6 4c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z'></path>
							</g>
						</svg>
					</div>
					<div className='div'>
						<h1>6270f64b</h1>
						<p>Админ</p>
					</div>
				</div>
				<ul>
					<li>
						<Link to="/admin/order">
							<FiShoppingCart className='Icon' />
							<p>Буюртмалар</p>
						</Link>
					</li>
					<li>
						<Link>
							<RiShoppingBasket2Line className='Icon' />
							<p>Маҳсулот бошқариш</p>
						</Link>
					</li>
					<li>
						<Link>
							<BiCartAdd className='Icon' />
							<p>Маҳсулот яратиш</p>
						</Link>
					</li>
					<li>
						<Link>
							<IoAnalyticsOutline className='Icon' />
							<p>Aналитика</p>
						</Link>
					</li>
					<button onClick={deleteStroge}><IoExitOutline/> Тизимдан чиқиш</button>
				</ul>
			</div>
			<div className='ProductsAdd'>
				 <Outlet/>
			</div>
		</div>
	)
}

export default Admin