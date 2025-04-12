<script lang="ts">
	import { onMount } from 'svelte';
	import '../app.css';

	import '@xyflow/svelte/dist/style.css';

	let { children } = $props();

	onMount(() => {
		// get w and h from window
		const w = window.innerWidth;
		const h = window.innerHeight;

		// set the height of the main div to 100% of the window height
		document.querySelector('main')!.style.height = `${h}px`;

		// set the width of the main div to 100% of the window width
		document.querySelector('main')!.style.width = `${w}px`;
	});
</script>

<main class="h-96">
	{@render children()}
</main>
