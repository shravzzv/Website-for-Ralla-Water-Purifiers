import '../styles/Service.css'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function Service() {
  return (
    <>
      <Navbar />
      <div className='service'>
        <div>
          <p className='heading'>Water purifier installation.</p>
          <p className='text'>
            We offer professional installation of water purifiers in your home
            or office.
          </p>
        </div>

        <div>
          <p className='heading'>Annual maintainence contract (AMC)</p>
          <p className='text'>
            Ensure the optimum performance for you water purifier with our
            annual maintainence contract.
          </p>
        </div>

        <div>
          <p className='heading'>Filter replacement</p>
          <p className='text'>
            Keep your water purifier working effectively by replacing filters
            regularly.
          </p>
        </div>

        <div>
          <p className='heading'>Water quality testing</p>
          <p className='text'>
            We provide water quality testing services to ensure the purity of
            your drinking water.
          </p>
        </div>

        <div>
          <p className='heading'>Product demonstrations</p>
          <p className='text'>
            Get a demonstration of our water purifier products to understand
            their features and benefits.
          </p>
        </div>
      </div>
      <Footer />
    </>
  )
}
