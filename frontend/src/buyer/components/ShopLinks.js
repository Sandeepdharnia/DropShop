import React from "react";
import Headphones from "../../assets/headphones-store-link.png";
import Speakers from "../../assets/speakers-store-link.png";
import Earphones from "../../assets/earphones-store-link.png";
import {
    StyledAllLinks,
    StyledHeadphones,
    StyledSpeakers,
    StyledEarphones,
} from "../styles/ShopLinks";

const ShopLinks = () => {
    return (
        
        <StyledAllLinks>
            <StyledHeadphones>
                <img src={Headphones} alt="Headphone Icon" />
                <h4>HEADPHONES</h4>
                <button>SHOP</button>
            </StyledHeadphones>
            <StyledSpeakers>
                <img src={Earphones} alt="Speaker Icon" />
                <h4>HEADPHONES</h4>
                <button>SHOP</button>
            </StyledSpeakers>
            <StyledEarphones>
                <img src={Speakers} alt="Earphone Icon" />
                <h4>HEADPHONES</h4>
                <button>SHOP</button>
            </StyledEarphones>
        </StyledAllLinks>
    );
};

export default ShopLinks;