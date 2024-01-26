import { createGlobalStyle } from "styled-components";
export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        transition: background .3s;
    }

    :root {
        font-size: 52.5%;
        font-family: 'Manrope', sans-serif;

        --primary: ${ ({ theme }) => theme.COLORS.PRIMARY};
        --secondary: ${ ({ theme }) => theme.COLORS.SECONDARY};
        
        --gray_900: ${ ({ theme }) => theme.COLORS.GRAY_900};
        --gray_800: ${ ({ theme }) => theme.COLORS.GRAY_800};
        --gray_700: ${ ({ theme }) => theme.COLORS.GRAY_700};
        --gray_600: ${ ({ theme }) => theme.COLORS.GRAY_600};
        --gray_500: ${ ({ theme }) => theme.COLORS.GRAY_500};
        --gray_400: ${ ({ theme }) => theme.COLORS.GRAY_400};
        --gray_300: ${ ({ theme }) => theme.COLORS.GRAY_300};
        --gray_200: ${ ({ theme }) => theme.COLORS.GRAY_200};
        --gray_100: ${ ({ theme }) => theme.COLORS.GRAY_100};

        --icon_bg_color: #fff;
        --icon_bg_color_hover: var(--primary);

        --svg_color: #000;
        --svg_color_hover: #fff; 
        
        --features_bg_color: #fff;
        --bg_accordion_sumary: #fff;

        --header_bg: #fff;
        --img_filter: 0.5;

        --bg_post: #fff;
        --bg_categorie_post: #ECEDFD;
    }
    
    
    
    body.dark {
        --gray_900: #fff;
        --gray_800: #fff;
        --gray_700: #BEBDC5;
        --gray_600: #898890;
        --gray_300: #4A4855;
        --gray_100: #1F1C2D;
        
        --icon_bg_color: #3F3755;
        --icon_bg_color_hover: #fff;
        
        --svg_color: #fff;
        --svg_color_hover: var(--primary); 
        
        
        --bg-color: #1E142E;
        
        --body_bg_color: #131022;
        
        --bg_accordion_sumary: #2A2738;
        
        --header_bg: #1E142E;
        
        --img_filter: 2;

        --bg_post: #2A2838;
        
        --bg_categorie_post: #312F4E;
    }
    
    body {
        font-size: 1.6rem;
        background-color: var(--body_bg_color);
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