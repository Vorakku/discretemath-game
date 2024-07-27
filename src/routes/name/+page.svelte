<script>
    import NameInput from "../../components/NameInput.svelte";

    let number = 0;
</script>

<input type="number" bind:value={number}>

{#each {length: number} as item}
    <NameInput/>
{/each}