import { MdKeyboardArrowDown } from "react-icons/md"
import { Container } from "./styles";
import logo from "../../assets/logo.png"
import { Button } from "../Button";

import { useState } from "react";

export function Header() {
    const [active, setActive] = useState(false);
    const handleClick = () => {
        setActive(!active);
    }
    
    window.addEventListener('resize', () => setActive(false))

    return(
        <Container>
            <nav>
                <div className="brand">
                    <img src={logo} alt="" />
                    <h1>Silicon</h1>
                </div>
                
                
                <div className={`wrapper ${active ? 'active' : ''}`}>
                    <ul className="list-items">
                        <li className="dropdown">
                                <span>
                                    Services
                                    <span>
                                        <MdKeyboardArrowDown size={16}/>
                                    </span>
                                </span>
                                <ul>
                                    <li><a href="">Our Services</a></li>
                                    <li><a href="">Clients</a></li>
                                    <li><a href="">Prices</a></li>
                                </ul>
                        </li>
                        <li><a href="">Portfolio</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Blog</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                    <div className="toggle-switch">
                        <span>Light</span>
                        <input type="checkbox" name="switch" id="switch" />
                        <span>Dark</span>
                    </div>
                    <Button title="contact" size="S"/>


                </div>

                <div className={`hamburguer ${active ? 'active' : ''}`} onClick={handleClick}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </nav>
        </Container>
    )
}