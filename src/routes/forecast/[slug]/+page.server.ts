import type { PageServerLoad } from './$types';
import axios, { type AxiosResponse } from 'axios';
import { DateTime } from 'luxon';
import { STORMGLASS_API_KEY } from '$env/static/private';
import { invalidate } from '$app/navigation';

export const load = async ({ fetch, params }) => {
	const fetchSpot = async (id) => {
		const res = await fetch(`/api/spots/${id}`);
		const data = await res.json();
		return data;
	};

	const response = await fetchSpot(params.slug);
	const client = axios.create({
		baseURL: `https://api.stormglass.io/v2/weather`,
		headers: { Authorization: STORMGLASS_API_KEY }
	});

	console.log(
		`Querying stormglassio for ${response.name}, ${response.latitude}, ${response.longitude}`
	);
	const endDateTime = DateTime.now().plus({ days: 4 });
	const result = (await client.get('/point', {
		params: {
			lat: response.latitude,
			lng: response.longitude,
			params: 'swellHeight,windSpeed',
			end: endDateTime
		}
	})) as AxiosResponse;
	const swellHeight = buildChartTimeseries(result.data, 'swellHeight');
	const windSpeed = buildChartTimeseries(result.data, 'windSpeed');
	return { traces: { swellHeight, windSpeed }, spot: response };
};

function buildChartTimeseries(apiData, param): ChartPoint[] {
	return apiData.hours.map((d) => {
		return { x: d.time, y: d[param].noaa };
	});
}

type StormglassData = {
	hours: SwellData[];
};

type SwellData = {
	swellHeight: SwellHeight;
	time: string;
};

type SwellHeight = {
	noaa: number;
};

type ChartPoint = {
	x: number | string;
	y: number;
};
