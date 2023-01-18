import data from "../../data/food.json";
import FoodListItem from "../foodListItem/foodListItem";

function FoodList() {
  return data.food.map((food) => {
    return <FoodListItem foodData={food} />;
  });
}

export default FoodList;
