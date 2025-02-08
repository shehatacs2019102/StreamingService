import styled from 'styled-components'
import React from 'react'
import search from '../assets/icons-header/search.svg'
import user from '../assets/icons-sidebar/user.svg'

const Container = styled.div`
color: white;
display: flex;
justify-content: space-between;
flex-flow: row wrap;
width: calc(100vw - 100px);
padding: 0px 10px ;
`;

const HeaderText = styled.ul`
  display: flex;
  gap: 48px;
  list-style: none;

`;
const ListItem =styled.li`
   font-family: "Plus Jakarta Sans", serif;
   font-size: 18px;
   font-weight: bold;
   opacity: 48%;
   &:hover{
    opacity:100%;
   }
`;
const Button = styled.img`
/* Transparent/White/16% */
background: rgba(255, 255, 255, 0.16);
backdrop-filter: blur(8px);
/* Note: backdrop-filter has minimal browser support */
border-radius: 50%;

/* Inside auto layout */

`;
export default function Header() {
  return (
    <Container>
                <HeaderText>
                    <ListItem>Home</ListItem>
                    <ListItem>Browse</ListItem>
                    <ListItem>Kids</ListItem>
                    <ListItem>Support</ListItem>
                    <ListItem>FAQ</ListItem>
                </HeaderText>
                <div style={{display:'flex',
                    justifyContent:'center',
                    alignItems:'center',
                    gap: '5px'
                }}>
                    <Button src={search} alt="" />
                    <Button src={user} alt="" />
                </div>
    </Container>
  )
}
