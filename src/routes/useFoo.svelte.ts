import { loadFoo } from './foo.remote';

export async function useFoo() {
  let data = $derived(await loadFoo());

  return {
    get data() {
      return data;
    },
  };
}
