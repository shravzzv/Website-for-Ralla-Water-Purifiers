import '../styles/Footer.css'

export default function Footer() {
  return (
    <footer>
      <div className='left'>
        <p className='heading'>About us</p>
        <p>
          Ralla Water purifiers are mainly helping the people to provide pure &
          safe drinking water with innovative products.
        </p>

        <div className='links'>
          <a
            href='https://www.facebook.com/profile.php?id=61558139753237'
            target='_blank'
          >
            <img src='/facebook.svg' alt='facebook' />
          </a>

          <a
            href='https://www.instagram.com/ralla_waterpurifiers/?next=%2F'
            target='_blank'
          >
            <img src='/instagram.svg' alt='instagram' />
          </a>

          <a href='https://x.com/RallaWater' target='_blank'>
            <img src='/twitter.svg' alt='twitter' />
          </a>

          <a
            href='https://www.linkedin.com/company/101745338/admin/page-posts/published/'
            target='_blank'
          >
            <img src='/linkedin.svg' alt='linkedIn' />
          </a>
        </div>
      </div>

      <div className='center'>
        <p className='heading'>Services</p>
        <ul>
          <li>Product Demo</li>
          <li>Installation</li>
          <li>Customer Service</li>
        </ul>
      </div>

      <div className='right'>
        <p className='heading'>Office Address</p>

        <p>
          6-3-630/B, Anand Nagar Colony Oppo. Manoj Apartments Khairatabad,
          Hyderabad 500004
        </p>

        <p className='phone'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            height='24px'
            viewBox='0 -960 960 960'
            width='24px'
            fill='#000000'
          >
            <path d='M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z' />
          </svg>
          <span>+91-6303010725</span>
        </p>

        <p className='mail'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            height='24px'
            viewBox='0 -960 960 960'
            width='24px'
          >
            <path d='M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm640-480L501-453q-5 3-10.5 4.5T480-447q-5 0-10.5-1.5T459-453L160-640v400h640v-400ZM480-520l320-200H160l320 200ZM160-640v10-59 1-32 32-.5 58.5-10 400-400Z' />
          </svg>
          <span>support@ralla.in</span>
        </p>
      </div>
    </footer>
  )
}
