import { styled } from "@mui/material"
import { HeaderCartButton } from "./HeaderCartButton"
export const Header = () => {
  return (
    <StyledHeader>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
    </StyledHeader>
  )
}
const StyledHeader=styled("header")(()=>({
    position: "fixed",
    top: "0",
    left: "0",
    zIndex: "10",
width:"100%",
height:"5rem",
backgroundColor: "#8A2B06",
display:"flex",
justifyContent:"space-between",
alignItems:"center",
padding:"0px 10%",
color: "white",

"& h1": {
    fontSize: "2.4rem",
    fontWeight: "600",
    
}
}))