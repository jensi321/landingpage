import { Rate } from 'antd'
import React, { useEffect, useState } from 'react'

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Client = () => {

    const [scrollTop, setScrollTop] = useState(0);
    const [addClass, setAddClass] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentscroll = window.scrollY
            setScrollTop(currentscroll);
            setAddClass(currentscroll > 800)
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollTop]);

    const client = [

        {
            img: "assets/img/client1.png",
            name: "Regina Miles",
            rating: "4",
            review: "Gigwork helps you see how many more days you need to work to reach your financial goal for the month and year.",
            role: "Designer",
        },
        {
            img: "assets/img/client2.png",
            name: "Regina Miles",
            rating: "4",
            review: "Gigwork helps you see how many more days you need to work to reach your financial goal for the month and year.",
            role: "Designer",
        },
        {
            img: "assets/img/client3.png",
            name: "Regina Miles",
            rating: "4",
            review: "Gigwork helps you see how many more days you need to work to reach your financial goal for the month and year.",
            role: "Designer",
        },
    ]

    const owlslider = {
        loop: true,
        margin: 10,
        nav: false,
        dots: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 2,
            },
            767: {
                items: 3,
            }
        }
    }


    return (
        <>
            <div className="client-outer">
                <div className="container">
                    <div className="client-inner">
                        <div className="heading">
                            <h4>
                                What our client says
                            </h4>
                            <p>Our utmost goal is to provide higher level of client satisfaction with great customer service. We would love for you to be part of our community.</p>
                        </div>

                        <div className={`items  ${addClass ? ' animate__animated animate__zoomIn' : ''}`}>
                            <OwlCarousel className='owl-theme' {...owlslider}>

                                {client.map((i) => {
                                    return (
                                        <div className='item'>
                                            <div className="item-inner">
                                                <div className="rating-star">
                                                    <Rate disabled defaultValue={i.rating} />
                                                </div>
                                                <p className='review'>{i.review}</p>

                                                <div className="client-info">
                                                    <div className="img-content">
                                                        <img src={i.img} alt={i.name} />
                                                    </div>
                                                    <div className="name-content">
                                                        <h5>{i.name}</h5>
                                                        <p className='role'>{i.role}</p>
                                                    </div>

                                                </div>

                                            </div>
                                        </div>
                                    )
                                })}
                            </OwlCarousel>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}

export default Client