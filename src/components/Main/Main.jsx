import React from 'react';
import styles from './Main.module.css'
import videos from '../../assets/bg-home-main.mp4'
import { useNavigate } from 'react-router-dom';


const Main = () => {
    const navigate = useNavigate()

    return (
        <div className={styles.dashboardContainer} >
            <video
                autoPlay
                preload="auto"
                muted
                loop
                className={styles.video}
            >
                <source src={videos} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className={styles.textOverlay}>
                <p className={styles.companySlogan} data-aos="fade-down">Balance is not something you find.</p>
                <p className={styles.companySlogan}  data-aos="fade-right">It's something you create.</p>
            </div>
            <div className={styles.learnOverlay}>
                <p className={styles.learnMore} onClick={()=>navigate('/dashboard')}  >
                    Learn More...
                </p>
            </div>
        </div>
    );
}

export default Main;
