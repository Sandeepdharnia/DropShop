import React from "react";
import Headphones from "../../assets/shared/desktop/image-category-thumbnail-headphones.png";
import Speakers from "../../assets/shared/desktop/image-category-thumbnail-speakers.png";
import Earphones from "../../assets/shared/desktop/image-category-thumbnail-earphones.png";
import {
  StyledAllLinks,
  StyledHeadphones,
  StyledSpeakers,
  StyledEarphones,
} from "../styles/ShopLinks";
import { HiChevronRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import { InView } from "react-intersection-observer";

const ShopLinks = () => {
  return (
    <InView threshold={0.25}>
      {({ ref, inView }) => (
        <StyledAllLinks
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <StyledHeadphones>
            <img src={Headphones} alt="Headphone Icon" />
            <h4>HEADPHONES</h4>
            <Link to="/category-headphones">
              SHOP
              <HiChevronRight size={20} color="#d87d4a" />
            </Link>
          </StyledHeadphones>
          <StyledSpeakers>
            <img src={Earphones} alt="Speaker Icon" />
            <h4>EARPHONES</h4>
            <Link to="/category-speakers">
              SHOP
              <HiChevronRight size={20} color="#d87d4a" />
            </Link>
          </StyledSpeakers>
          <StyledEarphones>
            <img src={Speakers} alt="Earphone Icon" />
            <h4>SPEAKERS</h4>
            <Link to="/category-earphones">
              SHOP
              <HiChevronRight size={20} color="#d87d4a" />
            </Link>
          </StyledEarphones>
        </StyledAllLinks>
      )}
    </InView>
  );
};

export default ShopLinks;
