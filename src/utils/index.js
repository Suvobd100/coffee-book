import toast from "react-hot-toast";

// 2. Get all Coffees from local storage
const getAllFavorites = () => {
  const allLocalStorageCoffeeData = localStorage.getItem("favorites");

  if (allLocalStorageCoffeeData) {
    const favorites = JSON.parse(allLocalStorageCoffeeData);
    console.log(favorites);
    return favorites;
  } else {
    console.log([]);
    return [];
  }
};

// 1. Add a Coffee to local storage
const addFavorite = (coffee) => {
  // Get all previously Favorite save Coffee data

  const favorites = getAllFavorites();
  const isExist = favorites.find((item) => item.id == coffee.id);
  if (isExist) {
    return toast.error("This Coffee already exists!");
  }

  //   console.log(favorites);
  favorites.push(coffee);
//   add local storage
  localStorage.setItem("favorites", JSON.stringify(favorites));
  toast.success("Successfully added The Coffee!");
};

// 3. Remove a Coffee from local storage
const removeFavorite = (id) => {
  // Get all previously Favorite save Coffee data
  const favorites = getAllFavorites();

  const remaining = favorites.filter((coffee) => coffee.id != id);
  //   add local storage delete data
  localStorage.setItem("favorites", JSON.stringify(remaining));
  toast.success("Successfully Remove The Coffee!");
};

export { addFavorite, getAllFavorites, removeFavorite };
