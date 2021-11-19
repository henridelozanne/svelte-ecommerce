import { writable } from 'svelte/store';

const globalStore = writable({
  sidebar: false,
  cart: true,
  alert: false,
});

const store = {
  subscribe: globalStore.subscribe,
  toggleItem: (item, value) => {
    globalStore.update(storeValues => {
      return {...globalStore, [item]: value}
    })
  },
}

export default store;