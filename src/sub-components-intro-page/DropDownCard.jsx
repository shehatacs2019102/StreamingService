import styled from "styled-components";

const DropDownCard = styled.div`
  font-size: 16px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.75);
  padding: 16px 4px 20px 4px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.14);
  display: ${(props) => {
    return parseInt(props.id) === parseInt(props.show) ? "block" : "none";
  }};
`;

export default DropDownCard;
