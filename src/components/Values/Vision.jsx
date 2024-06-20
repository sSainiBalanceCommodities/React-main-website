import React from 'react'
import values from '../../assets/Values.jpg'
import styles from './Values.module.css'
import { Image } from '@mantine/core'
import ArrowDown from '../../assets/icons/ArrowDown'

const Vision = () => {
    return (
        <div className={styles.valuesContainer} >
            <div className={styles.valuesBox} >
                <div className={styles.valueTexBox} >
                    <p className={styles.valueHaeder}  >Our Vision</p>
                    <p className={styles.valueDescription} >
                        We envision a future where the ebb and flow of energy demand and supply are harmonized through precise trading strategies, leading to a sustainable and resilient grid.
                        Our vision is to be the driving force behind the seamless integration of renewable energy sources and traditional power generation within the intraday power markets.
                    </p>
                    <p className={styles.valuesNext} >
                        <ArrowDown height={36} width={36} fill='#ffffff' />
                    </p>
                </div>
                <div className={styles.valueImageBox} >
                    <div className={styles.valueImage} >
                        <Image
                            radius="md"
                            w="auto"
                            src={values}
                            style={{
                                objectFit : 'cover',
                                width : '100%',
                                height : '100%'
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Vision
