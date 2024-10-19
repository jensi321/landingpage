import React, { useEffect, useState } from 'react'
import { PiSuitcaseSimple } from 'react-icons/pi'

const Services = () => {

    const [scrollTop, setScrollTop] = useState(0);
    const [addClass, setAddClass] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentscroll = window.scrollY
            setScrollTop(currentscroll);
            setAddClass(currentscroll > 100)
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollTop]);

    const servicesarr = [
        {
            color: "#5F90E3",
            name: "Get Verified",
        },
        {
            color: "#B00000",
            name: "Manage Personal Jobs",
        },
        {
            color: "#FD9997",
            name: "Browse Jobs",
        },
        {
            color: "#BC8DFF",
            name: "View Job History",
        },
        {
            color: "#FFAA7B",
            name: "Invited to Jobs",
        },
        {
            color: "#7FDCFA",
            name: "Get Paid",
        },
        {
            color: "#78D7A6",
            name: "Apply for Jobs",
        },
        {
            color: "#FF794F",
            name: "Notified of New Events",
        },
    ]

    return (
        <>
            <div className="services-outer" id='services'>
                <div className="container">
                    <div className="services-inner row">
                        <div className={`img-content col-md-6 col-12 ${addClass ? ' animate__animated animate__zoomIn' : ''}`}>


                           
                            <img src="assets/img/Services.png" alt="" />

                        </div>
                        <div className={`text-content col-md-6 col-12 ${addClass ? ' animate__animated animate__zoomIn' : ''}`}>
                            <div className="heading">
                                <h3>Services &
                                    Features</h3>
                            </div>

                            <ul className=''>

                                {servicesarr.map((i) => {
                                    return (
                                        <li className=''>
                                            <div className="button-group">
                                                <a href="/"><span style={{ color: `${i.color}` }}><PiSuitcaseSimple /></span> {i.name} </a>
                                            </div>
                                        </li>
                                    )
                                })}

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services