import styled from "styled-components";

const DropDownCard = styled.div`
  background-color: #141c3b;
  margin-bottom: 3px;
  font-size: 26px;
  padding: 24px;
  display: ${(props) => {
    return parseInt(props.id) === parseInt(props.show) ? "block" : "none";
  }};
  transform: all 50s ease-in;
  @media (max-width: 690px) {
    padding: 18px;
    font-size: 18px;
  }
`;

export default DropDownCard;
