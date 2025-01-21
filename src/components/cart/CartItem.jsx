import { styled } from "@mui/material";
import Button from "../UI/Button";
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import AddIcon from '@mui/icons-material/Add';

export const CartItem = ({title,price,amount}) => {
  return (
    <StyledListStyle>
      <StyledContainerName>
        <h2>{title}</h2>
        <WrapperPrice>
          <b>${price} </b>
          <span>x{amount}</span>
        </WrapperPrice>
      </StyledContainerName>
      <WrapperButtons>
        <Button
          borderStyle="none"
          variant="text"
          onClick={() => onDecrease(id)}
        >
          <HorizontalRuleIcon style={{ width: "15px" }} />
        </Button>
        <Button
          borderStyle="none"
          variant="text"
          onClick={() => onIncraese(id)}
        >
          <AddIcon style={{ width: "15px" }} />
        </Button>
      </WrapperButtons>
    </StyledListStyle>
  )
};
const StyledListStyle =styled("li")(()=>({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "2px solid #d6d6d6",
    paddingBottom: "24px",
}));

const StyledContainerName =styled("div")(()=>({
    display :"flex",
    flexDirection: "column",
    "& h2": {
        color: "#222",
        fontSize: "20px",
        fontWeight:"600",
    }
}));

const WrapperPrice = styled("div")(()=>({
    display: "flex",
  gap: "47px",
  
  "& b":{
    color: "#ad5502",
    fontSize: "18px",
    fontWeight: "600",
  },
  "& span":{
    width: "46px",
  height: "2rem",
  border: "1px solid #d6d6d6",
  display:"flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "6px",
  }
}))
const WrapperButtons = styled("div")(()=>({
    display: "flex",
    gap: "20px",
}));
 