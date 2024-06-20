import React from 'react'
import styles from './Values.module.css'
import ArrowDown from '../../assets/icons/ArrowDown'
import mission from '../../assets/mission-dam.jpg'


const Mission = () => {
    return (
        <div className={styles.valuesContainer} >
            <div className={styles.missionBox} >
                <div className={styles.missionImageBox} >
                    <div className={styles.missionImage} >
                        <img
                            alt="values image"
                            src={mission}
                            placeholder="blur"
                            quality={100}
                            fill = 'true'
                            sizes="100vw"
                            style={{
                                objectFit: 'cover',
                                width : '100%',
                                height : '100%'
                            }}
                        />
                    </div>
                </div>

                <div className={styles.missionTextBox} >
                    <div className={styles.missionTextInnerBox} >
                        <p className={styles.missionHaeder}  >Our Mission</p>
                        <p className={styles.missionDescription} >
                            We envision a future where the ebb and flow of energy demand and supply are harmonized through precise trading strategies,
                            leading to a sustainable and resilient grid. Our vision is to be the driving force behind the seamless integration of renewable energy
                            sources and traditional power generation within the intraday power markets.</p>
                        <p className={styles.missionNext} >
                            <ArrowDown height={36} width={36} fill='#ffffff' />

                        </p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Mission
