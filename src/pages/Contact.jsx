import '../styles/Contact.css'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <Navbar />
      <div className='contact'>
        <form onSubmit={handleSubmit}>
          <div className='formControl'>
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              name='name'
              id='name'
              placeholder='John Doe'
              required
              minLength={3}
            />
          </div>

          <div className='formControl'>
            <label htmlFor='mobileNumber'>Mobile Number</label>
            <input
              type='tel'
              name='mobileNumber'
              id='mobileNumber'
              placeholder='9012345678'
              required
            />
          </div>

          <div className='formControl'>
            <label htmlFor='message'>Message</label>
            <textarea
              name='message'
              id='message'
              placeholder='lorem ipsum dolor sit amet'
              rows={5}
              required
            ></textarea>
          </div>

          <button type='submit'>Submit</button>
        </form>
      </div>
      <Footer />
    </>
  )
}
