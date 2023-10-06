import { Container } from "./styles";
import { FaQuoteLeft } from "react-icons/fa"
import { AiTwotoneStar } from "react-icons/ai";
export function Testimonial({ comment, rating, image, ...rest}) {
    const ratingStars = [];
    for( let i = 0; i < rating; i++ ) {
        ratingStars.push(<AiTwotoneStar key={i}/>)
    }

    return(
        <Container {...rest}>
            <div className="testimonial">
                <div className="text-wrapper">
                    <div className="text">
                        <span className="quote">
                            <FaQuoteLeft size={24}/>
                        </span>
                        <p>
                            {comment}
                        </p>
                            <div className="stars">
                                {ratingStars}
                            </div>
                    </div>
                </div>
                <img src={image} alt="" />
            </div>
        </Container>
    )
}