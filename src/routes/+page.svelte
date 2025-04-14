<script lang="ts">
	import { ConnectionLineType, MarkerType, SvelteFlow, Background, type Node, type Edge } from '@xyflow/svelte';

	import CustomNode from '$lib/components/CustomNode.svelte';

	import { Nodes, Edges } from '$lib/global.svelte';
	import FloatingEdge from '$lib/components/FloatingEdge.svelte';

	import { global } from '$lib/global.svelte';

	let nodes = $state.raw<Node[]>(Nodes);
	let edges = $state.raw<Edge[]>(Edges);

	const svelteFlowProps = {
		nodeTypes: {
			custom: CustomNode
		},
		edgeTypes: {
			floating: FloatingEdge
		},
		defaultEdgeOptions: {
			type: 'floating',
			markerEnd: {
				type: MarkerType.ArrowClosed,
				width: 20,
				height: 20
			}
		},
		connectionLineType: ConnectionLineType.Straight,
		fitView: true
	};
</script>

<div class="flex items-center justify-center gap-8">
	<button
		class="cursor-pointer p-2 text-xl text-white {global.connecting ? 'bg-green-500' : 'bg-black'}"
		onclick={() => (global.connecting = !global.connecting)}>toggle connecting</button
	>
</div>

<SvelteFlow
	bind:nodes
	bind:edges
	{...svelteFlowProps}
>
	<Background />
</SvelteFlow>
