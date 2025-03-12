
import noodleSoupImg from "./assets/noodleSoup.png";
import pumpinkSoupImg from "./assets/pumpinkSoup.png";



class Dish {
  constructor(name, img, description, price) {
    this.name = name;
    this.img = img;
    this.description = description;
    this.price = price;
  }

  createElement() {
    const dishContainer = document.createElement("div");
    dishContainer.classList.add("dish");

    const imgElement = document.createElement("img");
    imgElement.src = this.img;
    imgElement.alt = this.name;
    imgElement.classList.add("dishImage");

    const nameElement = document.createElement("p");
    nameElement.textContent = this.name;
    nameElement.classList.add("dishName");

    const descriptionElement = document.createElement("p");
    descriptionElement.textContent = this.description;
    descriptionElement.classList.add("dishDescription");

    const priceElement = document.createElement("p");
    priceElement.textContent = `$${this.price}`;
    priceElement.classList.add("dishPrice");

    dishContainer.appendChild(imgElement);
    dishContainer.appendChild(nameElement);
    dishContainer.appendChild(descriptionElement);
    dishContainer.appendChild(priceElement);

    return dishContainer;
  }
}

function menu() {
  const content = document.getElementById("content");
  content.innerHTML = "";
  content.className = "";

  content.classList.add("contentMenu");

  const dinner = document.createElement("p");
  dinner.classList.add("mealsName");
  dinner.textContent = "Dinner";

  const dish1 = new Dish(
    "Noodle Soup",
    noodleSoupImg,
    "A comforting bowl of hot broth with tender noodles, fresh vegetables, and aromatic herbs.",
    9.99
  );
  // const dish2 = new Dish(
  //   "Pumpkin Soup",
  //   pumpinkSoupImg,
  //   "A creamy and rich pumpkin soup, seasoned with warm spices and served with a side of crispy bread.",
  //   8.49
  // );

  content.appendChild(dinner)
  content.appendChild(dish1.createElement());
  // content.appendChild(dish2.createElement());
}



export { menu };
