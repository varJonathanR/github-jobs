export const JOBS_API_KEY = import.meta.env.VITE_JOBS_API_KEY;
export const JOBS_API_ID = import.meta.env.VITE_JOBS_API_ID;
export const JOBS_API_URL = `https://api.adzuna.com/v1/api/jobs/au/search/1?app_id=${JOBS_API_ID}&app_key=${JOBS_API_KEY}&results_per_page=50&content-type=application/json&what=`;

export const STATES_API_URL = `https://rawcdn.githack.com/kamikazechaser/administrative-divisions-db/master/api/`;

export function FetchAPI(apiURL, setData, setLoading, setError) {
	setLoading(true);

	fetch(apiURL)
		.then(response => response.json())
		.then(data => setData(data))
		.catch(error => setError(error))
		.finally(() => setLoading(false));
}