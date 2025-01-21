import { styled } from "@mui/material"
import { Modal } from "../UI/modal/Modal"
import { CartItem } from "./CartItem"
import { cartItem } from "../../utils/constants/constants"

export const Cart = () => {
  return (
    <Modal>
        <StyledCartContent>
        <ul>
            {cartItem.map((item)=>(

            <CartItem key={item.id} title={item.title} price={item.price} amount={item.amount}/>
            ))}
        </ul>
        </StyledCartContent>

    </Modal>
  )
}
const StyledCartContent =styled("div")(()=>({
    width: "671px",
    height: "437px",
    borderRadius: "20px",
    padding: "40px 32px",
   
    "& ul":{
        listStyle: "none",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    }
}))