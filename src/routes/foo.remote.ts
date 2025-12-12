import { query } from '$app/server';

export const loadFoo = query(async () => {
  return Math.random();
});
