<script lang="ts">
	import { Handle, Position, useConnection, type NodeProps } from '@xyflow/svelte';

	import Slider from '$lib/components/Slider.svelte';

	let { id, data }: NodeProps = $props();

	import { global } from '$lib/global.svelte';

	const connection = useConnection();

	let isTarget = $derived(
		connection.current.inProgress && connection.current.fromHandle?.nodeId !== id
	);

	let label = $derived(isTarget ? 'Drop here' : 'Drag to connect');
</script>

<div class="customNode">
	<div class="customNodeBody bg-gray-100">
		{#if !connection.current.inProgress}
			<Handle
				class="customHandle {global.connecting ? '' : 'sr-only'}"
				position={Position.Right}
				type="source"
				style="z-index: 1;"
			/>
		{/if}

		<Handle
			class="customHandle global.connecting ? '' : 'sr-only'}"
			position={Position.Left}
			type="target"
			isConnectableStart={false}
		/>

		<div class="flex w-full flex-col items-center gap-1 text-center">
			<div class="h-8 w-full text-center">
				{#if global.connecting}
					{label}
				{:else}
					<Slider bind:value={data.value} />
					<span class="text-xs">{data.value}</span>
				{/if}
			</div>
			{data.name}
		</div>
	</div>
</div>

<style>
	.customNodeBody {
		width: 130px;
		padding: 8px 0px 0px 0px;
		border: 3px solid black;
		position: relative;
		overflow: hidden;
		display: flex;
		justify-content: center;
		font-weight: bold;
	}

	:global(div.customHandle) {
		width: 100%;
		height: 100%;
		background: blue;
		position: absolute;
		top: 0;
		left: 0;
		border-radius: 0;
		transform: none;
		border: none;
		opacity: 0;
	}
</style>
