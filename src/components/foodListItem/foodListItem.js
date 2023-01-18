import Card from "../card/card";

function FoodListItem(props) {
  return (
    <div>
      <Card
        image={props.foodData.image}
        alt={props.foodData.title}
        title={props.foodData.title}
        description={props.foodData.description}
        titlebutton={props.foodData.titlebutton}
      />
    </div>
  );
}

export default FoodListItem;
