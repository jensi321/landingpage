import React, { useEffect, useState } from 'react'
import { FaFacebookF, FaTwitter } from 'react-icons/fa6'

const Footer = () => {
    const [scrollTop, setScrollTop] = useState(0);
    const [addClass, setAddClass] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentscroll = window.scrollY
            setScrollTop(currentscroll);
            setAddClass(currentscroll > 1100)
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollTop]);
    return (
        <footer>
            <div className="container">
                <div className="top">

                    <div className={`row ${addClass ? ' animate__animated animate__zoomIn' : ''}`}>
                        <div className=' col-md-3 col-sm-6 col-12 item'>
                            <h3 className='footer-logo'>GIGWORK</h3>
                            <p>Unlock Your Dream Job
                                Find Opportunities Effortlessly
                                with Our App!</p>
                        </div>
                        <div className="col-md-3 col-sm-6 col-12 item">
                            <h3 className="title">Get in Touch</h3>
                            <p>+65 9111 2222</p>
                            <p>help@gigwork.sg</p>

                        </div>
                        <div className="col-md-3 col-sm-6 col-12 item">
                            <h3 className="title">Our social media</h3>
                            <div className="social-media">
                                <a href="/"><FaTwitter /></a>
                                <a href="/"><FaFacebookF /></a>
                            </div>

                        </div>
                        <div className="col-md-3 col-sm-6 col-12 item">
                            <div className="button-group">
                                <a href="/" className='fill-button'><img src="assets/img/Playicon.png" alt="" /><span>Google Play</span></a>
                                <a href="/" className='round-button'><img src="assets/img/appleicon.png" alt="" /><span>App Store</span></a>
                            </div>
                        </div>
                    </div>
                </div>

            </div><div className="bottom">
                <div className="bottom-inner">
                    <p>By Gigwork. All Rights Reserved © 2023</p>
                </div>
            </div>

        </footer>
    )
}

export default Footer