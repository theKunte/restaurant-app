import lemon from "./images/lemondessert.jpg";
import bruchetta from "./images/bruchetta.svg";
import greeksalad from "./images/greeksalad.jpg";
const menuItmes = [
  {
    id: 1,
    title: "Greek Salad",
    price: 12.99,
    image: greeksalad,
    description:
      "The famous greek salad of crispy lettuce, peppers,olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons",
  },

  {
    id: 2,
    title: "Bruchetta",
    price: 5.99,
    image: bruchetta,
    description:
      "Our Bruchetta is made from grilled bread that has been smeared with gralic and seasoned with salt and olive oil",
  },
  {
    id: 3,
    title: "Lemon Dessert",
    price: 5.99,
    image: lemon,
    description:
      "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authenic as can be imagined",
  },
];

export default menuItmes;
