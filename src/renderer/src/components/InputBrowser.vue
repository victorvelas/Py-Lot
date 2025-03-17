<template>
    <input 
        type="text"
        @input="debounceCallback($event as InputEvent)"
        autocomplete="false"
    >
</template>
<script lang="ts" setup>
    import { defineProps } from "vue";

    const emit = defineEmits<{
        (event: "on-search", ev: InputEvent): void;
    }>();


    const props = defineProps({
        delay: {type: Number, required: false, default: 200}
    });

    let timeoutId: number|null = null;

    const debounceCallback = (ev: InputEvent) : void => {
        if (timeoutId) clearTimeout(timeoutId);
        timeoutId = setTimeout(() => emit('onSearch', ev), props.delay);
    }

</script>