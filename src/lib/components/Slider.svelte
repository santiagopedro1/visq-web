<script lang="ts">
	import { Slider } from 'bits-ui';

	let { value = $bindable() } = $props();
</script>

<div class="w-full">
	<Slider.Root
		type="single"
		bind:value
		min={-1}
		max={1}
		step={0.05}
		class="relative flex w-full touch-none items-center select-none"
	>
		{#snippet children()}
			<span class="bg-dark-10 relative h-2 w-full grow cursor-pointer overflow-hidden">
				<Slider.Range class="absolute h-full " />
			</span>
			<Slider.Thumb index={0} class="h-5 w-1.5 cursor-pointer bg-black" />
		{/snippet}
	</Slider.Root>
</div>
