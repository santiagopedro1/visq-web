<script lang="ts">
	import { Handle, Position, useConnection, type NodeProps } from '@xyflow/svelte';

	let { id }: NodeProps = $props();

	import { global } from '$lib/global.svelte';

	const connection = useConnection();

	let isTarget = $derived(
		connection.current.inProgress && connection.current.fromHandle?.nodeId !== id
	);

	let label = $derived(global.connecting ? (isTarget ? 'Drop here' : 'Drag to connect') : 'Move');
</script>

<div class="customNode">
	<div class="customNodeBody">
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

		{label}
	</div>
</div>

<style>
	.customNodeBody {
		width: 150px;
		height: 80px;
		border: 3px solid black;
		position: relative;
		overflow: hidden;
		border-radius: 10px;
		display: flex;
		justify-content: center;
		align-items: center;
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
