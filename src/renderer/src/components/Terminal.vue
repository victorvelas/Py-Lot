<template>

</template>
<script setup lang="ts">
    import { ref, watch } from 'vue'
    const props = defineProps<string, object>({
        output: {
            type: String,
            required: true
        },
        isRunning: {
            type: Boolean,
            default: false
        }
    })
</script>