<script lang="ts">
	import { TreeView, TreeViewItem } from '@skeletonlabs/skeleton';
	import type { Categories, CategoryItems } from '../../../scraper/src/types.ts';

	export let data: { categories: Categories };

	console.clear();
	// console.log('Full data object: ');
	// console.log(data);

	// console.log('Data object destructured: ');
	// console.log(data.categories);

	const categories = data.categories;
	const categoriesIterable = Object.entries(categories);

	// console.log(categoriesIterable);

	// console.log(categoriesIterable[0][1]);

	let myTreeView: TreeView;

	function handleExpandAll() {
		myTreeView.expandAll();
	}

	function handleCollapseAll() {
		myTreeView.collapseAll();
	}
</script>

<div class="container">
	<h1>Capterra Categories</h1>
	<div class="buttons">
		<button on:click={handleExpandAll}>Expand</button>
		<button on:click={handleCollapseAll}>Collapse</button>
	</div>
	<TreeView bind:this={myTreeView}>
		{#each categoriesIterable as category}
			<TreeViewItem>
				<h2 class="categoryName">{category[0][0]}</h2>
				<svelte:fragment slot="children">
					{#each category[1] as item}
						<!-- <TreeViewItem> -->
						<div class="link-divider"><a href={item[1]}>{item[0]}</a></div>
						<!-- </TreeViewItem> -->
					{/each}
				</svelte:fragment>
			</TreeViewItem>
		{/each}
	</TreeView>
</div>

<style>
	h1 {
		text-align: center;
		line-height: 20px;
		font-size: 1.5rem;
		margin-bottom: 10px;
	}
	.container {
		width: 412px;
		padding: 3px;
		line-height: 14px;
	}
	.categoryName {
		display: inline-block;
		margin-left: 9px;
	}
	.buttons {
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0 auto;
		margin-bottom: 15px;
	}
	.buttons button {
		background-color: #e0e0e0;
		border: 2px solid #ccc;
		padding: 5px 10px;
		border-radius: 4px;
		cursor: pointer;
		margin-right: 10px;
		width: 96px;
	}
	.link-divider {
		margin-left: 12px;
		margin-bottom: 6px;
	}
	.link-divider:last-child {
		margin-bottom: 12px;
	}
</style>
