import { writable, derived } from 'svelte/store';

// localStorage
const getCartStorage = () => {
  return localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
}
export const setCartStorage = (cartValues) => {
  localStorage.setItem('cart', JSON.stringify(cartValues));
}

//cart
const cart = writable(getCartStorage());

// cart total
export const cartTotal = derived(cart, $cart => {
  let total = $cart.reduce((acc, curr) => acc + curr.amount * curr.price, 0);
  return total.toFixed(2);
})

// local functions
const remove = (id, items) => {
 return items.filter(item => item.id !== id);
}

const updateAmount = (id, items, action) => {
  return items.map(item => {
    let newAmount;
    if (action === 'inc') newAmount = item.amount + 1;
    else if (action === 'dec') newAmount = item.amount - 1;
    else newAmount = item.amount;
    return item.id === id ? {...item, amount: newAmount} : {...item};
  })
}

// global functions
export const removeItem = id => {
  cart.update(storeValues => {
    return remove(id, storeValues);
  })
}

export const increaseAmount = id => {
  cart.update(storeValues => {
    return updateAmount(id, storeValues, 'inc');
  })
}

export const decreaseAmount = (id, amount) => {
  cart.update(storeValues => {
    let cart;
    if (amount === 1) cart = remove(id, storeValues);
    else cart = updateAmount(id, storeValues, 'dec');
    return [...cart];
  })
}

export const addToCart = product => {
  cart.update(storeValues => {
    const { id } = product;
    const item = storeValues.find(item => item.id === id);
    let cart;
    if (item) cart = updateAmount(id, storeValues, 'inc');
    else {
      const newItem = {...product, amount: 1};
      cart = [...storeValues, newItem];
    }
    return cart;
  });
}

export default cart;