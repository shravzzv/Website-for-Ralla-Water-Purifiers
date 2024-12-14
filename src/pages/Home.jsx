import '../styles/Home.css'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <>
      <Navbar />
      <div className='home'>
        <section className='hero'>
          <div className='imageContainer'>
            <img src='/hero.jpg' alt='people walking with water buckets' />
          </div>

          <h1>Innovations that resolve water problems.</h1>
        </section>

        <section>
          <h2>About us</h2>
          <p>
            Ralla Water purifiers are devices that remove harmful impurities and
            contaminants from water to make it safe for drinking. They come in
            various technologies, including:
          </p>
          <ol>
            <li>Only Reverse Osmosis (RO),</li>
            <li>
              Green Purifier: Ultraviolet (UV) + Ultra Filtration (UF) +
              Minerals (Ca, Mg, Copper)
            </li>
            <li>
              Reverse Osmosis (RO) + Ultraviolet (UV)+ Minerals (Ca, Mg, Copper)
            </li>
            <li>
              Reverse Osmosis (RO) + Ultra Filtration (UF)+ Minerals (Ca, Mg,
              Copper)
            </li>
            <li>
              Reverse Osmosis (RO) + Ultraviolet (UV)+ Ultra Filtration (UF)+
              Minerals (Ca, Mg, Copper)
            </li>
          </ol>
          <p>
            Along with the MTDS feature with respective to the customers input
            water source availability. Benefits include improved taste, removal
            of harmful substances, and environmental friendliness. Consider
            water quality, usage, maintenance, and cost when choosing a
            purifier. Installation and regular maintenance are essential for
            optimal performance. Overall, Water purifiers provides safe and
            clean drinking water, promoting better health and well-being. Water
            quality: Consider the source of your water and the contaminants it
            may contain to choose the appropriate type of water purifier.
          </p>
        </section>

        <section className='showcase'>
          <div>
            <img
              src='/waterPurifier1.jpg'
              alt='water purification technology'
            />
            <p>This purifier will able to work without electricity</p>
          </div>
          <div>
            <img
              src='/waterPurifier2.jpg'
              alt='water purification technology'
            />
            <p>
              Hot & Cold water purifier which enables the customers to do self
              services without the need of technician.
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
