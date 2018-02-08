export const shortenUrl = (url) => {
	const apiUrl = 'https://www.googleapis.com/urlshortener/v1/url?key=AIzaSyDea5uP9WFunTnECmoUGFi32BxxoHFckOQ';
	const opts = {
		method : 'POST',
		body : JSON.stringify({"longUrl" : url}),
		headers : new Headers({
			'Content-Type' : 'application/json'
		})
	};
	return fetch(apiUrl, opts)
		.then(response => response.json())

};
