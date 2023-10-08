import React, { useEffect, useState } from 'react';
import "./Cart.scss";
import { BsCart3 } from 'react-icons/bs'
import {AiOutlineClose} from "react-icons/ai"
import { useDispatch, useSelector } from 'react-redux';
import {RiDeleteBin6Fill} from "react-icons/ri"
import { useLocation } from 'react-router-dom';
const delet = ['/login', '/admin', '/admin/order/all', '/admin/order' , "/admin/order/contact", "/admin/order/notcontact"]


const Cart = () => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const dispatch = useDispatch()
    const currentLangueTranslate = useSelector(
			state => state.langueageTarnslate.lang
		)

		useEffect(()=>{
			
		},[isCartOpen])

	const cartsProductItems = useSelector(state => state.cart.cartProduct)	
     

	function removeTOCArd(productRemove){

        dispatch({productRemove , type:"@REMOVE_CART"})
	}

    const location = useLocation()

  return delet.includes(location.pathname) ? (
		<></>
	) : (
		<div className='main_cart'>
			<div className={isCartOpen ? 'cart cart--active' : 'cart'}>
				<div className='carts' onClick={() => setIsCartOpen(!isCartOpen)}>
					{' '}
				</div>
				<div
					className='block__cartToggle'
					onClick={() => setIsCartOpen(!isCartOpen)}
				>
					<span className='length__product'>{cartsProductItems.length}</span>
					<BsCart3 className='cart-toggle' />
				</div>
				<AiOutlineClose
					className='close'
					onClick={() => setIsCartOpen(!isCartOpen)}
				/>
				<div className='main__product'>
					<div className='cart__title'>
						<h1 className='tittle_carts'>
							{currentLangueTranslate === 'uz' ? 'Саватга' : ' Корзинка'}
						</h1>
					</div>
					<div className='carts_itesm-view'>
						{cartsProductItems?.map(viewCarts => (
							<div key={viewCarts?._id} className='carts__products'>
								<div className='delete' onClick={() => removeTOCArd(viewCarts)}>
									<RiDeleteBin6Fill />
								</div>
								<div className='img_cats'>
									<img src={viewCarts?.productImages} alt='' />
								</div>
								<div className='text__carts'>
									<h3>
										{currentLangueTranslate === 'uz'
											? viewCarts?.productName_uz
											: viewCarts?.productName_ru}
									</h3>
									<span>{'>'}</span>
									<b className='size__viewCart'>
										{viewCarts?.productSizesAndQuantity?.size}
									</b>
									<h4
										style={{ color: '#4361ee', paddingTop: '10px' }}
										className='pricer_carts'
									>
										{viewCarts?.productSizesAndQuantity?.price} СУМ
									</h4>
									<div className='cards'>
										<button>-</button>
										<p>1</p>
										<button>+</button>
									</div>
								</div>
							</div>
						))}
					</div>

					<div className='messege__cart'>
						<div className='tittle__carst'>
							<h2>
								{currentLangueTranslate === 'uz'
									? `Cони: ${cartsProductItems.length}`
									: `Каличество: ${cartsProductItems.length}`}
							</h2>
							<h1>{cartsProductItems?.[0]?.selectedType?.price} СУМ</h1>
							<div className='form__input'>
								<form action=''>
									<input
										type='text'
										placeholder={
											currentLangueTranslate === 'uz'
												? 'Исмингиз ва Фамилиянгиз'
												: 'Имя и Фамилийа'
										}
									/>
									<input
										type='text'
										placeholder={
											currentLangueTranslate === 'uz' ? 'Телефон' : 'Ракамингиз'
										}
									/>
								</form>
								<button className='btn__buy'>
									{currentLangueTranslate === 'uz'
										? 'Буюртма бериш'
										: 'Заказаты'}
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Cart