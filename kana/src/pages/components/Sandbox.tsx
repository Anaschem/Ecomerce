
import { FaPhone, FaInstagram, FaEnvelope, FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer >
      <div bgColor='light' className='text-center text-lg-start text-muted'>
        <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
          <div className='me-5 d-none d-lg-block'>
            <span>Connect with us on social media !</span>
          </div>
          <br></br>
          <div>
            <a href='#' className='me-4 text-reset'>
                <FaInstagram />
                </a>
            </div>
            <br></br>
            <div>
            <a href='#' className='me-4 text-reset'>
              <FaFacebook />
              </a>
              </div>
              <br></br>
              <div>
            <a href='#' className='me-4 text-reset'>
              <FaTwitter />
            </a>
            </div>
            <br></br>
            <div>
            <a href='#' className='me-4 text-reset'>
              <FaYoutube />
            </a>
          </div>
        </section>

        <section className=''>
          <div className='text-center text-md-start mt-5'>
            <div className='mt-3'>
              <div md="3" lg="4" xl="3" className='mx-auto mb-4'>
                <h3 className='text-uppercase fw-bold mb-4'>
                  KANA
                </h3>
              </div>
              <div md="3" lg="2" xl="2" className='mx-auto mb-4'>
                <h4 className='text-uppercase fw-bold mb-4'>Useful links</h4>
                <p>
                  <a href='#!' className='text-reset'>
                    About us
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    Settings
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    Orders
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    Help
                  </a>
                </p>
              </div>

              <div md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                <h2 className='text-uppercase fw-bold mb-4'>Contact</h2>
                <p>
                  Ivry-sur-seine, 94205 France
                </p>
                <p>
                  <FaEnvelope />   Officiellekana@gmail.com
              </p>
              <p>
                <FaPhone /> +33 659203793
              </p>
              <br></br>
            </div>
          </div>
        </div>
      </section>
      {`Copyright © KANA ${year}`}
    </div>
    </footer >
  );
}
