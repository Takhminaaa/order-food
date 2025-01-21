import { styled } from "@mui/material"
import { MealItem } from "./MealItem"
import { product } from "../../utils/constants/constants"

export const Meal = () => {
  return (
    <StyledSection>
        <ul>
            {product.map((item)=>(

            <MealItem key={item.id}
             item={item.description}
             description={item.description}
             title={item.title}
             price={item.price}
             />
            ))}
        </ul>

    </StyledSection>
  )
}

const StyledSection =styled("div")(()=>({
  backgroundColor: "#ffff",
  width: "80%",
  margin: "50px auto",
  padding: "40px",
  borderRadius: "16px",
  marginTop: "40px",
  "& ul":{
    listStyle:"none"
    
  }
}))