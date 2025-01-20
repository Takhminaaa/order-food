import { hexToRgb, styled } from "@mui/material";
import MealsBannerImage from "../../assets/images/meals-banner.png"
export const MealsSummary = () => {
  return (
    <section>
        <WrrapperImage>
            <img src={MealsBannerImage} alt="MealsBannerImage" />
        </WrrapperImage>
        <MealsSummaryContainer>
            <h2>Delicious Food, Delivered To You</h2>
            <p>Choose your favorite meal from our broad selection of available meals and enjoy a delicious
            lunch or dinner at home.</p>
            <p>All our meals are cooked with high-quality ingredients, just-in-time and of course by
             experienced chefs!</p>
        </MealsSummaryContainer>
    </section>
  )
};
const WrrapperImage=styled("div")(()=>({

    "& img": {
        width: "100%",
        height:"25rem",
    }
}));
const MealsSummaryContainer = styled("div")(()=>({
    textAlign: "center",
    maxWidth: "45rem",
    width: "100%",
    margin: "0 auto",
    backgroundColor: "#383838",
    color: "white",
    borderRadius: "16px",
    padding: "1rem",
    boxShadow: "0px 6px 16px 0px #0000004d",
    marginTop: "-6rem",
    position: "relative",
    "& h2": {
        fontSize: "2rem",
    }
}))