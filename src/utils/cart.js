export const getCart = async () => {
  let mail = localStorage.getItem("mail");
  let endpoint;
  if (mail) endpoint = mail.replace("@", "").replace(".", "");
  let url =
    "https://crudcrud.com/api/5dcc6c738ca44a248101a8b220810894/cart" + endpoint;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const addCart = async (item, quantity, increment) => {
  const mail = localStorage.getItem("mail");
  console.log();
  let endpoint;
  if (mail) endpoint = mail.replace("@", "").replace(".", "");
  const cart = await getCart();
  const existingItemIndex = cart.findIndex(
    (cartItem) => item.id === cartItem.id
  );
  const updatedItem = {
    id: item.id,
    title: item.title,
    imageUrl: item.imageUrl,
    price: item.price,
    quantity: quantity,
  };
  let method;
  let url;
  if (existingItemIndex >= 0) {
    if (increment) {
      updatedItem.quantity += quantity;
    }
    url =
      "https://crudcrud.com/api/5dcc6c738ca44a248101a8b220810894/cart" +
      endpoint +
      "/" +
      cart[existingItemIndex]._id;
    method = "PUT";
  } else {
    url =
      "https://crudcrud.com/api/5dcc6c738ca44a248101a8b220810894/cart" +
      endpoint;
    method = "POST";
  }
  try {
    await fetch(url, {
      method: method,
      body: JSON.stringify(updatedItem),
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const removeItem = async (id) => {
  const mail = localStorage.getItem("mail");
  let endpoint;
  if (mail) endpoint = mail.replace("@", "").replace(".", "");
  const cart = await getCart();
  const existingItemIndex = cart.findIndex((cartItem) => id === cartItem.id);
  const url =
    "https://crudcrud.com/api/5dcc6c738ca44a248101a8b220810894/cart" +
    endpoint +
    "/" +
    cart[existingItemIndex]._id;
  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    await response.json();
  } catch (error) {
    console.log(error);
  }
};

export const clearCart = async () => {
  const mail = localStorage.getItem("mail");
  let endpoint;
  if (mail) endpoint = mail.replace("@", "").replace(".", "");
  const cart = await getCart();
  await cart.forEach(async (item) => {
    const url =
      "https://crudcrud.com/api/5dcc6c738ca44a248101a8b220810894/cart" +
      endpoint +
      "/" +
      item._id;
    try {
      await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.log(error);
    }
  });
};
