import React from 'react';
import about from '../../assets/images/about/about-img2.png'


function About() {
  return (
    <section class="about-us section">
    <div class="container">
        <div class="row">
            <div class="col-lg-6 col-12">
                <div class="about-left">
                    <div class="about-title align-left">
                        <span class="wow fadeInDown" data-wow-delay=".2s">About Our University</span>
                        <h2 class="wow fadeInUp" data-wow-delay=".4s">Welcome to our campus</h2>
                        <p class="wow fadeInUp" data-wow-delay=".6s">Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit, do eius mod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad min im veniam, quis nostrud exercitati ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.</p>
                        <p class="qote wow fadeInUp" data-wow-delay=".8s">Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit, do eius mod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div class="button wow fadeInUp" data-wow-delay="1s">
                            <a href="about-us.html" class="btn">Read More</a>
                            <a href="https://www.youtube.com/watch?v=r44RKWyfcFw&fbclid=IwAR21beSJORalzmzokxDRcGfkZA1AtRTE__l5N4r09HcGS5Y6vOluyouM9EM"
                                class="glightbox video btn"> Play Video<i class="lni lni-play"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 col-12">
                <div class="about-right wow fadeInRight" data-wow-delay=".4s">
                    <img src={about} alt="#" />
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default About