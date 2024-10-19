import React from 'react'

const Empower = () => {

    const empower = [
        {
            img: "assets/img/timemanagement.png",
            name: "Flexibilty",
            description: "You may choose from a list of options that fit your personal schedules"
        },
        {
            img: "assets/img/reyalitiy.png",
            name: "Reliability",
            description: "Strict vetting of profile is required but all information will be kept confidential."
        },
        {
            img: "assets/img/userfrendly.png",
            name: "User Friendly",
            description: "Our app is straightforward and easy to navigate around."

        }
    ]
    return (
        <>

            <div className="empower-outer">
                <div className="container">
                    <div className="empower-inner">
                        <div className="heading">
                            <h4>Empower your hustle, gig by gig</h4>
                            <p>With Gigwork, you can easily look for jobs that will suit your expertise. Gigwork is a trusted platform, working with over 50 renowned entities in Singapore. </p>
                        </div>
                    </div>

                    <div className="row">

                        {
                            empower.map((i) => {
                                return (
                                    <div className="col-sm-4 col-12 item animate__animated animate__zoomIn">
                                        <div className="img-content">
                                            <img src={i.img} alt={i.name} />
                                        </div>
                                        <div className="text-content">
                                            <h4>{i.name}</h4>
                                            <p>{i.description}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }


                    </div>
                </div>
            </div>

        </>
    )
}

export default Empower