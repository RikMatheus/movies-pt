import styled from "styled-components"
import theme from "../../theme"

export const StyledHeader = styled.div`  
	width: 100%;
  height: 4rem;
  /* position: fixed; */
  background: rgb(46,79,252);
  background: linear-gradient(90deg, ${theme.colors.ptDark} 0%, ${theme.colors.ptLight} 100%); 
  color: ${theme.colors.secondary};
  z-index: 999;
  
  .container {
    display: flex;
    align-items: center;
    height: 100%;
    margin: auto;
    padding: 0 1rem;

    @media ${theme.breakpoints.lg} {
      padding: 0 2rem;
    }

    @media ${theme.breakpoints.exl} {
      max-width: 1440px;
    }
  }

  .title {
    font-size: ${theme.fontSizes.xl};
    margin-left: .5rem;
  }
`
