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
	const response = await getFetch(`${WIKI_URL}?${params}`);

	return articles;
}

export async function fetchRandom(limit = 10) {
	const params = new URLSearchParams();

	params.append("action", "query");
	params.append("format", "json");
	params.append("list", "random");
	params.append("formatversion", "2");
	params.append("rnnamespace", "0");
	params.append("rnlimit", limit);
	const response = await getFetch(params);
	return response.query.random;
}

const MAX_IDS = 50;

export async function fetchMeta(pageIds) {
	const results = [];
	for (let i = 0; i < pageIds.length; i+= MAX_IDS ) {
		const start = i;
		const end = i + Math.min(MAX_IDS, pageIds.length - start);

		const params = new URLSearchParams();
		params.append("action", "query");
		params.append("format", "json");
		params.append("prop", "info");
		params.append("pageids", pageIds.slice(start, end).join("|"));
		params.append("inprop", "url");

		const response = await getFetch(params);
		results.push(Object.values(response.query.pages));
	}
	return results.flat();
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
