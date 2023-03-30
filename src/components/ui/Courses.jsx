import React from 'react'
import course1 from '../../assets/images/courses/courses-1.jpg';
import course2 from '../../assets/images/courses/courses-2.jpg';
import course3 from '../../assets/images/courses/courses-3.jpg';
import course4 from '../../assets/images/courses/courses-4.jpg';
import course5 from '../../assets/images/courses/courses-5.jpg';
import course6 from '../../assets/images/courses/courses-6.jpg';

function Courses() {
  return (
    <section class="courses section">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="section-title">
                        <div class="section-icon wow zoomIn" data-wow-delay=".4s">
                            <i class="lni lni-graduation"></i>
                        </div>
                        <h2 class="wow fadeInUp" data-wow-delay=".4s">Featured Courses</h2>
                        <p class="wow fadeInUp" data-wow-delay=".6s">There are many variations of passages of Lorem
                            Ipsum available, but the majority have suffered alteration in some form.</p>
                    </div>
                </div>
            </div>
            <div class="single-head">
                <div class="row">
                    <div class="col-lg-4 col-md-6 col-12">
                    
                        <div class="single-course wow fadeInUp" data-wow-delay=".2s">
                            <div class="course-image">
                                <a href="course-details.html"><img src={course1}
                                        alt="#" /></a>
                                <p class="price">$180</p>
                            </div>
                            <div class="content">
                                <h3><a href="course-details.html">Computer Science</a></h3>
                                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                    laborum.</p>
                            </div>
                            <div class="bottom-content">
                                <ul class="review">
                                    <li><i class="lni lni-star-filled"></i></li>
                                    <li><i class="lni lni-star-filled"></i></li>
                                    <li><i class="lni lni-star-filled"></i></li>
                                    <li><i class="lni lni-star-filled"></i></li>
                                    <li><i class="lni lni-star-filled"></i></li>
                                    <li>22 Reviews</li>
                                </ul>
                                <span class="tag">
                                    <i class="lni lni-tag"></i>
                                    <a href="javascript:void(0)">Programming</a>
                                </span>
                            </div>
                        </div>

                    </div>
                    <div class="col-lg-4 col-md-6 col-12">
                        
                        <div class="single-course wow fadeInUp" data-wow-delay=".4s">
                            <div class="course-image">
                                <a href="course-details.html"><img src={course2}
                                        alt="#" /></a>
                                <p class="price">$200</p>
                            </div>
                            <div class="content">
                                <h3><a href="course-details.html">Business Management</a></h3>
                                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                    laborum.</p>
                            </div>
                            <div class="bottom-content">
                                <ul class="review">
                                    <li><i class="lni lni-star-filled"></i></li>
                                    <li><i class="lni lni-star-filled"></i></li>
                                    <li><i class="lni lni-star-filled"></i></li>
                                    <li><i class="lni lni-star-filled"></i></li>
                                    <li><i class="lni lni-star-filled"></i></li>
                                    <li>10 Reviews</li>
                                </ul>
                                <span class="tag">
                                    <i class="lni lni-tag"></i>
                                    <a href="javascript:void(0)">Business</a>
                                </span>
                            </div>
                        </div>
                      
                    </div>
                    <div class="col-lg-4 col-md-6 col-12">
                  
                        <div class="single-course wow fadeInUp" data-wow-delay=".6s">
                            <div class="course-image">
                                <a href="course-details.html"><img src={course3}
                                        alt="#" /></a>
                                <p class="price">Free</p>
                            </div>
                            <div class="content">
                                <h3><a href="course-details.html">Java Online Course</a></h3>
                                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                    laborum.</p>
                            </div>
                            <div class="bottom-content">
                                <ul class="review">
                                    <li><i class="lni lni-star-filled"></i></li>
                                    <li><i class="lni lni-star-filled"></i></li>
                                    <li><i class="lni lni-star-filled"></i></li>
                                    <li><i class="lni lni-star-filled"></i></li>
                                    <li><i class="lni lni-star-filled"></i></li>
                                    <li>55 Reviews</li>
                                </ul>
                                <span class="tag">
                                    <i class="lni lni-tag"></i>
                                    <a href="javascript:void(0)">Programming</a>
                                </span>
                            </div>
                        </div>
                       
                    </div>
                    <div class="col-lg-4 col-md-6 col-12">
                    
                        <div class="single-course wow fadeInUp" data-wow-delay=".2s">
                            <div class="course-image">
                                <a href="course-details.html"><img src={course4}
                                        alt="#" /></a>
                                <p class="price">$299</p>
                            </div>
                            <div class="content">
                                <h3><a href="course-details.html">Electrical Engineering</a></h3>
                                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                    laborum.</p>
                            </div>
                            <div class="bottom-content">
                                <ul class="review">
                                    <li><i class="lni lni-star-filled"></i></li>
                                    <li><i class="lni lni-star-filled"></i></li>
                                    <li><i class="lni lni-star-filled"></i></li>
                                    <li><i class="lni lni-star-filled"></i></li>
                                    <li><i class="lni lni-star-filled"></i></li>
                                    <li>60 Reviews</li>
                                </ul>
                                <span class="tag">
                                    <i class="lni lni-tag"></i>
                                    <a href="javascript:void(0)">Science</a>
                                </span>
                            </div>
                        </div>

                    </div>
                    <div class="col-lg-4 col-md-6 col-12">
                      
                        <div class="single-course wow fadeInUp" data-wow-delay=".4s">
                            <div class="course-image">
                                <a href="course-details.html"><img src={course5}
                                        alt="#" /></a>
                                <p class="price">$150</p>
                            </div>
                            <div class="content">
                                <h3><a href="course-details.html">Architecture Design</a></h3>
                                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                    laborum.</p>
                            </div>
                            <div class="bottom-content">
                                <ul class="review">
                                    <li><i class="lni lni-star-filled"></i></li>
                                    <li><i class="lni lni-star-filled"></i></li>
                                    <li><i class="lni lni-star-filled"></i></li>
                                    <li><i class="lni lni-star-filled"></i></li>
                                    <li><i class="lni lni-star-filled"></i></li>
                                    <li>25 Reviews</li>
                                </ul>
                                <span class="tag">
                                    <i class="lni lni-tag"></i>
                                    <a href="javascript:void(0)">Design</a>
                                </span>
                            </div>
                        </div>
                        
                    </div>
                    <div class="col-lg-4 col-md-6 col-12">
                      
                        <div class="single-course wow fadeInUp" data-wow-delay=".6s">
                            <div class="course-image">
                                <a href="course-details.html"><img src={course6}
                                        alt="#" /></a>
                                <p class="price">$250</p>
                            </div>
                            <div class="content">
                                <h3><a href="course-details.html">Medical Technology</a></h3>
                                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                    laborum.</p>
                            </div>
                            <div class="bottom-content">
                                <ul class="review">
                                    <li><i class="lni lni-star-filled"></i></li>
                                    <li><i class="lni lni-star-filled"></i></li>
                                    <li><i class="lni lni-star-filled"></i></li>
                                    <li><i class="lni lni-star-filled"></i></li>
                                    <li><i class="lni lni-star-filled"></i></li>
                                    <li>35 Reviews</li>
                                </ul>
                                <span class="tag">
                                    <i class="lni lni-tag"></i>
                                    <a href="javascript:void(0)">Medical</a>
                                </span>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Courses
