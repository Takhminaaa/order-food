import { styled } from "@mui/material"
import { MealItemForm } from "./MealItemForm"

export const MealItem = ({title,description,price}) => {
  return (
    <Container>
      <StyledMealItem>
     <h2>{title}</h2>
    <p>{description}</p>
    <b>$ {price}</b>
      </StyledMealItem>
      <div>
        <MealItemForm />
      </div>
    </Container>
  )
}
const Container =styled("li")(()=>({
  display: "flex",
  justifyContent: "space-between",
  borderBottom: "2px solid #d6d6d6",
  marginTop: "10px",
}));
const StyledMealItem =styled("div")(()=>({
  display: "flex",
  flexDirection: "column",
  gap: "4px",
  marginBottom: "20px",

  
  "& h2": {
    fontWeight: "600",
    fontSize: "18px",
    lineHeight: "27px",
    marginTop: "24px",
  },
  "& p":{
    fontStyle:"italic",
    fontWeight: "400",
    fontSize: "16px",
    
  },
  "& b":{
    fontWeight:"700",
    fontSize: "20px",
    color: "#ad5502"
  }
}))