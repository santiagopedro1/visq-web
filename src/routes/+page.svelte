<script lang="ts">
	import { ConnectionLineType, MarkerType, SvelteFlow, Background, type Node, type Edge } from '@xyflow/svelte';

	import CustomNode from '$lib/components/CustomNode.svelte';

	import { initialNodes, initialEdges } from '$lib/global.svelte';
	import FloatingEdge from '$lib/components/FloatingEdge.svelte';

	import { global } from '$lib/global.svelte';

	let nodes = $state.raw<Node[]>(initialNodes);
	let edges = $state.raw<Edge[]>(initialEdges);

	const nodeTypes = {
		custom: CustomNode
	};

	const edgeTypes = {
		floating: FloatingEdge
	};

	const defaultEdgeOptions = {
		type: 'floating',
		markerEnd: {
			type: MarkerType.ArrowClosed,
			width: 20,
			height: 20
		}
	};
</script>

<div class="flex items-center justify-center">
	<button
		class="cursor-pointer p-2 text-xl text-white {global.connecting ? 'bg-green-500' : 'bg-black'}"
		onclick={() => (global.connecting = !global.connecting)}>toggle connecting</button
	>
</div>

<SvelteFlow
	bind:nodes
	{nodeTypes}
	bind:edges
	{edgeTypes}
	{defaultEdgeOptions}
	connectionLineType={ConnectionLineType.Straight}
	fitView
>
	<Background />
</SvelteFlow>
