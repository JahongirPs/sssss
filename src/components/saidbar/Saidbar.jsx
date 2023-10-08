import "./Aside.scss";
import {instance } from "../../api/axios";
import React, { useEffect, useState } from "react";
import {AiOutlineAppstore} from "react-icons/ai";
import {FiChevronRight} from "react-icons/fi";
import { v4 as uuidv4 } from 'uuid';
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import {BiCategory} from "react-icons/bi"
const delet = [
	'/login',
	'/product-view',
	'/admin/order/all',
	'/admin',
	'/admin/order',
	"/admin/order/contact",
	"/admin/order/notcontact"
]


const Aside = () => {

    const currentLangueTranslate = useSelector(
			state => state.langueageTarnslate.lang
		)
      
		const [show , setShow ] = useState(true)

  const [categoryData, setCategoryData] = useState([])
  let location = useLocation()   

  useEffect(() => {
    instance("/category/category-nest")
      .then(response => setCategoryData(response?.data))
      .catch(err => console.log(err))
  }, [])

 
  return delet.includes(location.pathname) ? (
		<></>
	) : (
		<>
			<div
				className={show ? 'aside__logo' : 'deleteBtn'}
				onClick={() => setShow(!show)}
			>
				<BiCategory />
			</div>
			<div className={show ? 'showMedia' : 'aside__media'}>
				<div className='noneDiv'>
					<div className='main__products-aside'>
						<div className='aside__products-header'>
							<img
								src='https://mold-components-14sxqbw1r-ijalalov69-gmailcom.vercel.app/static/media/logoBlue.b0b9396a6e0808fb9ca8b5bbf73c5d4d.svg'
								alt=''
							/>
							<p className='closeSaidbaer' onClick={() => setShow(!show)}>
								X
							</p>
						</div>
						<div className='aside__products'>
							<div className='main__products-asdie__items'>
								<ul>
									{currentLangueTranslate === 'uz' ? (
										categoryData?.mainCategory_uz?.map(mainCategoryItem => (
											<li className='category__products__list'>
												<Link to={`/maincategory/${mainCategoryItem}`}>
													{mainCategoryItem}
												</Link>{' '}
												<FiChevronRight />
											</li>
										))
									) : (
										<></>
									)}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='aside'>
				<p className='aside__header'>
					<AiOutlineAppstore />
					Category
				</p>
				<ul className='aside__menu'>
					{currentLangueTranslate === 'uz'
						? categoryData.mainCategory_uz?.map((mainCategoryItem, ind) => (
								<li key={uuidv4()} className='aside__menu-item'>
									<Link to={`/maincategory/${mainCategoryItem}`}>
										{mainCategoryItem}
									</Link>{' '}
									<FiChevronRight />
									<div className='sub-category-item'>
										{categoryData.productSubCategories_ru[ind].map(
											subCategoryItem =>
												subCategoryItem ? (
													<Link
														to={`/subcategory/${subCategoryItem}`}
														key={uuidv4()}
													>
														{subCategoryItem}
													</Link>
												) : (
													<React.Fragment key={uuidv4()}></React.Fragment>
												)
										)}
									</div>
								</li>
						  ))
						: categoryData.mainCategory_ru?.map((mainCategoryItem, ind) => (
								<li key={uuidv4()} className='aside__menu-item'>
									<Link to={`/maincategory/${mainCategoryItem}`}>
										{mainCategoryItem}
									</Link>{' '}
									<FiChevronRight />
									<div className='sub-category-item'>
										{categoryData.productSubCategories_ru[ind].map(
											subCategoryItem =>
												subCategoryItem ? (
													<Link
														to={`/subcategory/${subCategoryItem}`}
														key={uuidv4()}
													>
														{subCategoryItem}
													</Link>
												) : (
													<React.Fragment key={uuidv4()}></React.Fragment>
												)
										)}
									</div>
								</li>
						  ))}
				</ul>
			</div>
		</>
	)
}

export default Aside
