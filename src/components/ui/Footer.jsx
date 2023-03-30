import React from 'react';
import logo from '../../assets/images/logo/logo.svg';
import news from '../../assets/images/blog/footer-news1.jpg'
import news1 from '../../assets/images/blog/footer-news2.jpg'


function Footer() {
    return (
        <>
    <footer class="footer">
       
        <div class="footer-middle">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 col-md-6 col-12">
                      
                        <div class="f-about single-footer">
                            <div class="logo">
                                <a href="index.html"><img src={logo} alt="Logo" /></a>
                            </div>
                            <p>Nemo enim enim voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                                consequ magni dolores eos qui ratione.</p>
                            <div class="footer-social">
                                <ul>
                                    <li><a href="javascript:void(0)"><i class="lni lni-facebook-original"></i></a></li>
                                    <li><a href="javascript:void(0)"><i class="lni lni-twitter-original"></i></a></li>
                                    <li><a href="javascript:void(0)"><i class="lni lni-linkedin-original"></i></a></li>
                                    <li><a href="javascript:void(0)"><i class="lni lni-google"></i></a></li>
                                </ul>
                            </div>
                        </div>
                       
                    </div>
                    <div class="col-lg-3 col-md-6 col-12">
                       
                        <div class="single-footer sm-custom-border recent-blog">
                            <h3>Latest News</h3>
                            <ul>
                                <li>
                                    <a href="blog-single-sidebar.html"><img src={news} alt="#" />
                                        Top 10 books you Must read in 2023
                                    </a>
                                    <span class="date"><i class="lni lni-calendar"></i>July 15, 2023</span>
                                </li>
                                <li>
                                    <a href="blog-single-sidebar.html"><img src={news1} alt="#" />
                                        How to Improve Your Communication Skill
                                    </a>
                                    <span class="date"><i class="lni lni-calendar"></i>July 1, 2023</span>
                                </li>
                            </ul>
                        </div>
                        
                    </div>
                    <div class="col-lg-3 col-md-6 col-12">
                       
                        <div class="single-footer sm-custom-border f-link">
                            <h3>Course List</h3>
                            <ul>
                                <li><a href="javascript:void(0)">Advance Javascript – ES6</a></li>
                                <li><a href="javascript:void(0)">WordPress for Intermediate</a></li>
                                <li><a href="javascript:void(0)">iOS App Development</a></li>
                                <li><a href="javascript:void(0)">Wbsite Development</a></li>
                                <li><a href="javascript:void(0)">Android App Development</a></li>
                            </ul>
                        </div>
                       
                    </div>
                    <div class="col-lg-3 col-md-6 col-12">
                     
                        <div class="single-footer footer-newsletter">
                            <h3>Newsletter</h3>
                            <p>Subscribe to us to always stay in touch with us and get the latest news.</p>
                            <form action="mail/mail.php" method="get" target="_blank" class="newsletter-form">
                                <input name="EMAIL" placeholder="Your email address" class="common-input"
                                    onfocus="this.placeholder = ''"
                                    onblur="this.placeholder = 'Your email address'" required="" type="email" />
                                <div class="button">
                                    <button class="btn">Subscribe Now!</button>
                                </div>
                            </form>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        
        <div class="footer-bottom">
            <div class="container">
                <div class="inner">
                    <div class="row">
                        <div class="col-12">
                            <div class="left">
                                <p> Developed by<a href="https://sajjad-hasan.netlify.com" rel="nofollow"
                                        target="_blank">Sajjad</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </footer>
 

   
    <a href="#" class="scroll-top btn-hover">
        <i class="lni lni-chevron-up"></i>
    </a>
      </>
  )
}

export default Footer
