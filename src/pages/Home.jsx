import React from 'react'

import homesvg from "../assets/images/1svg.svg"
import png1 from '../assets/images/png1.png'
const Home = () => {
  return (
    <>
      <main>
        <section className='section-hero'>
          <div className='container grid grid-two-cols'>
            <div className="hero-content">
              <p>We are the World Best IT Company</p>
              <h1>Welcome to a uinque universe</h1>
              <p>
                Are you ready to take your business to the next level with
                cutting-edge IT solutions? Look no further! At Thapa Technical,
                we specialize in providing innovative IT services and solutions
                tailored to meet your unique needs.
              </p>
              <div className="btn btn-group">
                <a href="/contact">
                  <button className="btn secondary-btn">connect now</button>
                </a>
                <a href="/services">
                  <button className="btn secondary-btn">learn more</button>
                </a>
              </div>
            </div>
            <div className="hero-image">
              <img
                src="https://tabraiz06.github.io/demoportfolio/img/gif1.gif"
                alt="coding together"
                width="400"
                height="500"
              />
            </div>
          </div>
          
        </section>
        <section className='section-analytics'>
          <div className='container grid grid-cols-4'>
            <div className='div1'>
              <h2>50+</h2>
              <p>registered companies</p>

            </div>
            <div className='div1'>
              <h2>100,00+</h2>
              <p>Happy Clients</p>
            </div>
            <div className='div1'>
              <h2>500+</h2>
              <p>Well known Developers</p>
            </div>
            <div className='div1'>
              <h2>24/7</h2>
              <p>services</p>
            </div>
          </div>
        </section>
        <section className="section-hero">
        <div className="container grid grid-two-cols">
          {/* hero images  */}
          <div className="hero-image">
            <img
              src="https://cdn.dribbble.com/users/1124806/screenshots/4871258/ezgif.com-optimize.gif"
              alt="coding together"
              width="400"
              height="500"
            />
          </div>

          <div className="hero-content">
            <p>We are here to help you</p>
            <h1>Get Started Today</h1>
            <p>
              Ready to take the first step towards a more efficient and secure
              IT infrastructure? Contact us today for a free consultation and
              let's discuss how Thapa Technical can help your business thrive in
              the digital age.
            </p>
            <div className="btn btn-group">
              <a href="/contact">
                <button className="btn">connect now</button>
              </a>
              <a href="/services">
                <button className="btn secondary-btn">learn more</button>
              </a>
            </div>
          </div>
        </div>
      </section>
      </main>
    </>
  )
}

export default Home
