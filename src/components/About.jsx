import React from "react"
import { NavLink } from "react-router-dom"

const About = () => {
    return (
        <div>
            <div className="container py-5 my-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="text-primary fw-bold mb-4">About Us</h1>
                        <p className="lead mb-4 ">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus temporibus 
                            facere ut maiores nisi quasi molestiae velit impedit ratione iusto sit numquam 
                            beatae vitae inventore laborum id ducimus libero, neque aliquam nobis suscipit 
                            molestias nemo magni? Illo dolorem iste dolor necessitatibus! Aperiam, illo dolorum 
                            esse atque, ullam aliquid iusto enim consequatur adipisci architecto, temporibus 
                            eius est? Beatae dolore culpa, dicta minima itaque deleniti incidunt iure animi 
                            eaque eum? Hic optio quis fugiat porro? Blanditiis sit dignissimos soluta pariatur
                            iusto officia neque labore excepturi deleniti, exercitationem amet, distinctio 
                            accusantium tenetur dolore assumenda. Voluptate optio aspernatur fuga soluta officiis aliquid nemo voluptas.
                        </p>
                        <NavLink to="/contact" className="btn btn-outline-primary px-3">Contact Us</NavLink>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
                        <img src="/assets/about us.jpg" alt="About Us" height="400px"width="400px"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About