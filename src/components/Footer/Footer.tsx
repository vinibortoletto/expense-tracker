import React from "react";
import * as S from "./Footer.styles";
import { AiFillGithub } from "react-icons/ai";
import logo from "../../images/logo.svg";

const Footer = () => {
  return (
    <>
      <S.Container>
        <S.IconsWrapper>
          <a href="https://github.com/vinibortoletto/">
            <AiFillGithub />
          </a>
          <a href="https://vinibortoletto.netlify.app/">
            <img src={logo} alt="vinicius bortoletto logo" />
          </a>
        </S.IconsWrapper>

        <p>
          Made by <span>vini.bortoletto</span>
        </p>
      </S.Container>
    </>
  );
};

export default Footer;
