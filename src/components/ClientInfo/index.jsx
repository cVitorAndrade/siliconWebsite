import { Container } from "./styles";
export function ClientInfo({ logo, name, jobTitle, ...rest }) {
    return(
        <Container>
            <img src={logo} alt="" />
            <h5>{name}
            <span>{jobTitle}</span>
            </h5>
        </Container>
    )
}