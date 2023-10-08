import React from 'react'
import "./Service.scss"
import { useTranslation } from 'react-i18next'

const Service = () => {

  const {t} = useTranslation()

  return (
    <div className="service" style={{margin:"auto" , marginTop:"50px"}}>
        <div className="text_Service">
             <h2>{t("endService.h2")}</h2>
        </div>
         <ul>
         <li>
            <h4>{t("endService.h4")}</h4>
            <span>{t("endService.span")}</span>
          </li>
           <li>
            <h4>{t("endService.h42")}</h4>
            <span>{t("endService.span2")}</span>
           </li>
           <li>
              <h4>{t("endService.h43")}</h4>
              <span>{t("endService.span3")}</span>
           </li>
           <li>
              <h4>{t("endService.h44")}</h4>
              <span>{t("endService.span4")}</span>
           </li>
         </ul>
    </div>
  )
}

export default Service