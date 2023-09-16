import { Apresentation, Container, Features } from "./styles";

import { BiSolidRightArrow } from "react-icons/bi"
import { MdKeyboardArrowDown } from "react-icons/md"

import { VideoButton } from "../../components/VideoButton";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";

import gfxImage from "../../assets/gfx.svg";
import lineShape from "../../assets/line-shape.png";
import bgShape from "../../assets/bg-shape.png";

import idea from "../../assets/feature/idea.png";
import award from "../../assets/feature/award.png";
import team from "../../assets/feature/team.png";

export function Home() {
    return(
        <Container>
            <div className="wrapper">
            <Header />
                <Apresentation>
                <div className="text">
                    <div className="video-idle">
                        <VideoButton icon={<BiSolidRightArrow size={10}/>} />
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
                    <VideoButton icon={<MdKeyboardArrowDown size={20} />}/>
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
            </Features>


        </Container>
    )
}