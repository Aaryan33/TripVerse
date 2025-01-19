import React from 'react'
import "../styles/home.css"
import { Container, Row, Col } from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpg';
import heroImg02 from '../assets/images/hero-img02.jpg';
import heroVideo from '../assets/images/hero-video.mp4';
import worldImg from '../assets/images/world.png';
import Subtitle from '../shared/Subtitle';
import experienceImage from "../assets/images/experience.png"

import SearchBar from '../shared/SearchBar';
import ServiceList from '../services/ServiceList';
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList';
import MasonryImagesGallery from '../components/image-gallery/MasonryImagesGallery';
import Testimonials from '../components/Testimonials/Testimonials'
import Newsletter from '../shared/Newsletter';
// import FeaturedBlogsList from '../components/FeaturedBlogs/FeaturedBlogsList'
import Contact from './Contact'

const Home = () => {
    return (
        <>

        {/* ======= Hero section start ====== */}
        <section>
          <Container>
            <Row>
              <Col lg="6">
                <div className="hero__content">
                  <div className="hero__subtitle d-flex align-items-center">
                    <Subtitle subtitle={"Know Before You Go"}/>
                    <img src={worldImg} alt="" />
                  </div>
                  <h1>
                    Traveling Opens The Door To Creating{" "}
                    <span className="highlight">Memories</span>
                  </h1>
                  <p>
                  Welcome to TripVerse, your ultimate guide to exploring the globe! 
                  Whether you're seeking thrilling adventures, relaxing getaways, or cultural experiences, we have everything you need to plan your perfect trip. 
                  Discover breathtaking destinations and insightful travel tips, all designed to inspire your wanderlust. 
                  </p>
                </div>
              </Col>
              <Col lg="2">
                <div className="hero__img-box">
                  <img src={heroImg} alt="" />
                </div>
              </Col>
              <Col lg="2">
                <div className="hero__img-box hero__video-box mt-4">
                  <video src={heroVideo} alt="" autoPlay loop muted />
                </div>
              </Col>
              <Col lg="2">
                <div className="hero__img-box mt-5">
                  <img src={heroImg02} alt="" />
                </div>
              </Col>
              <SearchBar/>
            </Row>
          </Container>
        </section>

        <section>
          <Container>
            <Row>
              <Col lg="12">
                <h5 className="services__subtitle">What We Serve</h5>
                <h2 className="services__title">We Offer Our Best Services</h2>
              </Col>
              </Row>
              <ServiceList/>
          </Container>
        </section>

        {/* ====== Featured tour section ====== */}
    
        <section>
          <Container>
            <Row>
              <Col lg="12" className='mb-5'>
                <Subtitle subtitle={"Explore"}/>
                <h2 className="featured__tour-title">Our Featured Tours</h2>
              </Col>
              <FeaturedTourList/>
            </Row>
          </Container>
        </section>
        
        {/* ====== Experience section start ====== */}
        
        <section>
          <Container>
            <Row>
              <Col lg="6">
                <div className="experience__content">
                  <Subtitle subtitle={"Experience"}/>
                  <h2>Will our all experience <br /> we will serve you</h2>
                  <p>At TripVerse, we believe that every journey should be an unforgettable adventure.
                    Our curated experiences allow you to dive deep into the heart of each destination. 
                    {/* From guided city tours to immersive cultural workshops, we offer exceptional travel experiences that cater to every type of traveler. */}
                  </p>
                </div>
    
                <div className="couter__wrapper d-flex align-items-center gap-5">
                  <div className="counter__box">
                    <span>3k+</span>
                    <h6>Successful Trips</h6>
                  </div>
                  <div className="counter__box">
                    <span>1k+</span>
                    <h6>Regular Clients</h6>
                  </div>
                  <div className="counter__box">
                    <span>4+</span>
                    <h6>Years Experience</h6>
                  </div>
                </div>
    
              </Col>
              <Col lg="6">
                <div className="experience__img">
                  <img src={experienceImage} alt="" />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        
        {/* ====== Gallery section start ====== */}
        
        <section>
          <Container>
            <Row>
              <Col lg="12">
                <Subtitle subtitle={"Gallery"}/>
                <h2 className="gallery__title">
                  Visit Our Customers Tour Gallery
                </h2>
              </Col>
              <Col lg="12">
                <MasonryImagesGallery/>
              </Col>
            </Row>
          </Container>
        </section>

        {/* ====== Featured blog start ======  */}

        {/* <section>
          <Container>
            <div className="title">
              <Subtitle subtitle={"Featured Blogs"} />
            </div>
            <Row>
          <FeaturedBlogsList lg={4} md={6} sm={6}/>
            </Row>
          </Container>
        </section> */}

        {/* ====== Testimonial service start ======  */}

        <section>
          <Container>
            <Row>
              <Col lg="12">
                <Subtitle subtitle={"Testimonial"}/>
                <h2 className="testmonials__title">What our Customers Say about us</h2>
              </Col>
              <Testimonials/>
            </Row>
          </Container>
        </section>
        <Contact/>
        <Newsletter/>
        </>
      )
};

export default Home