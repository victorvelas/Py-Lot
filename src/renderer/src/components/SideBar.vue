<script setup lang="ts">
    import { reactive, ref, onMounted } from "vue";
    import { WebMenuItem } from "../config/router/types/MenuTypess/MenuTypes";
    import { useAppDataStore } from "@renderer/stores/appData";
    const appDataStore = useAppDataStore();
    const menuItems = reactive<WebMenuItem[]>([]);
    const appName = ref<string>("");
    const appVersion = ref<string>("");	
    onMounted(async () => {
		appName.value = await appDataStore.getAppName;
		appVersion.value = await appDataStore.getAppVersion;
	});

    const menuTestItems = reactive(Array.from({ length: 20 }, () => {
        return {
            text: "Example Proj"
        }
    }));
</script>
<template>
    <aside class="aside-sidebar flex flex-col w-64 border-r border-gray-700">
        <div class="height-menu">
            <h2 class="text-center">
                {{ appName }} {{ appVersion }}
            </h2>
        </div>
        <nav>
            <a href="#" class="nav-item" v-for="(mt, index) in  menuTestItems" :key="index">
                <i class="iconify gravity-ui--folder-open-fill"></i> {{ mt.text }}
            </a>
            <a v-for="(mi, index) in menuItems" :key="index">
                {{ mi.name }}
            </a>
        </nav>
    </aside>
</template>
<style scoped>
    aside {
        left: 0;
        top: 0;
        height: 100dvh;
        width: 280px;
        max-width: 280px;
        position: sticky;
        flex-direction: column;
    }
    nav {
        padding: 8px;
        max-height: 93dvh;
        overflow-y: auto;
    }
    .nav-item {
        display: flex;
        align-items: center;
        padding: 0.875rem 1rem;
        text-decoration: none;
        border-radius: 0.5rem;
        margin-bottom: 0.5rem;
        transition: background-color 0.2s;
    }

    

    .nav-item i {
        width: 1.5rem;
        height: 1.5rem;
        margin-right: 0.75rem;
        display: inline-flex;
        align-items: center;
        justify-content: center;
    }
    @media (prefers-color-scheme: dark) {
        .nav-item { color: var(--ev-c-white); }
        .nav-item:hover {
            background-color: rgba(255, 255, 255, 0.1);
        }
        /* aside.aside-sidebar {
            background-color: ;
        } */
    }
    @media (prefers-color-scheme: light) {
        .nav-item { color: var(--ev-c-black-soft); }
        .nav-item:hover {
            background-color: rgba(88, 88, 88, 0.1);
        }
        aside.aside-sidebar {
            background-color: var(--ev-c-white-soft) !important;
        }
    }
</style>