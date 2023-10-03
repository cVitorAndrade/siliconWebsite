import { styled } from "styled-components";
export const Container = styled.span`
    width: 5.2rem;
    height: 5.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    -webkit-box-shadow: 0px 4px 7px -4px rgba(62,66,101,1);
    -moz-box-shadow: 0px 4px 7px -4px rgba(62,66,101,1);
    box-shadow: 0px 4px 7px -4px rgba(62,66,101,1);
    transition: all .3s ease-in-out;
    color: var(--svg_color);
    background-color: var(--icon_bg_color);


    &:hover {
        background-color: var(--icon_bg_color_hover);
        cursor: pointer;

        > svg {
            color: var(--svg_color_hover);
        }
    }
`;