import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*,
*::after
*::before{
  box-sizing: border-box;
}

.nav-item{
    color: ${({ theme }) => theme.text}
  }
.background-home{
    background-color: ${({ theme }) => theme.body}
  }
#sidebar{
    background-color: ${({ theme }) => theme.body_siderbar}
  }
.track-list ul, .album-list-content ul{
    background-color: ${({ theme }) => theme.track_list}
  }
.track-author h4, .duration, .track-icon, .sidebar_libra h4, .sidebar_item, .album-list-content h4 {
    color: ${({ theme }) => theme.text}
  }
`;
