import React from 'react'
import style from './Maincurrent.module.css'
import Currentrequest from '../Currentrequest/Currentrequest'
import CurrentrequestSub from '../CurrentrequestSub/CurrentrequestSub'

const Maincurrent = () => {
  return (
    
     <div className={style.container}>
        <div className={style.judehospital}>

<div>

                <Currentrequest/>
                
                <CurrentrequestSub/>
</div>


</div>


</div>
    
  )
}

export default Maincurrent