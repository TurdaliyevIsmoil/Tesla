import React, { useState } from "react";
import styledComponents from "styled-components";

function Header() {
    const [sidebarStatus, setSidebarStatus] = useState(false);
    const toggle = () => setSidebarStatus(!sidebarStatus)
    return (
        <Container>
            <Logo>
                <img src="/images/logo.svg" alt="Image" />
            </Logo>
            <Menu>
                <li>
                    <Link href="#">Model S</Link>
                </li>
                <li>
                    <Link href="#">Model X</Link>
                </li>
                <li>
                    <Link href="#">Model Y</Link>
                </li>
                <li>
                    <Link href="#">Model 3</Link>
                </li>
                <li>
                    <Link href="#">Solar Roof</Link>
                </li>
                <li>
                    <Link href="#">Solar Panels</Link>
                </li>
            </Menu>
            <RightMenu>
                <Link href="#">Shop</Link>
                <Link href="#">Account</Link>
                <Link href="#" onClick={toggle}>Menu</Link>
            </RightMenu>
            <BurgerNav show={sidebarStatus}>
                <CloseBtn onClick={toggle}>
                    <img src="/images/close.svg" alt="Close" />
                </CloseBtn>
                <li>
                    <a href="#">Existing Inventory</a>
                </li>
                <li>
                    <a href="#">Used Invertory</a>
                </li>
                <li>
                    <a href="#">Trade-In</a>
                </li>
                <li>
                    <a href="#">Test Drive</a>
                </li>
                <li>
                    <a href="#">Cybertruck</a>
                </li>
                <li>
                    <a href="#">Roadster</a>
                </li>
                <li>
                    <a href="#">Semi</a>
                </li>
                <li>
                    <a href="#">Charging</a>
                </li>
                <li>
                    <a href="#">Powerwall</a>
                </li>
                <li>
                    <a href="#">Commercial Energy</a>
                </li>
                <li>
                    <a href="#">Utilities</a>
                </li>
                <li>
                    <a href="#">Find Us</a>
                </li>
                <li>
                    <a href="#">Support</a>
                </li>
                <li>
                    <a href="#">Investor Relations</a>
                </li>
            </BurgerNav>
        </Container>
    );
}

export default Header;

const Container = styledComponents.div`
    position:fixed;
    top:0;
    left: 0;
    right:0;
    min-height: 60px;
    display:grid;
    align-items:center;
    grid-template-columns: 1fr auto 1fr;
    padding:0 20px;
    z-index: 10;
    @media (max-width:1199px) {
        grid-template-columns: 1fr 1fr;
    };
`;

const Logo = styledComponents.a`
    flex-basic: 1;
`;

const Menu = styledComponents.ul`
    display:flex;
    justify-content:center;
    align-items:center;
    list-style-type:none;
    flex-basic: auto;
    @media (max-width:1199px) {
        display:none;
    };
    li{
        flex-wrap: no-wrap;
    }
`;
const Link = styledComponents.a`
    text-decoration: none;
    font-weight:400;
    letter-spacing: .6px;
    text-decoration:uppercase;
    padding: 8px 15px;
    font-size: 15px;
    border-radius: 12px;
    transition: all .5s;
    &:hover{
        background: rgba(0,0,0,0.05);
    }
`;
const RightMenu = styledComponents.div`
    flex-basic: 1;
    display:flex;
    justify-content:flex-end;
    a:first-child, a:nth-child(2){
    @media (max-width:1199px) {
        display:none;
    };
}
`;

const BurgerNav = styledComponents.ul`
    position: fixed;
    top:0;
    right:0;
    bottom: 0;
    overflow-y: auto;
    background: white;
    width: 320px;
    list-style-type:none;
    z-index:99;
    padding: 0 30px 60px 30px;
    display:flex;
    flex-direction:column;
    align-items: stretch;
    transition: all .3s;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    li{
        padding: 5px 0;
        width: 100%;
        display:flex;
        justify-content:stretch;
        a{
            padding: 8px 12px;
            width: 100%;
            font-weight: 400;
            border-radius: 12px;
            transition: all .5s;
            &:hover{
                background: rgba(0, 0, 0, 0.05);
            }
        }
    }

`;

const CloseBtn = styledComponents.div`
    img{
        width:24px;
    }
    display:flex;
    justify-content: flex-end;
    margin: 40px 20px 20px;
    cursor: pointer;
`;
