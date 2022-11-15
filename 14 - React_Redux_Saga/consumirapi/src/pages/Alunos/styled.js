import styled from "styled-components";

export const AlunoContainer = styled.div`
  margin-top: 20px;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 0;
  }
  div + div {
    border-top: 2px solid #eee;
  }
`;
export const ProfilePicture = styled.div`
  img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
  }
`;
