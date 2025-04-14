<script lang="ts">
	import { BaseEdge, EdgeLabel, getStraightPath, useInternalNode, type EdgeProps } from '@xyflow/svelte';

	import { getEdgeParams } from '$lib/utils';

	let { id, source, target, markerEnd, label }: EdgeProps = $props();

	const sourceNode = useInternalNode(source);
	const targetNode = useInternalNode(target);

	let path = $derived.by(() => {
		if (sourceNode.current && targetNode.current) {
			const edgeParams = getEdgeParams(sourceNode.current, targetNode.current);
			return getStraightPath({
				sourceX: edgeParams.sx,
				sourceY: edgeParams.sy,
				targetX: edgeParams.tx,
				targetY: edgeParams.ty
			})[0];
		}
	}) as string;

	let labelX = $derived.by(() => {
		if (sourceNode.current && targetNode.current) {
			const edgeParams = getEdgeParams(sourceNode.current, targetNode.current);
			return getStraightPath({
				sourceX: edgeParams.sx,
				sourceY: edgeParams.sy,
				targetX: edgeParams.tx,
				targetY: edgeParams.ty
			})[1];
		}
	});

	let labelY = $derived.by(() => {
		if (sourceNode.current && targetNode.current) {
			const edgeParams = getEdgeParams(sourceNode.current, targetNode.current);
			return getStraightPath({
				sourceX: edgeParams.sx,
				sourceY: edgeParams.sy,
				targetX: edgeParams.tx,
				targetY: edgeParams.ty
			})[2];
		}
	});

	const labelStyle =
		'border: 1px solid black; border-radius: 999px; height: 24px; width: 24px; display: flex; justify-content: center; align-items: center; font-size: 18px';
</script>

<BaseEdge
	{id}
	{path}
	{markerEnd}
/>

<EdgeLabel
	x={labelX}
	y={labelY}
	style={labelStyle}
>
	{label}
</EdgeLabel>
