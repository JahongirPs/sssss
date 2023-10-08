import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { instance } from '../../api/axios'
import './ProductView.scss'
import Service from '../../components/end_service/Service'
import { useSelector, useDispatch } from 'react-redux'
import {FiShoppingCart} from "react-icons/fi"
import { v4 as uuidv4 } from 'uuid';



const ProductView = () => {
	let productId = useParams({})
	const dispatch = useDispatch()
	const [selectedVariant, setSelectedVariant] = useState(0)
	const [itemCounter, setItemCounter] = useState(1)
	const [activeImageNumber, setActiveImageNumber] = useState(0)
	const [productsItems, setId] = useState({})
	const currentLangueTranslate = useSelector(
		state => state.langueageTarnslate.lang
	)
	

	useEffect(() => {
		instance(`/product/single-product/${productId.id}`)
			.then(response => setId(response.data?.singleProduct?.at(0)))
			.catch(err => console.log(err))
	}, [productId.id])

	function decrement() {
		if (itemCounter > 1) {
			setItemCounter(itemCounter - 1)
		}
	}
	

	function increment() {
		if (
			itemCounter <
			+productsItems?.productSizesAndQuantity[selectedVariant].quantity
		) {
			setItemCounter(itemCounter + 1)
		}
	}

	function aaa(e) {
		e.preventDefault()
		
	}


	 function addToCart(product) {
			const { productSizesAndQuantity, ...rest } = product
			rest.productSizesAndQuantity = productSizesAndQuantity[selectedVariant]
			rest.count = itemCounter
			rest.totalPrice =
				productsItems?.productSizesAndQuantity?.[selectedVariant].price *
				itemCounter
			dispatch({ product: rest, type: '@ADD_TO_CART' })
		}

	return (
		<div>
			<div className='productId'>
				<div className='product__imgs'>
					<img
						className='img_items'
						src={productsItems?.productImages?.[activeImageNumber]}
						alt=''
					/>
					<div className='img__card-product'>
						{productsItems?.productImages?.map((isSetimg, ind) => (
							<img
								className='img_items-card'
								style={
									ind === activeImageNumber
										? { border: '3px solid dodgerblue' }
										: { border: '3px solid transparent' }
								}
								width={100}
								height={100}
								src={isSetimg}
								alt=''
								onClick={() => setActiveImageNumber(ind)}
							/>
						))}
					</div>
				</div>
				<form onSubmit={aaa}>
					<h1 className='h1__name-produt'>
						{currentLangueTranslate === 'uz'
							? productsItems?.productName_uz
							: productsItems?.productName_ru}
					</h1>
					<div className='product__catecory-name'>
						<div className='product__block-title-category'>
							{currentLangueTranslate === 'uz'
								? productsItems?.productMainCategory_uz
								: productsItems?.productMainCategory_ru}
						</div>
						<svg
							stroke='currentColor'
							fill='none'
							stroke-width='2'
							viewBox='0 0 24 24'
							stroke-linecap='round'
							stroke-linejoin='round'
							height='1em'
							width='1em'
							xmlns='http://www.w3.org/2000/svg'
						>
							<polyline points='9 18 15 12 9 6'></polyline>
						</svg>
						<div className='product__block-title-category'>
							{currentLangueTranslate === 'uz'
								? productsItems?.productSubCategory_uz
								: productsItems?.productSubCategory_ru}
						</div>
					</div>
					<div className='product__price-size'>
						<h2>На складе:</h2>
						<span className='price__product'>
							{
								productsItems?.productSizesAndQuantity?.[selectedVariant]
									?.quantity
							}
						</span>
						<h2>Размер:</h2>
						<select
							onChange={e => {
								setSelectedVariant(+e.target.value)
								setItemCounter(1)
							}}
						>
							{productsItems?.productSizesAndQuantity?.map(
								(productVariant, ind) => (
									<option key={uuidv4} value={ind}>
										{productVariant?.size}
									</option>
								)
							)}
						</select>
					</div>
					<h1 className='price'>
						{productsItems?.productSizesAndQuantity?.[selectedVariant].price}{' '}
						СУМ
					</h1>
					<div className='main-desc'>
						<div className='product__descriptin'>
							<div className='product_items-desc'>
								<svg
									stroke='currentColor'
									fill='currentColor'
									stroke-width='0'
									viewBox='0 0 512 512'
									height='1em'
									width='1em'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path d='M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80z'></path>
								</svg>
								{currentLangueTranslate === 'uz'
									? productsItems?.productDescription_uz?.[0]
									: productsItems?.productDescription_ru?.[0]}
							</div>
							<div className='product_items-desc'>
								<svg
									stroke='currentColor'
									fill='currentColor'
									stroke-width='0'
									viewBox='0 0 512 512'
									height='1em'
									width='1em'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path d='M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80z'></path>
								</svg>
								{currentLangueTranslate === 'uz'
									? productsItems?.productDescription_uz?.[1]
									: productsItems?.productDescription_ru?.[1]}
							</div>
							<div className='product_items-desc'>
								<svg
									stroke='currentColor'
									fill='currentColor'
									stroke-width='0'
									viewBox='0 0 512 512'
									height='1em'
									width='1em'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path d='M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80z'></path>
								</svg>
								{currentLangueTranslate === 'uz'
									? productsItems?.singleProduct?.[0].productDescription_uz?.[2]
									: productsItems?.singleProduct?.[0]
											.productDescription_ru?.[2]}
							</div>
						</div>
					</div>
					<div className='shop_card'>
						<div className='shop__items'>
							<h2>
								{currentLangueTranslate === 'uz' ? 'Miqdori :' : 'Количество :'}
							</h2>
							<div className='card'>
								<button onClick={decrement}>-</button>
								<p>{itemCounter}</p>
								<button onClick={increment}>+</button>
							</div>
						</div>
						<div className='shop__items'>
							<div className='product__list'>
								<h2>
									{currentLangueTranslate === 'uz'
										? 'Umumiy narx:'
										: 'Общая цена:'}
								</h2>
								<div className='carda'>
									{' '}
									{itemCounter *
										+productsItems?.productSizesAndQuantity?.[selectedVariant]
									   .price}{' '}
									СУМ
								</div>
							</div>
						</div>
						<div
							className='buyTOCart'
							onClick={() => addToCart(productsItems)}
							style={{ cursor: 'pointer' }}
						>
							<button
								onClick={() => addToCart(productsItems)}
								style={{ cursor: 'pointer' }}
							>
								<FiShoppingCart />{' '}
								{currentLangueTranslate === 'uz' ? 'Саватга қўшиш' : ' Купиты'}
							</button>
						</div>
					</div>
				</form>
			</div>
			<Service />
		</div>
	)
}

export default ProductView
