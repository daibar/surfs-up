<script lang="ts">
	import '../app.postcss';
	import { onMount } from 'svelte';
	import {
		DarkMode,
		Navbar,
		NavLi,
		NavUl,
		NavBrand,
		NavHamburger,
		Button,
		Input
	} from 'flowbite-svelte';
	import { SearchOutline } from 'flowbite-svelte-icons';
	import { sineIn } from 'svelte/easing';
	let transitionParams = {
		x: -320,
		duration: 200,
		easing: sineIn
	};
	let width: number;
	let backdrop: boolean = false;
	let activateClickOutside = true;
	onMount(() => {});
	let spanClass = 'pl-2 self-center text-md text-gray-900 whitespace-nowrap dark:text-white';
	let darkmodebtn =
		'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-lg p-2.5 fixed right-2 top-12  md:top-3 md:right-2 z-50';
	let divClass = 'w-full md:block md:w-auto pr-8';
	let ulClass =
		'flex flex-col flex-row-reverse p-4 mt-4 md:flex-row-reverse md:space-x-8 md:mt-0 md:text-lg md:font-medium';
</script>

<header>
	<div class="flex md:order-2">
		<Navbar>
			<div class="hidden relative md:block">
				<div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
					<SearchOutline class="w-4 h-4" />
				</div>
				<Input id="search-navbar" class="pl-10" placeholder="Search..." />
			</div>
			<NavUl {divClass} {ulClass}>
				<NavLi href="https://github.com/daibar/surfs-up">GitHub</NavLi>
				<DarkMode btnClass={darkmodebtn} />
			</NavUl>
		</Navbar>
	</div>
</header>

<div class="flex px-4 mx-auto w-full dark:bg-gray-800">
	<main class="mt-10 lg:ml-72 w-full mx-auto">
		<slot />
	</main>
</div>
