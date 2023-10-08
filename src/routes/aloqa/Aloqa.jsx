import React from 'react'
import "./Aloqa.scss"
import { useTranslation } from 'react-i18next'

const Aloqa = () => {
  
  const {t} = useTranslation()
  
  return (
    <div className='Aloqa'>
           <h1>{t("Abouts.h11")}</h1>
           <ul>
            <li><a href="+998 91 186 00 85">+998 91 186 00 85</a></li>
            <li><a href="erkinhodjaev@gmail.com">erkinhodjaev@gmail.com</a></li>
            <li>{t("Abouts.li1")}</li>
            <li className='li'>{t("Abouts.li2")}</li>
           </ul>
           <div className='ifrme'> 
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.355024311767!2d71.58551931541363!3d40.99560197930208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1e122151052b5932!2zNDDCsDU5JzQ0LjIiTiA3McKwMzUnMTUuOCJF!5e0!3m2!1sen!2sus!4v1656415605338!5m2!1sen!2sus" frameborder="0"></iframe>
           </div>
    </div>
  )
}

export default Aloqa