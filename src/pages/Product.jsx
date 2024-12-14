import '../styles/Product.css'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function Product() {
  return (
    <>
      <Navbar />
      <div className='product'>
        <div className='item'>
          <img src='/product1.jpeg' alt='product 1' />
          <p>
            Reverse Osmosis (RO) + Ultra Filtration (UF)+ Minerals (Ca, Mg,
            Copper)
          </p>
        </div>

        <div className='item'>
          <img src='/product2.jpeg' alt='product 2' />
          <p>Only Reverse Osmosis (RO)</p>
        </div>

        <div className='item'>
          <img src='/product3.jpeg' alt='product 3' />
          <p>
            Green Purifier: Ultraviolet (UV) + Ultra Filtration (UF) + Minerals
            (Ca, Mg, Copper)
          </p>
        </div>

        <div className='item'>
          <img src='/product4.jpeg' alt='product 4' />
          <p>
            Reverse Osmosis (RO) + Ultraviolet (UV)+ Ultra Filtration (UF)+
            Minerals (Ca, Mg, Copper)
          </p>
        </div>
      </div>
      <Footer />
    </>
  )
}
