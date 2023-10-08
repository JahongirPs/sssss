import { useState, useEffect, } from "react";
import { instance } from '../../api/axios';
import { FiSearch } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import "./Serch.scss";
import logo from "../../img/svg.svg";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
const delet = ['/login', '/admin', '/admin/order', '/admin/order/all', "/admin/order/contact", "/admin/order/notcontact" ]

const Search = (productsView) => {
  const {t} = useTranslation()
  const [inputSearch, setInputSearch] = useState("");
  const [searchResult, setSearchResults] = useState([]);
  const currentLangueTranslate = useSelector(
		state => state.langueageTarnslate.lang
	)
  

  useEffect(() => {
    instance(`product/search/${inputSearch}`)
      .then(response => { 
        setSearchResults(response.data)
        setShowNoResult(response.data.length === 0 && inputSearch !== ""); 
      })
        
      .catch(err => {
        setSearchResults([])
      })
  }, [inputSearch])

  const [showNoResult, setShowNoResult] = useState(true);


  const hideNoResult = () => {
    setShowNoResult(false);
    setInputSearch("")
  };

   const location = useLocation()
  return delet.includes(location.pathname) ? (
		<></>
	) : (
		<div>
			<div className='search_wrapper'>
				<div className='search'>
					<img className='logo' src={logo} alt='' />
					<div className='search__group'>
						<div className='input_wrapper'>
							<input
								type='text'
								placeholder={
									currentLangueTranslate === 'uz' ? 'Qidiruv...' : 'Поиск...'
								}
								value={inputSearch}
								onChange={e => setInputSearch(e.target.value)}
							/>
							<button>
								<FiSearch />
							</button>
							{showNoResult && inputSearch ? (
								<div className='no-result'>
									<div className={'navbar__search__result'}>
										<div className='header__flex'>
											<div>
												{currentLangueTranslate === 'uz'
													? 'Қидириш натижалари:'
													: 'Результаты поиска:'}
											</div>
											<div className='Navbar_search__indicator'>
												#{inputSearch}
											</div>
										</div>
										<div className='header__result'>
											<span>
												{currentLangueTranslate === 'uz'
													? '0 Натижа'
													: '0 Результаты'}
											</span>
											<div onClick={hideNoResult}>
												{currentLangueTranslate === 'uz'
													? 'Бекор қилиш'
													: 'отменить'}
											</div>
										</div>
									</div>
									<div className='images__group'>
										<img
											src='https://mold-2.vercel.app/static/media/resultno.66419f6a48c60be00243.png'
											className={'no-result-images'}
											alt='No results'
										/>
									</div>
								</div>
							) : (
								searchResult.length > 0 && (
									<div className='search__result'>
										<div className={'navbar__search__result results'}>
											<div className='header__flex'>
												<div>
													{currentLangueTranslate === 'uz'
														? 'Қидириш натижалари:'
														: 'Результаты поиска:'}
												</div>
												<div className='Navbar_search__indicator'>
													#{inputSearch}
												</div>
											</div>
											<div className='header__result'>
												<span>
													{searchResult.length}{' '}
													{currentLangueTranslate === 'uz'
														? ' Натижа'
														: ' Результаты'}{' '}
													{searchResult.length !== 1 ? ' ' : ''}
												</span>
												<div onClick={hideNoResult}>
													{currentLangueTranslate === 'uz'
														? 'Бекор қилиш'
														: 'отменить'}
												</div>
											</div>
										</div>
										{searchResult?.map(searchedItem => (
											<Link
												className='search__result_link'
												to={`/product-view/${searchedItem._id}`}
											>
												<div className={'search__result-item'}>
													<img src={searchedItem?.productImages[0]} alt='' />
													<h4>
														{currentLangueTranslate === 'uz'
															? searchedItem?.productName_uz
															: searchedItem?.productName_ru}
													</h4>
													<strong>{`${
														searchedItem?.productSizesAndQuantity[0].price
													} ${
														searchedItem?.productSizesAndQuantity.length > 1
															? '-' +
															  searchedItem?.productSizesAndQuantity.reverse()[0]
																	.price
															: ''
													} CУМ`}</strong>
												</div>
											</Link>
										))}
									</div>
								)
							)}
						</div>
						<div className='sub_navigation'>
							<ul className='sub_navigation-main'>
								<li className="sub__navigation-link">
									<Link className='sub__nav-link' to='/'>
										{t('Nav.main')}
									</Link>
								</li>
								<li className="sub__navigation-link">
									{' '}
									<Link className='sub__nav-link' to='/Parents'>
										{t('Nav.partenorts')}
									</Link>
								</li>
								<li className="sub__navigation-link">
									{' '}
									<Link className='sub__nav-link' to='/Aloqa'>
										{t('Nav.Contact')}
									</Link>
								</li>
								<li className="sub__navigation-link">
									<Link className='sub__nav-link' to='/contact'>
										{t('Nav.About')}
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
};

export default Search;