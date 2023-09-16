import { Container } from "./styles";
export function Button({ title, size, ...rest}) {
    return(
        <Container {...rest}
        size={size}
        >
            {title}
        </Container>
    )
}