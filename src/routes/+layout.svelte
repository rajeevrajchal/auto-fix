<script lang="ts">
	import '@style/global.scss';
  import type { Snippet } from 'svelte';

	const { children }: {
    children: Snippet; 
  } = $props();

</script>

{@render children()}
