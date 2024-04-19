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
</script>

<h1>Welcome to SvelteKit</h1>

<div class="container">
	<TreeView className="container">
		{#each categoriesIterable as category}
			<div class="items">
				<TreeViewItem>
					{category[0][0]}
					<svelte:fragment slot="children">
						{#each category[1] as item}
							<!-- <TreeViewItem> -->
							<a href={item[1]}>{item[0]}</a>
							<!-- </TreeViewItem> -->
						{/each}
					</svelte:fragment>
				</TreeViewItem>
			</div>
		{/each}
	</TreeView>
</div>

<style>
	a {
		text-decoration: none;
	}
	.TreeView {
		width: 412px;
		display: flex;
		flex-direction: row;
		padding: 6px;
		line-height: 14px;
	}

	.items {
		display: flex;
		flex-direction: column;
	}
</style>
