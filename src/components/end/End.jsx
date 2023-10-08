import React from 'react'
import "./End.scss"
import svgLogo from "../../img/svg4.svg"
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'
const delet = ['/login', '/admin/order/all', '/admin' , "/admin/order/contact", "/admin/order/notcontact"] 

const End = () => {
 
  const {t} = useTranslation()
  const location = useLocation()


  return delet.includes(location.pathname) ? (<></>) : (
    <div className='End'>
       <div className="End_block">
           <div className="block_end">
             <b>{t("EndFooter.b1")}</b>
             <p>{t("EndFooter.p1")}</p>
           </div>
           <div className="block_end">
            <b>{t("EndFooter.b2")}</b>
            <p>+998 91 186 00 85</p>
           </div>
           <div className="block_end">
              <b>{t("EndFooter.b3")}</b>
              <p>erkinjon.hodjaev@gmail.com</p>
           </div>
       </div>
       <div className="EndBlock_text">
             <div className="EndText">
                <div className="logoText">
                   <img src={svgLogo} alt="" />    
                </div> 
                <div className="textp">{t("EndFooter.div")}</div>
                <div className="text2">
                <b>{t("EndFooter.b4")}</b>
                </div>
             </div>
             <div className="EndText">
                 <div className='b'>
                     <b>{t("EndFooter.b5")}</b>
                     <div className='div'></div>
                 </div>
                 <ul>
                   <a href="/">{t("EndFooter.a1")}</a>
                   <a href="/">{t("EndFooter.a2")}</a>
                   <a href="/">{t("EndFooter.a3")}</a>
                   <a  href="/">{t("EndFooter.a4")}</a>
                 </ul>
             </div>
             <div className="EndText">
               <div className='Textb'><b className='b'>{t("EndFooter.div2")}</b><div className='div'></div></div>
                <p className='p'>
                {t("EndFooter.p2")}
                </p>
             </div>
       </div>
    </div>
  )
}

export default End