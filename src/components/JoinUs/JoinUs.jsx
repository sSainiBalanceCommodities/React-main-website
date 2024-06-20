import React from 'react'
import join from '../../assets/joinus-hand.jpg'
import styles from './JoinUs.module.css'
import LinkedIn from '../../assets/icons/LinkedIn'
import Gmail from '../../assets/icons/Gmail'



const JoinUs = () => {
    return (
        <div className={styles.JoinUsContainer} >
            <img
                alt="about background"
                src={join}
                placeholder="blur"
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                }}
            />

            <div className={styles.JoinBox} >
                <div className={styles.JoinHaederBox} >
                    <div className={styles.header} >
                        <p className={styles.headerText} >Join Us</p>
                    </div>
                </div>

                <div className={styles.contentBox} >
                    <p className={styles.contentBoxHeader}  >Are you ready to embrace the adventure that is Balance?</p>
                    <p className={styles.contentBoxDescription} >If you're seeking a break from the standard nine-to-five
                        and are driven by adventure,
                        innovation, and a zest for the extraordinary, then Balance is calling your name.

                        Balance is not just a company; we're a collective of seasoned traders ready to reshape the energy ecosystem,
                        fresh graduates with sharp minds eager to make their mark, and tech specialists who want to
                        redefine the industry's future. Join us in challenging norms, pushing boundaries, and embarking on a
                        journey where every day brings new opportunities to thrive and create impact.</p>
                </div>

                <div className={styles.founderBottom} >
                    <div className={styles.iconBox} >
                        <LinkedIn className={styles.linkedIn}  />
                        <Gmail className={styles.gmail}   />
                    </div>
                </div>

            
            </div>
            <div className={styles.joinDetails} >
                    <p>841 DMCC Business Center, J&G3, JLT, Dubai UAE</p>
                </div>
        </div>
    )
}

export default JoinUs
