import { writable, derived } from 'svelte/store';
import localProducts from '../localProducts';
const store = writable(flattenProducts([...localProducts]));

function flattenProducts(data) {
  return data.map(data => {
    let image = data.image.url;
    return { ...data, image};
  })
}

export const featuredStore = derived(store, $featured => {
  return $featured.filter(item => item.featured)
});

export default store;