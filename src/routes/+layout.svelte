<script lang="ts">
	import '@style/global.scss';
  import type { Snippet } from 'svelte';

	const { children }: {
    children: Snippet; 
  } = $props();

</script>

<div class="mobile ">
{@render children()}

</div>
<style lang="scss">
.mobile {
  max-width: 600px;
  margin-left: auto;
  width: 100vw;
  margin-right: auto;
  height: 100svh;
  overflow: hidden;
  background: $color-primary-background
}
</style>
