import { styled } from "styled-components";
export const Container = styled.a`
    background-color: ${ ({ theme }) => theme.COLORS.PRIMARY};
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${ ({ size }) => {
        if ( size === "S" ) return '11.5rem';
        if ( size === "M" ) return '14.3rem';
        if ( size === "L" ) return '16.2rem';
    }};

    height: ${ ({ size }) => {
        if ( size === "S" ) return '3.6rem';
        if ( size === "M" || size === "L" ) return '5.2rem';
    }};



    color: #fff;
    font-size: ${ ({ size }) => {
        if ( size === "S" ) return '1.4rem';
        if ( size === "M" || size === "L" ) return '1.6rem';
    }};

    font-weight: 600;
    border-radius: 4px;


    -webkit-box-shadow: 0px 3px 10px -4px rgb(99, 102, 241);
    -moz-box-shadow: 0px 3px 10px -4px rgb(99, 102, 241);
    box-shadow: 0px 3px 10px -4px rgb(99, 102, 241);

`;