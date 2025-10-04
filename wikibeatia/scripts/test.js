import { fetchRandom, fetchMeta } from '../wiki-client/fetch_food_pages.js';

const randoms = await fetchRandom();
const data = await fetchMeta(randoms.map((r) => r.id));
console.log(data);
