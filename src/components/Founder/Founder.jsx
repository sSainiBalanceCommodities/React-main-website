import React from 'react'
import styles from './Founder.module.css'
import LinkedIn from '../../assets/icons/LinkedIn'
import Gmail from '../../assets/icons/Gmail'


const Founder = () => {
    return (
        <div className={styles.founderContainer} >
            <div className={styles.founderBox} >
                <div className={styles.founderHaederBox} >
                    <div className={styles.header} >
                        <p className={styles.headerText} >Founder</p>
                    </div>
                </div>

                <div className={styles.contentBox} >
                    <p className={styles.contentBoxHeader}  >Kunal Aggarwal</p>
                    <p className={styles.contentBoxDescription} >Almost two decades of energy industry experience ranging from working at transmission system
                        operator to large generation companies to globally recognized trading houses and dealing with regulatory bodies.
                        Now leading an initiative through Balance Commodities with the vision to establish a trading house where
                        collaboration, innovation, and integrity take center stage.</p>
                </div>

                <div className={styles.founderBottom} >
                    <p className={styles.join} >Join Us</p>
                    <div className={styles.iconBox} >
                        <LinkedIn className={styles.linkedIn} height={36} width={36}  />
                        <Gmail className={styles.gmail}  height={36} width={36}  />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Founder
