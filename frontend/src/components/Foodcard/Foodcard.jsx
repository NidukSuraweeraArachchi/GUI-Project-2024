import FoodCard from './Foodcard';

const App = () => {
  return (
    <div className="food-card-container">
      <FoodCard
        image="path/to/image.jpg"
        name="Hand Cream"
        price="2.99"
        deal={true}
      />
      <FoodCard
        image="path/to/image.jpg"
        name="Herbal Tea"
        price="3.99"
        deal={true}
      />
    </div>
  );
};
