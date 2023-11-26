<script>
	import { invalidate } from '$app/navigation';
	import { Chart, Card, A, Button, Dropdown, DropdownItem } from 'flowbite-svelte';
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';

	export let data;
	$: options = {
		chart: {
			height: '400px',
			maxWidth: '100%',
			type: 'area',
			fontFamily: 'Inter, sans-serif',
			dropShadow: {
				enabled: false
			},
			toolbar: {
				show: false
			}
		},
		tooltip: {
			enabled: true,
			x: {
				show: false
			}
		},
		fill: {
			type: 'gradient',
			gradient: {
				opacityFrom: 0.55,
				opacityTo: 0,
				shade: '#1C64F2',
				gradientToColors: ['#1C64F2']
			}
		},
		dataLabels: {
			enabled: false
		},
		stroke: {
			width: 6
		},
		grid: {
			show: false,
			strokeDashArray: 4,
			padding: {
				left: 2,
				right: 2,
				top: 0
			}
		},
		series: [
			// {
			// 	name: 'NOAA Swell Height',
			// 	data: data.traces.swellHeight,
			// 	color: '#1A56DB'
			// },
			{
				name: 'NOAA Wind Speed',
				data: data.traces.windSpeed,
				color: '#1A56DB'
			}
		],
		xaxis: {
			show: true,
			labels: {
				show: true
			},
			axisBorder: {
				show: false
			},
			axisTicks: {
				show: false
			}
		},
		yaxis: {
			show: true
		}
	};
</script>

<div class="flex justify-between">
	<div>
		<h5 class="leading-none text-3xl font-bold text-gray-900 dark:text-white pb-2">
			Swell Height {data.spot.name}
		</h5>
	</div>
</div>
<Chart {options} />
<div
	class="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between"
/>
