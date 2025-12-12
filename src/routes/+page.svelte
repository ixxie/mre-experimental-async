<script lang="ts">
  import { useFoo } from './useFoo.svelte';

  const foo = await useFoo();
</script>

{foo.data}
