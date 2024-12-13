import '../styles/Home.css'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <>
      <Navbar />
      <div className='home'>
        <div className='hero'>
          <div className='imageContainer'>
            <img
              src='https://www.ralla.in/static/media/people_walking.5f04f66c821ac1286b43.jpg'
              alt='people walking with water buckets'
            />
          </div>

          <h1>Innovations that resolve water problems.</h1>
        </div>
      </div>
      <Footer />
    </>
  )
}
