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
		DropdownHeader,
		Footer,
		FooterCopyright
	} from 'flowbite-svelte';
	import { ChevronDownSolid, SearchOutline } from 'flowbite-svelte-icons';
	import { sineIn } from 'svelte/easing';
	import GitHubIcon from '$lib/assets/github-icon.svg';
	import SurfsUpIcon from '$lib/assets/surfsup-icon.svg';
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
		'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-lg';
	let divClass = 'w-full pr-8';
	let ulClass = 'flex flex-end';
	let activeClass =
		'text-green-700 dark:text-green-300 hover:text-green-900 dark:hover:text-green-500';
</script>

<header>
	<div class="flex mx-0 p-0 justify-left">
		<Navbar class="flex items-left justify-left">
			<div class="flex flex-row gap-x-5">
				<a href="/">
					<img class="dark:invert ml-2" src={SurfsUpIcon} alt="surfsup-icon" width="50" height="50" />
				</a>
				<Button {activeClass}
					>Spots<ChevronDownSolid class="w-3 h-3 ml-2 text-white dark:text-white" /></Button
				>
				<Dropdown>
					{#each data.spots as { name, id }}
						<DropdownItem href="/forecast/{id}">{name}</DropdownItem>
					{/each}
					<DropdownItem href="/create">Create Spot</DropdownItem>
				</Dropdown>
			</div>
			<DarkMode btnClass={darkmodebtn} />
		</Navbar>
	</div>
</header>

<div class="flex px-4 mx-auto w-full dark:bg-gray-800">
	<main class="mt-10 w-full mx-auto">
		<slot />
	</main>
</div>
<Footer footerType="default">
	<div class="flex justify-center items-center gap-x-3">
		<FooterCopyright href="https://dannyai.bar" by="Danny Aibar™" />
		<a href="https://github.com/daibar/surfs-up">
			<img class="dark:invert" src={GitHubIcon} alt="github-icon" width="25" height="25" />
		</a>
	</div>
</Footer>
