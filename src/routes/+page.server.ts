import axios, { type AxiosResponse } from 'axios'
import { STORMGLASS_API_KEY } from '$env/static/private';

const client = axios.create({
    baseURL: 'https://api.stormglass.io/v2/weather/point?lat=32.841720&lng=-117.282648&params=swellHeight',
    headers: { Authorization: STORMGLASS_API_KEY}
})

export const load = async ({ params }) => {
    const response = await client.get('') as AxiosResponse
    const swellTrace = buildSwellChartTimeseries(response.data)
    return { trace: swellTrace };
};

function buildSwellChartTimeseries(apiData: StormglassData): ChartPoint[] {
    return apiData.hours.map((d) => {
        return { x: d.time, y: d.swellHeight.noaa }
    })
}



type StormglassData = {
    hours: SwellData[]
}

type SwellData = {
    swellHeight: SwellHeight
    time: string
}

type SwellHeight = {
    noaa: number
}

type ChartPoint = {
    x: number | string,
    y: number,

}
