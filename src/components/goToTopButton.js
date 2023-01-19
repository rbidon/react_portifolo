import {React, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import styles from './goToTopButton.module.css'
const GoTop =() => {

    const [showGoTop, setshowGoTop]= useState(false)

    const handleShowGoTop = ()=>{
        setshowGoTop(window.pageYOffset>50)
    }
    const handleScrollToTop = ()=>{
        window.scrollTo( { left: 0, top: 0, behavior: 'smooth' } )
    }
    useEffect(()=>{
        window.addEventListener('scroll', handleShowGoTop)
    },[])

    return(
        <>
        <div className={showGoTop ?'' :styles.btnScrollToUpHidden} onClick={handleScrollToTop}>
            <button className={styles.btnScrollToUp}title="Go to Top">
            <FontAwesomeIcon icon={solid ("arrow-up")} />
            </button>
        </div>
        </>
    )
}
export default GoTop