import React from 'react'
import "./Contact.scss"
import { useTranslation } from 'react-i18next'

const Contact = () => {
  const {t} = useTranslation()
  return (
    <div className='Contacts'>
        <div className="Text_contact">
            <h1>{t("Conact.h11")}</h1>
            <p>{t("Conact.p1")}</p>
            <p>{t("Conact.p2")}</p>
            <p>{t("Conact.p3")}</p>
            <img className='img_contact' src="https://mold-components-14sxqbw1r-ijalalov69-gmailcom.vercel.app/static/media/office-min%202.153cd0976584138310b4.jpg" alt="" />
            <p>{t("Conact.p4")}</p>
            <ul>
               <li>{t("Conact.li1")}</li>
               <li>{t("Conact.li2")}</li>
               <li>{t("Conact.li3")}</li>
               <li>{t("Conact.li4")}</li>
               <li>{t("Conact.li5")}</li>
               <li>{t("Conact.li6")}</li>
               <li>{t("Conact.li7")}</li>
               <li>{t("Conact.li8")}</li>
            </ul>
        </div>
    </div>
  )
}

export default Contact