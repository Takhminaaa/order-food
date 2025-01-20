import { styled } from "@mui/material"
import basketImage from "../../assets/icons/header-cart.svg"
import Button from "../UI/Button"
export const HeaderCartButton = () => {
  return (
    <StyledButton variant="logout">
        <div>

    <img src={basketImage} alt="basketImage" />
    <span>Your cart</span>
        </div>
    <Badge>7</Badge>
    
</StyledButton>
  )
}
const StyledButton =styled(Button)(()=>({
width: "249px",
height: "59px",
display: "flex",
gap: "24px",
borderRadius: "30px",
"& div": {
    display: "flex",
    gap: "12px",
}
}));
const Badge =styled("span")(()=>({
    backgroundColor: "#8A2B06",
    fontWeight: "700",
    padding: "4px 20px",
    borderRadius: "30px",
    fontSize: "20px",
}))