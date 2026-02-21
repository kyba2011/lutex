export const getCart = () => {
  const cart = localStorage.getItem("cart");
  return cart ? JSON.parse(cart) : [];
};

export const addToCart = (productId) => {
  const cart = getCart();
  if (!cart.includes(productId)) {
    cart.push(productId);
    localStorage.setItem("cart", JSON.stringify(cart));
  }
};

export const removeFromCart = (productId) => {
  const cart = getCart();
  const newCart = cart.filter((id) => id !== productId);
  localStorage.setItem("cart", JSON.stringify(newCart));
};

export const isInCart = (productId) => {
  const cart = getCart();
  return cart.includes(productId);
};

export const getFavorites = () => {
  const favorites = localStorage.getItem("favorites");
  return favorites ? JSON.parse(favorites) : [];
};

export const addToFavorites = (productId) => {
  const favorites = getFavorites();
  if (!favorites.includes(productId)) {
    favorites.push(productId);
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }
};

export const removeFromFavorites = (productId) => {
  const favorites = getFavorites();
  const newFavorites = favorites.filter((id) => id !== productId);
  localStorage.setItem("favorites", JSON.stringify(newFavorites));
};

export const isInFavorites = (productId) => {
  const favorites = getFavorites();
  return favorites.includes(productId);
};
