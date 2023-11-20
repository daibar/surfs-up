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
		Input,
		Dropdown,
		DropdownItem,
		DropdownDivider,
		DropdownHeader
	} from 'flowbite-svelte';
	import { ChevronDownSolid, SearchOutline } from 'flowbite-svelte-icons';
	import { sineIn } from 'svelte/easing';
	import type { LayoutData, PageData } from './$types';
	export let data: LayoutData;
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
	let activeClass =
		'text-green-700 dark:text-green-300 hover:text-green-900 dark:hover:text-green-500';
</script>

<header>
	<div class="flex md:order-2">
		<Navbar>
			<div class="hidden relative md:block">
				<Button {activeClass}
					>Spots<ChevronDownSolid class="w-3 h-3 ml-2 text-white dark:text-white" /></Button
				>
				<Dropdown>
					{#each data.spots as { name, id }}
						<DropdownItem href="/forecast/{id}">{name}</DropdownItem>
					{/each}
						<DropdownItem href="/createSpot">Create Spot</DropdownItem>
				</Dropdown>
				<div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none" />
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
