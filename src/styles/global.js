import { createGlobalStyle } from "styled-components";
export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        font-size: 52.5%;
        font-family: 'Manrope', sans-serif;
    }

    body {
        font-size: 1.6rem;
    }
    
    a {
        text-decoration: none;
    }

    a, button {
        transition: filter .3s;
    }

    button {
        background: none;
        border: none;
    }

    a:hover, 
    button:hover {
        filter: brightness(0.9);
        cursor: pointer;
    }

    ul {
        list-style: none;
    }

`;