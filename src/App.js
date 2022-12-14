import "./App.css";
import Card from "./components/Card";
import ShoppingBgrnd from "./components/ShoppingBackground";
import "./grey.jpeg";

function App() {
  const arr = [
    {
      img: "https://img.freepik.com/free-photo/abstract-luxury-blur-grey-color-gradient-used-as-background-studio-wall-display-your-products_1258-52609.jpg?w=2000",
      name: "Samsung Galaxy S20",
      unit: "$",
      price: 450.0,
      button: "Add to Cart",
    },
    {
      img: "https://img.freepik.com/free-photo/abstract-luxury-blur-grey-color-gradient-used-as-background-studio-wall-display-your-products_1258-52609.jpg?w=2000",
      name: "OnePlus Nord CE2 5G",
      unit: "$",
      price: 400.0,
      button: "Add to Cart",
    },
    {
      img: "https://img.freepik.com/free-photo/abstract-luxury-blur-grey-color-gradient-used-as-background-studio-wall-display-your-products_1258-52609.jpg?w=2000",
      name: "Redmi Note 10 Pro 5G",
      unit: "$",
      price: 250.0,
      button: "Add to Cart",
    },
    {
      img: "https://img.freepik.com/free-photo/abstract-luxury-blur-grey-color-gradient-used-as-background-studio-wall-display-your-products_1258-52609.jpg?w=2000",
      name: "OnePlus Nord CE2 Lite",
      unit: "$",
      price: 450.0,
      button: "Add to Cart",
    },
    {
      img: "https://img.freepik.com/free-photo/abstract-luxury-blur-grey-color-gradient-used-as-background-studio-wall-display-your-products_1258-52609.jpg?w=2000",
      name: "Samsung S22 Ultra",
      unit: "$",
      price: 1500.0,
      button: "Add to Cart",
    },
    {
      img: "https://img.freepik.com/free-photo/abstract-luxury-blur-grey-color-gradient-used-as-background-studio-wall-display-your-products_1258-52609.jpg?w=2000",
      name: "Huwaei Honor 8x",
      unit: "$",
      price: 160.0,
      button: "Add to Cart",
    },
    {
      img: "https://img.freepik.com/free-photo/abstract-luxury-blur-grey-color-gradient-used-as-background-studio-wall-display-your-products_1258-52609.jpg?w=2000",
      name: "Redmi Note 10",
      unit: "$",
      price: 170.0,
      button: "Add to Cart",
    },
    {
      img: "https://img.freepik.com/free-photo/abstract-luxury-blur-grey-color-gradient-used-as-background-studio-wall-display-your-products_1258-52609.jpg?w=2000",
      name: "Samsung M33 5G",
      unit: "$",
      price: 220.0,
      button: "Add to Cart",
    },
  ];
  return (
    <div>
      <ShoppingBgrnd />
      <Card type={arr} />
    </div>
  );
}

export default App;
