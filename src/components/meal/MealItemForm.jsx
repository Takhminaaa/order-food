import { useState } from "react";
import Button from "../UI/Button";
import { styled } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

export const MealItemForm = () => {
    const [amount, setAmount] = useState(1);
    const changeHandler = (e) => {
      setAmount(e.target.value);
    };
  
    const addNewMeal = () => {
      onAdd(amount);
      setAmount(1);
    };
  
  return (
    <Container>
    <InputBlock>
      <label >Amount </label>
      <input
        value={amount}
        onChange={changeHandler}
        type="number"
        min={1}
      />
    </InputBlock>
    <Button variant="contained" onClick={addNewMeal}>
        <AddIcon />
      Add
    </Button>
  </Container>
  )
}

const Container =styled("div")(()=>({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",

}));
const InputBlock =styled("div")(()=>({
    marginBottom: "12px",
   
  
    "& label":{
        fontSize: "18px",
        color: "#222222",
        marginRight: "20px",
        fontWeight: "600", 
    },
    "& input":{
        border: "1px solid #d6d6d6",
        borderRadius: "6px",
        width: "60px",
        height: "32px",
        outline: "none",
        padding: "4px 12px",
        fontSize: "16px",
        fontFamily: "inherit",
    }
}))
