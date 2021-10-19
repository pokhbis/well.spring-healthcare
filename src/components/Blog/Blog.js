import React from 'react';
import './Blog.css';
const Blog = () => {
    return (
        <div>
            <div>
                <div className="pt-5 pb-3">
                    <h2>Make Healthy Choices</h2>
                    <p className="blog-title">Read our blog posts to learn and stay updated about the healthy choices you can make to lead a healthy life.</p>
                </div>
                <div className="blog-card container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 ">
                            <div className="">
                                <img className="blog-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrNpy-VFsamgAJwdf6FTEquDBtMRe5s6nia3uvr86W4AWdP5cZbtdTNqXF2yeFiFiEh9Q&usqp=CAU" alt="" />
                            </div>
                            <h3>Connect With Nature</h3>
                            <p>For thousands of years people have been going into nature to seek a connection with something greater than themselves.With one small swap to organic, you can take a tangible action.</p>
                            <button className="header-btn">Read More</button>
                        </div>
                        <div className="col-lg-3 col-md-6 ">
                            <div className="">
                                <img className="blog-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSridvIYf3dgSzPacN8E_-P7jX7BRTu2Adxmw&usqp=CAU" alt="" />
                            </div>
                            <h3>Go Natural</h3>
                            <p>Because organic works with nature, not against it, by protecting our soil,  our world. With one small swap to organic, you can take a tangible action to support a more sustainable future for the world.</p>
                            <button className="header-btn">Read More</button>
                        </div>
                        <div className="col-lg-3 col-md-6 ">
                            <div className="">
                                <img className="blog-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrJnU1QCQGZpdDilUhlobqv1Q0Q7IMDIJRBA&usqp=CAU" alt="" />
                            </div>
                            <h3>Schedule Exercise</h3>
                            <p>There is no single type of exercise that can take care of all your needs. In fact, to get the most benefits from your routine, you want a mix of activities during  most benefits from the course of a week.  </p>
                            <button className="header-btn">Read More</button>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="">
                                <img className="blog-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEu9u3Zo6fmr5CBLHKgTtiRVLaCdnQMzxMfg&usqp=CAU" alt="" />
                            </div>
                            <h3>Celebrate Success</h3>
                            <p>By celebrating our success, we reinforce the motivation that will carry us through the next achievement. This is important for you individually as well as  most benefits from for your organization. </p>
                            <button className="header-btn">Read More</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Blog;