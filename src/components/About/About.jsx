import React from 'react'
import AboutBg from '../../assets/aboutBg.jpg'
import styles from './About.module.css'

const About = () => {
  return (
    <div className={styles.AboutContainer} >

      <img
        alt="about background"
        src={AboutBg}
        placeholder="blur"
        quality={100}
        fill = 'true'
        sizes="100vw"
        style={{
          objectFit: 'cover',
          width : '100%',
          height : '100vh'
        }}
      />

      <div className={styles.aboutDescriptionBox} >
        <p className={ styles.aboutHeading} data-aos="fade-down">About Us</p>
        <p className={ styles.aboutHelper} data-aos="fade-left" >Powering Efficiency in Intraday Power Markets</p>
        <p className={ styles.aboutDescription} data-aos="fade-right">
          Life is all about finding the right balance and we believe that balance is achieved only when it is challenged.
          Here at Balance, we trade electricity to match supply with demand. No fuss,
          just the essentials. Our mission is clear: optimize energy flows for a stable grid.
          Guided by innovative strategies and technical solutions, we empower traders to navigate energy dynamics with finesse.
        </p>
      </div>
      <div className={styles.learnOverlay}>
        <p className={ styles.learnMore}  >
          Learn More...
        </p>
      </div>


    </div>
  )
}

export default About
