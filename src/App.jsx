import { useEffect } from 'react'
import Routing from './routing'
import Aos from 'aos'
import 'aos/dist/aos.css'



function App() {


  useEffect(()=>{
    Aos.init({
      duration : 1000,
      easing :'ease',
      delay : 0,
      mirror : true
    })
  },[])

  return (
    <>
      <Routing />
    </>
  )
}

export default App
