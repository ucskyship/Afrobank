import { css } from "styled-components";

const mediaQuery = (query) => (rules) =>
  css`
    @media screen and (${css(query)}) {
      ${css(rules)}
    }
  `;

const media = {
  smallMobile: mediaQuery`max-width: 320px`,
  mobile: mediaQuery`max-width: 480px`,
  tablet: mediaQuery`max-width: 768px`,
  smallDesktop: mediaQuery`min-width: 1024px`,
  print: mediaQuery`print`,
};

export default media;
