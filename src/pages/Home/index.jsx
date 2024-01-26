import { Apresentation, ClientTestimonial, Clients, Container, Features, LatestPosts, OurAtmosphere, OurCompetencies } from "./styles";

import { Swiper, SwiperSlide } from "swiper/react"

import { BiSolidRightArrow } from "react-icons/bi"
import { MdKeyboardArrowDown } from "react-icons/md"
import { MdKeyboardArrowLeft } from "react-icons/md"
import { MdKeyboardArrowRight } from "react-icons/md"
import { HiOutlineBookmark } from "react-icons/hi"

import { IconButton } from "../../components/IconButton";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { ClientLogo } from "../../components/ClientLogo";

import gfxImage from "../../assets/gfx.svg";
import lineShape from "../../assets/line-shape.png";
import bgShape from "../../assets/bg-shape.png";

import idea from "../../assets/feature/idea.png";
import award from "../../assets/feature/award.png";
import team from "../../assets/feature/team.png";

import man from "../../assets/feature/projects/man.jpg";
import whale from "../../assets/feature/projects/whale.jpg";
import mask from "../../assets/feature/projects/mask.jpg";
import explosion from "../../assets/feature/projects/explosion.jpg";

import arrows from "../../assets/atmosphere/arrow.png"
import group from "../../assets/atmosphere/group.png"

import cssda from "../../assets/presentedBy/cssda.png"
import awwwards from "../../assets/presentedBy/awwwards.svg"
import fwa from "../../assets/presentedBy/fwa.png"
import webby from "../../assets/presentedBy/webby.png"

import jeromeBell from "./../../assets/latestPosts/postCreators/JeromeBell.jpg"
import annetteBlack from "./../../assets/latestPosts/postCreators/AnnetteBlack.jpg"
import marvinMcKinney from "./../../assets/latestPosts/postCreators/MarvinMcKinney.jpg"


import BasicAccordion from "../../components/BasicAccordion";

import { useState, useEffect } from "react";

import { logos, clients } from "../../utils/data";
import { Testimonial } from "../../components/Testimonial";
import { ClientInfo } from "../../components/ClientInfo";

export function Home() {

    const [isChecked, setIsChecked] = useState(
        localStorage.getItem('isChecked') === 'true'
      );
  
    const handleChange = () => {
        const myBody = document.querySelector("body");

        if ( isChecked ) {
            myBody.classList.remove("dark");
        }else {
            myBody.classList.add("dark");            
        }

        localStorage.setItem('isChecked', !isChecked);
        setIsChecked(!isChecked);

      };


    useEffect(() => {
        if ( isChecked ) { document.body.classList.add("dark"); }
      }, []);

    return(
        <Container className={`${isChecked ? 'dark' : ''}`}>
            <div className="wrapper">
            <Header children={
                <input 
                    type="checkbox"
                    name="switch"
                    id="switch"
                    checked={isChecked}
                    onChange={handleChange}
                />
            }
            />
                <Apresentation>
                <div className="text">
                    <div className="video-idle">
                        <IconButton icon={<BiSolidRightArrow size={10}/>} />
                        <span className="video-title">Digital Agency Promo</span>
                    </div>
                    <h2>We <span>Transform</span> Your Ideas into Reality</h2>
                    <div className="work-with-us">
                        <Button title="Work with us" size="L" />
                        <p>
                            Silicon is a leading full-service digital agency based in New York.
                            We make mobile apps,websites & brands, that people appreciate all around the world.
                        </p>
                    </div>
                </div>
                
                <img src={gfxImage} alt="" />
                </Apresentation>
                <div className="discover-more">
                    <IconButton icon={<MdKeyboardArrowDown size={20} />}/>
                    <span>Discover more</span>
                </div>
                <img src={bgShape} alt="" className="bg-shape"/>
                <img src={lineShape} alt="" className="line-shape"/>
            </div>

            <Features>
                <div className="features">
                    <div className="item">
                        <img src={idea} alt="" />
                        <h3>Creative Solutions</h3>
                        <p>Sed morbi nulla pulvinar lectus tempor vel euismod accumsan.</p>
                    </div>
                    <div className="item">
                        <img src={award} alt="" />
                        <h3>Award Winning</h3>
                        <p>Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet.</p>
                    </div>
                    <div className="item">
                        <img src={team} alt="" />
                        <h3>Team of Professionals</h3>
                        <p>Nam venenatis urna aenean quis feugiat et senectus turpis.</p>
                    </div>
                </div>

                <div className="projects">
                    <h2>Featured Projects</h2>
                    <p>We create websites and mobile apps, marketing materials, branding, web design, UX/UI design and illustrations.</p>

                    <div className="projects-image">
                        <img src={man} alt="" id="man"/>
                        <img src={mask} alt="" id="mask"/>
                        <img src={whale} alt="" id="whale"/>
                        <img src={explosion} alt="" id="explosion"/>
                    </div>
                </div>

                <Button title="Explore all" size="M" />
            </Features>

            <OurCompetencies>
                <h2>Our Competencies</h2>
                <p>We fully understand your business. If you need to update something, we are more than happy to help you with the services we are providing.</p>
                <BasicAccordion></BasicAccordion>
            </OurCompetencies>

            <Clients>    
                <div className="clients-title">
                    <h2>Trusted by Awesome Clients</h2>
                    <div className="btn-slider-wrapper">
                        <button id="swiper-button-prev"><IconButton icon={<MdKeyboardArrowLeft size={20}/>} /></button>
                        <button id="swiper-button-next"><IconButton icon={<MdKeyboardArrowRight size={20}/>} /></button>
                    </div>
                </div>

                <Swiper
                    loop={true}
                    navigation={{nextEl: "#swiper-button-next", prevEl:"#swiper-button-prev"}}
                    slidesPerView={2}
                    spaceBetween={10}
                    breakpoints={{
                        375: {
                            slidesPerView: 2
                        },
                        450: {
                            slidesPerView: 3,
                            spaceBetween: 16   
                        },
                        700: {
                            slidesPerView: 4
                        },
                        1000: {
                            slidesPerView: 5
                        },
                        1200: {
                            slidesPerView: 6
                        }
                    }}
                    
                >
                    {
                        logos.map( logo => (
                            <SwiperSlide key={logo.id}>
                                <ClientLogo image={logo.image} />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </Clients>

            <ClientTestimonial>
                <h2>What They Say About Us</h2>

                <Swiper
                    navigation={{
                        nextEl: "#testimonial-swiper-button-next",
                        prevEl: "#testimonial-swiper-button-prev"
                    }}
                    loop={true}
                    pagination={{
                        el: "#pagination-element",
                        clickable: true,
                        renderBullet: function (index, className) {
                            return '<span class="' + className + '">' + (index + 1) + '</span>';
                          }
                    }}
                    allowTouchMove={false}

                >
                    { clients.map( ( client ) => (
                        <SwiperSlide key={client.id}>
                            <Testimonial comment={client.comment} image={client.image} rating={client.rating}/>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="testimonial-controls-wrapper">
                    <div className="testimonial-controls">
                        <button id="testimonial-swiper-button-prev">
                            <IconButton
                                icon={<MdKeyboardArrowLeft size={16}/>} />
                        </button>
                        <div id="pagination-element"></div>
                        <button id="testimonial-swiper-button-next">
                            <IconButton
                                icon={<MdKeyboardArrowRight size={16}/>} />
                        </button>
                    </div>
                    <Swiper 
                        className="swiperInfo"
                        navigation={{
                        nextEl: "#testimonial-swiper-button-next",
                        prevEl: "#testimonial-swiper-button-prev"
                        }}

                        loop={true}
                    pagination={{
                        el: "#pagination-element",
                        clickable: true,
                        renderBullet: function (index, className) {
                            return '<span class="' + className + '">' + (index + 1) + '</span>';
                          }
                    }}
                    allowTouchMove={false}
                    >
                        {clients.map( client => (<SwiperSlide key={client.name}>
                            <ClientInfo jobTitle={client.jobTitle} logo={client.logo} name={client.name}/>
                        </SwiperSlide>))}
                    </Swiper>
                </div>
            </ClientTestimonial>

            <OurAtmosphere>
                    <div className="atmosphere-title">
                        <h2>Our Creative Atmosphere</h2>
                        <img src={arrows} alt="" />
                    </div>
                    <img src={group} alt=""/>
                    <div className="award-winning">
                        <h2>Award-winning designs featured by</h2>
                        <div>
                            <div>
                                <img src={webby} alt="" />
                                <p>4x mobile of the day</p>
                            </div>
                            <div>
                                <img src={cssda} alt="" />
                                <p>1x Kudos</p>
                            </div>
                            <div>
                                <img src={awwwards} alt="" />
                                <p>3x website of the day</p>
                            </div>
                            <div>
                                <img src={fwa} alt="" />
                                <p>2x best website</p>
                            </div>
                        </div>
                    </div>
            </OurAtmosphere>

            <LatestPosts>
                <div className="content">
                    <h2>Latest From Our Blog</h2>

                    <div className="post-wrapper">
                        <div className="first-section">
                            <div className="post-image">
                                <IconButton icon={<HiOutlineBookmark size={18} />} />
                            </div>

                            <div className="post-info">
                                <div>
                                    <span>Digital </span>
                                    <span>12 hours ago</span>
                                </div>
                                
                                <h5>A study on smartwatch design qualities and people’s preferences</h5>

                                <div className="post-creator">
                                    <img src={jeromeBell} alt="" />
                                    <p>Jerome Bell <span>Marketing Specialist</span></p>
                                </div>
                            </div>
                        </div>

                        <div className="second-section">
                            <div>
                                <div className="post-image">
                                    <IconButton icon={<HiOutlineBookmark size={18} />} />
                                </div>

                                <div className="post-info">
                                    <div>
                                        <span>Digital </span>
                                        <span>1 day</span>
                                    </div>
                                    
                                    <h5>Brand analysis: second step to the brand identity</h5>

                                    <div className="post-creator">
                                        <img src={annetteBlack} alt="" />
                                        <p>Annette Black<span>Product Manager</span></p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="post-image">
                                    <IconButton icon={<HiOutlineBookmark size={18} />} />
                                </div>

                                <div className="post-info">
                                    <div>
                                        <span>Digital </span>
                                        <span>May 24, 2021</span>
                                    </div>
                                    
                                    <h5>How to check the website before releasing it?</h5>

                                    <div className="post-creator">
                                        <img src={marvinMcKinney} alt="" />
                                        <p>Marvin McKinney<span>Senior UI/UX Designer</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </LatestPosts>

        </Container>
    )
}