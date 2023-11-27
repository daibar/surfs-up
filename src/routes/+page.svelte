<script lang="ts">
	import { enhance } from '$app/forms';
	import type { PageData } from './create/$types';
	import { Label, Input, NumberInput, Button, Checkbox, A } from 'flowbite-svelte';
	import { Card } from 'flowbite-svelte';

	export let data: PageData;
</script>

<div class="flex justify-center">
	<Card class="my-10">
		<h1 class="text-2xl">Click the Spots button to get started!</h1>
	</Card>
</div>
