import styles from "./Navbar.module.css"
import logo from '../../assets/logo.png'
import { useLocation, useNavigate } from "react-router-dom"



const Navbar = () => {
//   const { height, width } = useViewportSize();
//   const [opened, { toggle }] = useDisclosure();
  const navigate = useNavigate()
  const {pathname} = useLocation()
  console.log(pathname)

  return (
    <nav className={styles.navbarContainer} >
      <img src={logo} alt="logo" width={100} height={100} />
      <div className={styles.navLinks} >
        {/* {
          width < 1100 ? 'v' : <> */}

            <p>Home</p>
            <p>AboutUs</p>
            <p>Values</p>
            <p>Founder</p>
            <p onClick={()=>navigate('/join-us')} className={ pathname == '/join-us' ? `${styles.activeLink}` : ''} >Join Us</p>
          {/* </>
        } */}

      </div>
    </nav>
  )
}

export default Navbar
