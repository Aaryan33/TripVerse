import React from 'react'
import Slider from 'react-slick'
import ava01 from "../../assets/images/ava-1.jpg"
import ava02 from "../../assets/images/ava-2.jpg"
import ava03 from "../../assets/images/ava-3.jpg"

const Testimonials = () => {

    const settings = {
        dots:true,
        infinite:true,
        autoplay:true,
        speed:1000,
        swipeToSlide:true,
        autoplaySpeed:2000,
        slidesToShow:3,

        responsive:[
            {
                breakpoint: 992,
                settings:{
                    slidesToShow:2,
                    slideToScroll:1,
                    dots:true,
                    infinite:true,
                },
            },
            {
                breakpoint:576,
                settings: {
                    slidesToShow:1,
                    slideToScroll:2,
                },
            }
        ]
    }

  return (
    <Slider {...settings}>
        <div className="testimonials py-4 px-3">
            <p>The itinerary planned by TripVerse was well-thought-out and balanced. 
                I appreciated their attention to detail and how they incorporated both popular and offbeat attractions in my tour of France. 
                My only suggestion would be to include more local dining options in future packages!
            </p>

            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava01} className="w-25 h-25 rounded-2" alt="" />
                <div>
                    <h6 className="mb-0 mt-3">Jack Patel</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>
        <div className="testimonials py-4 px-3">
            <p>I recently traveled with TripVerse to Thailand, and it was nothing short of magical! 
                The organization was impeccable, and the local guides were incredibly knowledgeable. 
                Highly recommend this service for anyone looking for authentic travel experiences!
            </p>

            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava02} className="w-25 h-25 rounded-2" alt="" />
                <div>
                    <h6 className="mb-0 mt-3">Emily Patel</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>
        <div className="testimonials py-4 px-3">
            <p>The experiences offered were decent, but I expected more from the luxury package I purchased. 
                Some of the accommodations did not meet my expectations based on the website's descriptions. 
                While I had a good time overall, I feel the value could be enhanced.
            </p>

            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava03} className="w-25 h-25 rounded-2" alt="" />
                <div>
                    <h6 className="mb-0 mt-3">Steven Starc</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>
        <div className="testimonials py-4 px-3">
            <p>I had an incredible experience booking my America trip with TripVerse. 
                The team's attention to detail was fantastic. 
                From hiking in New York to exploring the Amazon rainforest, everything was superbly arranged. 
                The customer support team was helpful at every step. Highly satisfied!
            </p>

            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava03} className="w-25 h-25 rounded-2" alt="" />
                <div>
                    <h6 className="mb-0 mt-3">Stefan Hawking</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>
        <div className="testimonials py-4 px-3">
            <p>TripVerse helped us organize a trip to Tokyo, and we loved every moment of it! 
                The itinerary was packed with beautiful destinations and cultural experiences. 
                The only downside was that some days felt a bit rushed. 
                Overall, an excellent experience that I would recommend to my friends.
            </p>

            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava03} className="w-25 h-25 rounded-2" alt="" />
                <div>
                    <h6 className="mb-0 mt-3">Jason Sharma</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>
    </Slider>
  )
}

export default Testimonials