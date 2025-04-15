<script lang="ts">
	import {
		ConnectionLineType,
		MarkerType,
		SvelteFlow,
		Background,
		type Node,
		type Edge,
		type Connection
	} from '@xyflow/svelte';

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
		fitView: true,
		onconnect: (conn: Connection) => {
			const edge = edges.find((e) => e.source === conn.source && e.target === conn.target);
			if (edge) edge.label = global.connectionSignal;
		}
	};

	function handleConnectionButtonClick(event: MouseEvent) {
		const button = event.currentTarget as HTMLButtonElement;
		const signal = button.id as '+' | '-';

		if (global.connectionSignal === signal) global.isConnecting = !global.isConnecting;
		else global.isConnecting = true;

		global.connectionSignal = signal;
	}
</script>

<div class="flex items-center justify-center gap-8">
	<button
		id="+"
		class="cursor-pointer p-2 text-xl text-white {global.isConnecting && global.connectionSignal === '+'
			? 'bg-green-500'
			: 'bg-black'}"
		onclick={handleConnectionButtonClick}>Connect +</button
	>
	<button
		id="-"
		class="cursor-pointer p-2 text-xl text-white {global.isConnecting && global.connectionSignal === '-'
			? 'bg-green-500'
			: 'bg-black'}"
		onclick={handleConnectionButtonClick}>Connect -</button
	>
</div>

<SvelteFlow
	bind:nodes
	bind:edges
	{...svelteFlowProps}
>
	<Background />
</SvelteFlow>
