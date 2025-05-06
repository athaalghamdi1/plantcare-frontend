export default async function sendRequest(url, method = 'GET', payload) {
	const token = localStorage.getItem('token');
	const options = { method };
    console.log('token',token)
	if (payload) {
		options.headers = { 'Content-Type': 'application/json' };
		options.body = JSON.stringify(payload);
	}

	if (token) {
		options.headers = options.headers || {};
		options.headers.Authorization = `Bearer ${token}`;
	}

	try {
		const res = await fetch(`http://127.0.0.1:8000${url}`, options);
		console.log(res)
		if (!res.ok) {
			console.log("res is not ok")
			const text = await res.text();
			console.error("Response not OK:", res.status, text);
			throw new Error(`Request failed with status ${res.status}`);
		}

		const contentType = res.headers.get("content-type");
		if (contentType && contentType.includes("application/json")) {
			return await res.json();
		} else {
			const text = await res.text();
			console.warn("Expected JSON, got:", text);
			throw new Error("Response is not valid JSON");
		}
	} catch (err) {
		console.error("Error in send-request:", err);
		throw err;
	}
}
