import React, { useEffect, useState } from 'react'

const Community = () => {
    const [scrollTop, setScrollTop] = useState(0);
    const [addClass, setAddClass] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentscroll = window.scrollY
            setScrollTop(currentscroll);
            setAddClass(currentscroll > 1000)
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollTop]);

    return (
        <>
            <div className="community-outer" id='community'>
                <div className="container">
                    <div className="community-inner">
                        <div className={`text-content ${addClass ? "animate__animated animate__zoomIn" : "text-content "}`}>


                            <div className="heading">
                                <h4>Join our community,<br />
                                    download our app now!</h4>
                                <p>Be part of our team and allow us to work the magic for you. <br />
                                    You may also feel free to reach out to us if you require further information or assistance.
                                    <br />  Email us at help@gigwork.sg</p>

                            </div>
                            <div className="link-group">
                                <a href="/"><img src="assets\img\appstore.png" alt="App Store" /></a>
                                <a href="/"><img src="assets\img\Playstore.png" alt="Play Store" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Community