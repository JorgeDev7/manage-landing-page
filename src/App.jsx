import { useState } from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination'

import Error from "./components/Error";

// Images
import images from "./assets/images"

const { logo, ham, close, bgTablePat, intro, avatarAnisha, avatarAli, avatarRichard, avatarShanai } = images

function App() {

  const [active, setActive] = useState(false);
  const [valid, setValid] = useState('');
  const [error, setError] = useState(false);

  const handleActive = () => {
    setActive(!active);
  }

  if (active) {
    document.querySelector('html').classList.add('overflow-y-h');
  } else {
    document.querySelector('html').classList.remove('overflow-y-h');
  }

  const handleSubmit = e => {
    e.preventDefault();

    if (valid.trim() === '') {
      setError(true);
      return;
    }
    setError(false);
    setValid('');
  }

  const handleChange = e => {
    setValid(e.target.value);
    if (e.target.id === 'inbox' && !validarEmail(e.target.value)) {
      setError(true);
      return;
    }
    setError(false);
  }

  function validarEmail(email) {
    const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    const res = regex.test(email);

    return res;
  }

  return (
    <>
      <div className="ov">
        <img
          src={bgTablePat}
          alt="img bg-tablet-pattern"
          className="bg-tablet"
        />
        <img
          src={bgTablePat}
          alt="img bg-tablet-pattern"
          className="bg-tablet-sm"
        />
        <header className="header container">
          <div className="header__img">
            <img src={logo} alt="logo manage" />
          </div>
          <div className="header__nav">
            <div>
              <img
                src={active ? close : ham}
                alt="icon ham menu"
                className="header__ham"
                onClick={handleActive}
              />
            </div>

            <div className={`overlay ${active ? 'd-block' : ''}`}>
              <nav className="nav">
                <a href="#" className="nav__item">Pricing</a>
                <a href="#" className="nav__item">Product</a>
                <a href="#" className="nav__item">About Us</a>
                <a href="#" className="nav__item">Careers</a>
                <a href="#" className="nav__item">Community</a>
              </nav>
            </div>

            <a href="#" className="nav__item nav__item--desk">Get Started</a>
          </div>
        </header>

        <section className="hero container">
          <div className="hero__img">
            <img
              src={intro}
              alt="illustration intro"
              className="w-100"
            />
          </div>
          <div className="hero__contenido">
            <h2 className="hero__title">Bring everyone together to build better products.</h2>
            <p className="hero__text">Manage makes it simple for software teams to plan day-to-day
              tasks while keeping the larger team goals in view.</p>
            <button type="button" className="hero__btn">Get Started</button>
          </div>
        </section>

        <main className="main container">
          <div className="head">
            <h1 className="head__heading">What’s different about Manage?</h1>
            <p className="head__text">Manage provides all the functionality your team needs, without
              the complexity. Our software is tailor-made for modern digital
              product teams.</p>
          </div>
          <div className="body">
            <div className="body__section">
              <div className="body__head">
                <p className="body__number">01</p>
                <h3 className="body__title">Track company-wide progress</h3>
              </div>
              <p className="body__text">See how your day-to-day tasks fit into the wider vision. Go from
                tracking progress at the milestone level all the way done to the
                smallest of details. Never lose sight of the bigger picture again.</p>
            </div>
            <div className="body__section">
              <div className="body__head">
                <p className="body__number">02</p>
                <h3 className="body__title">Advanced built-in reports</h3>
              </div>
              <p className="body__text">Set internal delivery estimates and track progress toward company
                goals. Our customisable dashboard helps you build out the reports
                you need to keep key stakeholders informed.</p>
            </div>
            <div className="body__section">
              <div className="body__head">
                <p className="body__number">03</p>
                <h3 className="body__title">Everything you need in one place</h3>
              </div>
              <p className="body__text">Stop jumping from one service to another to communicate, store files,
                track tasks and share documents. Manage offers an all-in-one team
                productivity solution.</p>
            </div>
          </div>
        </main>

        <section className="testimonials container">
          <h2 className="testimonials__title">What they’ve said</h2>

          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="swiper"
            spaceBetween={50}
          >
            <SwiperSlide className="swiper__slide">
              <div className="testimonial">
                <img
                  src={avatarAnisha}
                  alt="anisha li"
                  className="testimonial__img"
                />
                <h4 className="testimonial__name">Anisha Li</h4>
                <p className="testimonial__text">“Manage has supercharged our team’s workflow. The ability to maintain
                  visibility on larger milestones at all times keeps everyone motivated.”</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper__slide">
              <div className="testimonial">
                <img
                  src={avatarAli}
                  alt="Ali Bravo"
                  className="testimonial__img"
                />
                <h4 className="testimonial__name">Ali Bravo</h4>
                <p className="testimonial__text">“We have been able to cancel so many other subscriptions since using
                  Manage. There is no more cross-channel confusion and everyone is much
                  more focused.”</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper__slide">
              <div className="testimonial">
                <img
                  src={avatarRichard}
                  alt="Richard Watts"
                  className="testimonial__img"
                />
                <h4 className="testimonial__name">Richard Watts</h4>
                <p className="testimonial__text">“Manage allows us to provide structure and process. It keeps us organized
                  and focused. I can’t stop recommending them to everyone I talk to!”</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper__slide">
              <div className="testimonial">
                <img
                  src={avatarShanai}
                  alt="Shanai Gough"
                  className="testimonial__img"
                />
                <h4 className="testimonial__name">Shanai Gough</h4>
                <p className="testimonial__text">“Their software allows us to track, manage and collaborate on our projects
                  from anywhere. It keeps the whole team in-sync without being intrusive.”</p>
              </div>
            </SwiperSlide>
          </Swiper>

          <button type="button" className="testimonials__btn">Get Started</button>

        </section>

        <section className="simplify">
          <div className="container simplify__content">
            <h2 className="simplify__title">Simplify how your team works today.</h2>
            <button type="button" className="simplify__btn">Get Started</button>
          </div>
        </section>

        <footer className="footer">
          <div className="container footer__grid">
            <form
              className="footer__form"
              onSubmit={handleSubmit}
            >
              <div className="footer__campo">
                <input
                  type="email"
                  name="inbox"
                  id="inbox"
                  placeholder="Updates in your inbox…"
                  value={valid}
                  onChange={handleChange}
                  className={`footer__input 
                           ${error ? 'border-red' : ''}
                `}
                />
                {error ? (
                  <Error
                    msg='Please insert a valid email'
                  />
                ) : ''}
              </div>
              <button className="footer__btn" type="submit">Go</button>
            </form>
            <div className="footer__lists">
              <ul className="footer__list">
                <li className="footer__item">Home</li>
                <li className="footer__item">Pricing</li>
                <li className="footer__item">Products</li>
                <li className="footer__item">About Us</li>
              </ul>
              <ul className="footer__list">
                <li className="footer__item">Careers</li>
                <li className="footer__item">Community</li>
                <li className="footer__item">Privacy Policy</li>
              </ul>
            </div>
            <div className="footer__social">
              <i className='footer__media-icon bx bxl-facebook-square' ></i>
              <i className='footer__media-icon bx bxl-youtube' ></i>
              <i className='footer__media-icon bx bxl-twitter' ></i>
              <i className='footer__media-icon bx bxl-pinterest' ></i>
              <i className='footer__media-icon bx bxl-instagram' ></i>
            </div>

            <div className="footer__logo">
              <svg xmlns="http://www.w3.org/2000/svg" width="146" height="24"><g fill="none" fillRule="evenodd"><path fill="hsl(0, 0%, 98%)" fillRule="nonzero" d="M40.014 16.809V8.553c0-1.577.366-2.82 1.098-3.73.733-.91 1.65-1.365 2.75-1.365 2.158 0 3.237 1.577 3.237 4.731v8.62h3.782v-9.58c0-2.415-.5-4.22-1.503-5.417C48.376.615 46.945.017 45.084.017c-1.222 0-2.34.234-3.352.703a6.833 6.833 0 00-2.56 2.043h-.066C38.126.932 36.486.017 34.184.017c-.969 0-1.902.217-2.799.653a6.976 6.976 0 00-2.353 1.878h-.05V.265H25.2v16.527h3.782V8.553c0-1.577.372-2.82 1.115-3.73.743-.91 1.693-1.365 2.849-1.365 2.19 0 3.286 1.577 3.286 4.731v8.62h3.782zm21.101.248c2.246 0 3.997-.827 5.252-2.482h.05v2.217h3.616V.265h-3.782V2.25h-.066C64.93.761 63.23.017 61.082.017a7.76 7.76 0 00-5.681 2.415c-.705.75-1.26 1.66-1.668 2.73a9.589 9.589 0 00-.611 3.44c0 1.258.203 2.416.61 3.475.408 1.059.964 1.952 1.669 2.68a7.348 7.348 0 002.535 1.696 8.325 8.325 0 003.18.604zm.595-3.441c-1.399 0-2.538-.466-3.419-1.398-.88-.932-1.321-2.132-1.321-3.599 0-1.555.454-2.804 1.362-3.747.909-.943 2.04-1.414 3.394-1.414 1.343 0 2.458.493 3.345 1.48.886.988 1.33 2.215 1.33 3.681 0 1.467-.455 2.667-1.363 3.599-.909.932-2.018 1.398-3.328 1.398zm27.112 3.193V7.064c0-2.393-.536-4.166-1.61-5.319C86.14.593 84.655.017 82.762.017a7.373 7.373 0 00-3.056.645 6.958 6.958 0 00-2.477 1.87h-.05V.264h-3.782v16.527h3.782V8.487c0-1.588.388-2.823 1.164-3.706.777-.882 1.814-1.323 3.113-1.323.595 0 1.104.077 1.528.231.424.155.796.406 1.115.753.32.348.556.819.71 1.415.154.595.231 1.323.231 2.183v8.769h3.782zm10.218.248c2.246 0 3.996-.827 5.252-2.482h.05v2.217h3.616V.265h-3.782V2.25h-.066C102.855.761 101.154.017 99.007.017a7.76 7.76 0 00-5.682 2.415c-.704.75-1.26 1.66-1.668 2.73a9.589 9.589 0 00-.61 3.44c0 1.258.203 2.416.61 3.475.408 1.059.964 1.952 1.668 2.68a7.348 7.348 0 002.536 1.696 8.325 8.325 0 003.179.604zm.594-3.441c-1.398 0-2.538-.466-3.418-1.398-.881-.932-1.322-2.132-1.322-3.599 0-1.555.455-2.804 1.363-3.747.908-.943 2.04-1.414 3.394-1.414 1.343 0 2.458.493 3.344 1.48.886.988 1.33 2.215 1.33 3.681 0 1.467-.455 2.667-1.363 3.599-.908.932-2.018 1.398-3.328 1.398zm19.07 10.125c1.2 0 2.274-.14 3.22-.422.947-.281 1.743-.673 2.387-1.175a6.385 6.385 0 001.602-1.844 8.14 8.14 0 00.916-2.383c.188-.86.281-1.803.281-2.829V.265h-3.782v1.737h-.066a7.059 7.059 0 00-2.353-1.49A7.62 7.62 0 00118.142 0c-1.508 0-2.862.358-4.062 1.075-1.2.717-2.134 1.713-2.8 2.987-.666 1.273-.999 2.705-.999 4.293 0 1.61.35 3.038 1.049 4.285.699 1.246 1.66 2.203 2.882 2.87 1.222.667 2.598 1.001 4.129 1.001 2.047 0 3.716-.673 5.004-2.018h.066v1.753c0 1.17-.43 2.14-1.288 2.912-.86.772-2.07 1.158-3.634 1.158-1.068 0-2.006-.132-2.816-.397-.809-.265-1.742-.678-2.799-1.24l-.892 3.341c.925.552 1.966.976 3.122 1.274 1.156.298 2.356.447 3.6.447zm.132-10.72c-1.365 0-2.491-.434-3.377-1.3-.887-.865-1.33-2.026-1.33-3.482 0-1.4.435-2.542 1.305-3.425.87-.882 2.004-1.323 3.402-1.323 1.332 0 2.442.435 3.328 1.307.886.871 1.33 2.002 1.33 3.391 0 1.401-.433 2.556-1.297 3.466-.864.91-1.985 1.365-3.361 1.365zm19.086 4.036c1.542 0 2.899-.281 4.071-.844 1.173-.562 2.133-1.323 2.882-2.283l-2.642-2.266c-1.035 1.301-2.406 1.952-4.113 1.952-1.21 0-2.237-.337-3.08-1.01-.842-.672-1.384-1.593-1.627-2.762h12.024c.066-.397.099-.9.099-1.506 0-1.599-.325-3.027-.975-4.285a7.198 7.198 0 00-2.807-2.961c-1.222-.717-2.632-1.075-4.228-1.075a8.191 8.191 0 00-3.188.62c-.99.414-1.844.99-2.56 1.729-.715.739-1.277 1.638-1.684 2.696-.407 1.06-.611 2.212-.611 3.458 0 1.688.369 3.185 1.106 4.492.738 1.307 1.746 2.308 3.023 3.003 1.277.695 2.714 1.042 4.31 1.042zm3.815-10.274h-8.257c.264-1.059.776-1.878 1.535-2.457.76-.579 1.663-.868 2.709-.868 1.057 0 1.93.298 2.618.893.688.596 1.153 1.406 1.395 2.432z" /><g fill="#F3603C"><path d="M2.786 10.286c1.538 0 2.785 1.279 2.785 2.857C5.571 14.72 4.324 16 2.786 16 1.247 16 0 14.72 0 13.143c0-1.578 1.247-2.857 2.786-2.857zM2.786 0C4.324 0 5.57 1.28 5.57 2.857c0 1.578-1.247 2.857-2.785 2.857C1.247 5.714 0 4.435 0 2.857 0 1.28 1.247 0 2.786 0zm10.028 0C14.353 0 15.6 1.28 15.6 2.857c0 1.578-1.247 2.857-2.786 2.857-1.538 0-2.785-1.279-2.785-2.857C10.029 1.28 11.276 0 12.814 0z" /><ellipse cx="12.814" cy="13.257" opacity=".5" rx="2.786" ry="2.857" /></g></g></svg>
            </div>

            <p className="footer__copy">Copyright 2020. All Rights Reserved</p>
          </div>

        </footer>
      </div>
    </>
  )
}

export default App
