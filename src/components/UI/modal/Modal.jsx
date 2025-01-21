import { styled } from "@mui/material"
import { createPortal } from "react-dom"

export const Modal = ({children,onClose}) => {
  return (

      <>
  {createPortal(
      <StyledBackdrop onClick={onClose}>
    <StyledContent onClick={(e)=>e.stopPropagation()}>
        {children}
    </StyledContent>
  </StyledBackdrop>,

document.getElementById("modal")
)}
  </>
);
}
const StyledBackdrop =styled("div")(()=>({
position: "fixed",
top:"0",
left: "0",
width: "100%",
height: "100vh",
display: "flex",
justifyContent: "center",
alignItems: "center",
background: "rgba(0, 0, 0, 0.7)",
zIndex: "11"
}));
const StyledContent =styled("div")(()=>({
    padding:"40px",
    backgroundColor: "white",
    borderRadius: "20px",
}))