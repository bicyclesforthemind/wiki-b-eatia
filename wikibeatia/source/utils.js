const CATEGORY = 'foods';

const WIKI_URL = 'https://en.wikipedia.org/w/api.php'

async function getFetch(params) {
	const response = await fetch(`${WIKI_URL}?${params}`, {
		headers: {
			'User-Agent': 'Wiki-b-eatia/0.1 (hi@gorman.zone) node/24.9.0',
		}
	});
	return await response.json();
}

export async function fetchArticle(article) {
	const params = new URLSearchParams();
	params.append("action", "query");
	params.append("prop", "info|extracts|pageprops");
	params.append("titles", title);
	params.append("rvprop", "ids|timestamp");
	params.append("explaintext", 1);
	params.append("inprop", "url");
	const response = await fetch(`${WIKI_URL}?${params}`);

	return articles;
}

export async function fetchRandom() {
	const params = new URLSearchParams();

	params.append("action", "query");
	params.append("format", "json");
	params.append("list", "random");
	params.append("formatversion", "2");
	params.append("rnnamespace", "0");
	params.append("rnlimit", "10");
	const response = await getFetch(params);
	return response.query.random;
}

export async function fetchMeta(pageIds) {
	const params = new URLSearchParams();
	params.append("action", "query");
	params.append("format", "json");
  params.append("prop", "info|pageprops");
  params.append("pageids", pageIds.join("|"));
  params.append("rvprop", "ids|timestamp|content");
	params.append("rvslots", "main");
  params.append("inprop", "url");

	const response = await getFetch(params);
	return Object.values(response.query.pages).map(({length, title}) => ({length, title}));
}

export async function fetchFoodCategories() {
	const params = new URLSearchParams();
	params.append("action", "query");
	params.append("format", "json");
	params.append("list", "categorymembers");
	params.append("formatversion", "2");
	params.append("title", "Category%3Afood");
	params.appned("cmtype","subcat");
	const response = await fetch(`${WIKI_URL}?${params}`);
	console.log(response);
}
