import {React  } from 'react';
import { DefaultButton } from '../../utils/Utils';
import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';
import "./ProductCard.scss"
import Mn from '../../routes/maincategory/Mn';
import { useDispatch, useSelector } from 'react-redux';
import {BsHandIndexThumb} from "react-icons/bs"


const ProductCard = ({productData}) => {

  const dispatch = useDispatch()

  const currentLangueTranslate = useSelector(
		state => state.langueageTarnslate.lang
	)
   

	function addTOCART(product) {
			const { productSizesAndQuantity , ...rest} = product
			rest.productSizesAndQuantity = productSizesAndQuantity.at(0)
		console.log(product)

		dispatch({ product:rest, type: '@ADD_TO_CART' })
	}

  return (
		<div className='product-card'>
			<Link to={`/product-view/${productData._id}`}>
				<img src={productData.productImages[0]} alt='' />
			</Link>
			<h3>
				{currentLangueTranslate === 'uz'
					? productData.productName_uz
					: productData.productName_ru}
			</h3>
			<div className='product-card__categories'>
				<span>
					{currentLangueTranslate === 'uz'
						? productData.productMainCategory_uz
						: productData.productMainCategory_ru}
				</span>{' '}
				<FiChevronRight /> <span>{productData.productSubCategory_ru}</span>
			</div>
			<div className='product-card__price'>
				{`${productData?.productSizesAndQuantity[0].price} ${
					productData?.productSizesAndQuantity.length > 1
						? '- ' + productData?.productSizesAndQuantity.reverse()[0].price
						: ''
				} CУМ `}
			</div>
			{productData?.productSizesAndQuantity.length > 1 ? (
				<Link style={{textDecoration:"none"}} className='default-btn' to={`/product-view/${productData?._id}`}>
					{' '}
					<BsHandIndexThumb />{' '}
					{currentLangueTranslate === 'uz' ? 'Танлаш' : 'Выбрать'}{' '}
				</Link>
			) : (
				<div onClick={() => addTOCART(productData)}>
					<DefaultButton
						text={
							currentLangueTranslate === 'uz' ? 'Саватга қўшиш' : 'Дабавиты'
						}
					/>
				</div>
			)}
			<Mn productId={productData} />
		</div>
	)
}

export default ProductCard