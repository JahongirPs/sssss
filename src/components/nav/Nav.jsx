import React, { useState } from 'react'
import "./Nav.scss"
import { BsTelephone } from "react-icons/bs";
import{ HiOutlineMail } from "react-icons/hi"
import  i18n  from "../../language/i18next";
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
const delet = ['/login', "/admin", "/admin/order/all" , "/admin/order" ,"/admin/order/contact", "/admin/order/notcontact"]


const Nav = () => {
  const [isLang , setLang] = useState(localStorage.getItem("lang") || "uz")
  const dispatch = useDispatch()
 

   function changeLang(selectedLangCode){
    i18n.changeLanguage(selectedLangCode)
    setLang(selectedLangCode)
    dispatch({ langProducts: selectedLangCode,  type:"@PRODUCT_LANG"})
   }

   const location = useLocation()

  return delet.includes(location.pathname) ? (
		<></>
	) : (
		<nav>
			<div className='main_nav'>
				<div className='img_flag'>
					<img
						className='rus'
						style={
							isLang === 'uz'
								? {
										borderBottom: ' 4px solid dodgerblue',
										paddingBottom: '2px',
								  }
								: null
						}
						src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Uzbekistan.svg/2560px-Flag_of_Uzbekistan.svg.png'
						alt=''
						onClick={() => changeLang('uz')}
					/>
					<img
						className='rus'
						style={
							isLang === 'ru'
								? {
										borderBottom: ' 4px solid dodgerblue',
										paddingBottom: '2px',
								  }
								: null
						}
						src='https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/1200px-Flag_of_Russia.svg.png'
						alt=''
						onClick={() => changeLang('ru')}
					/>
					<BsTelephone className='icon_phone-media' />
					<a href='+998 91 186 00 85'>
						<BsTelephone></BsTelephone> +998 91 186 00 85
					</a>
					<HiOutlineMail className='icon_email-media' />
					<a href='erkinhodjaev@gmail.com' className='a'>
						{' '}
						<HiOutlineMail className='icon_email'></HiOutlineMail>{' '}
						erkinhodjaev@gmail.com
					</a>
				</div>
			</div>
		</nav>
	)
}

export default Nav