import { Container } from "./styles";
export function ClientLogo({ image, ...rest}) {
    return(
        <Container {...rest} >
            <img src={image} alt="logo do cliente" />
        </Container>
    )
}