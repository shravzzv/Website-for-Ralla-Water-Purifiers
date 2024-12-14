import '../styles/About.css'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function About() {
  return (
    <>
      <Navbar />
      <div className='about'>
        <h1>About us</h1>
        <p>
          Ralla Water purifiers are mainly helping the people to provide pure &
          safe drinking water with the innovative products.
        </p>
        <p>
          We are on a Mission to change the lives of the people, build a healthy
          family and impact the nation by providing the pure and safe drinking
          water. Ralla was started to solve the water problems in the world with
          the innovative & sustainable product, We understand the critical
          importance of addressing water problems facing communities worldwide.
          Access to clean, safe, and reliable water is a fundamental human
          right, yet millions of people lack this basic necessity. Our mission
          is to tackle these challenges head-on by providing innovative
          solutions to purify and conserve water.
        </p>
        <p>
          With a deep commitment to sustainability and environmental
          stewardship, we develop cutting-edge technologies that not only treat
          water but also promote its efficient use and conservation. Through our
          work, we aim to make a meaningful impact on water-stressed regions,
          improving health, enhancing ecosystems, and empowering communities.
          Join us in our mission to create a more sustainable and water-secure
          future for all.
        </p>

        <h2>Meet our team</h2>
        <div className='team'>
          <div className='member'>
            <img src='/manoj.jpeg' alt='A profile picture of Manoj' />
            <p className='name'>Manoj Reddy Ralla</p>
            <p className='title'>Co-Founder</p>
            <p>
              Manoj is an experienced Mechanical engineer with expertise in
              Water purifiers development.
            </p>
          </div>

          <div className='member'>
            <img src='/vinay.jpeg' alt='A profile picture of Vinay' />
            <p className='name'>Vinay Kumar B</p>
            <p className='title'>Co-Founder</p>
            <p>
              Vinay is a talented BCA (Bachelor of Computer Applications) with a
              passion for admistrating organizaion with 7 year Experience In IT
              System Administration/Network Engineer.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
