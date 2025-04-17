<script setup lang="ts">
    import { ref, onMounted } from "vue";
    import { useAppDataStore } from "@renderer/stores/appData";
    const appDataStore = useAppDataStore();
    const appName = ref<string>("");
    onMounted(async () => {
        appName.value = await appDataStore.getAppName;
    })
</script>
<template>
    <section style="height: 500px;">
        <div class="display-flex-column height-100">
            <div class="margin-auto">
                <div class="text-center">
                    <img alt="logo" class="logo" src="../assets/electron.svg" />
                </div>
                <br>
                <h1>Welcome to {{ appName }} </h1>
            </div>
        </div>
    </section>
    <section>

    </section>
</template>
