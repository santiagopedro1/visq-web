import type { Node, Edge } from '@xyflow/svelte';

export const global = $state({
	isConnecting: false,
	connectionSignal: '' as '+' | '-'
});

export const Nodes: Node<{ value: number; name: string }>[] = $state([
	{
		id: '1',
		type: 'custom',
		position: { x: 0, y: 0 },
		data: {
			value: 0,
			name: 'Node 1'
		}
	},
	{
		id: '2',
		type: 'custom',
		position: { x: 250, y: 320 },
		data: {
			value: 0,
			name: 'Node 2'
		}
	},
	{
		id: '3',
		type: 'custom',
		position: { x: 40, y: 300 },
		data: {
			value: 0,
			name: 'Node 3'
		}
	},
	{
		id: '4',
		type: 'custom',
		position: { x: 300, y: 0 },
		data: {
			value: 0,
			name: 'Node 4'
		}
	}
]);

export const Edges: Edge[] = $state([]);
