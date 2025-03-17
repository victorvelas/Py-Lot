<script setup lang="ts">
    import InputBrowser from "./InputBrowser.vue"
    import { ref, onMounted } from "vue";

    const updateIcon = () => {
        let isDark = (async () => {
            return await window.darkMode.isDarkMode()
        })();
        return isDark ? 'sun' : 'moon';
    }

    const menu = [];

    const dmIcon:string = ref<string>(updateIcon());

    let timeoutId: number|null = null;
    const searchProj = (ev: InputEvent): void => {
        const inputElement = ev.target as HTMLInputElement;
        console.log("Searching for:", inputElement.value);
    };

    const toggleColorMode = async function () {
        const isDarkMode = await window.darkMode.toggle();
        dmIcon.value = isDarkMode ? 'sun' : 'moon';
        return isDarkMode;
    }
</script>
<template>
    <header class="full-width">
        <nav>
            <section>
                <InputBrowser
                    delay="200"
                    @onSearch="searchProj($event as InputEvent)"
                    placeholder="Search..."
                />
            </section>
            <ul class="items">
                <ol class="menu-item">
                    <a href="#" @click.prevent="toggleColorMode()" class="menu-link">
                        <i :class="`iconify gravity-ui--${dmIcon}`"></i> 
                        <i :class="`iconify gravity-ui--toggle-${dmIcon == 'sun' ? 'off' : 'on'}`"></i> 
                    </a>
                </ol>
                <ol class="menu-item">
                    <a href="#" @click.prevent="toggleColorMode()" class="menu-link">
                        <i :class="`iconify gravity-ui--${dmIcon}`"></i> Home
                    </a>
                </ol>
                <ol class="menu-item">
                    <a href="#" @click.prevent="toggleColorMode()" class="menu-link">
                        <i :class="`iconify gravity-ui--${dmIcon}`"></i> My Projects
                    </a>
                </ol>
                <ol class="menu-item" v-for="(lnk, index) in menu" :key="index">
                    <router-link :to="lnk.path" class="menu-link">
                        {{ lnk.name }}
                    </router-link>
                </ol>
            </ul>
        </nav>
    </header>
</template>
<style scoped>
    
    header {
        position: sticky;
        top: 0;
        z-index: 1000;
        border-bottom: 1px solid rgba(188, 188, 188, 0.298);
    }
    
    header > nav > section {
        margin: 8px 0px 8px 8px;
    }
    section {
        width: 20%;
        flex-grow: 1;
    }
    nav {
        display: flex;
        width: 100%;
        flex-direction: row;
    }
    nav > ul.items {
        margin-left: auto;
        align-items: center;
        padding: 0;
        width: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        
        gap: 6px;
    }
    nav > ul.items > ol.menu-item{
        padding: 0;
        height: 100%;
        align-items: center;
        justify-items: center;
    }
    nav > ul.items > ol.menu-item > a {
        display: block;
        align-content: center;
        height: 100%;
        padding: 0 6px;
        transition: all 0.3s ease;
    }
    @media (prefers-color-scheme: dark) {
        nav > ul.items > ol.menu-item > a {
            color: var(--ev-c-white);
        }
        nav > ul.items > ol.menu-item > a:hover {
            background-color: rgba(93, 93, 93, 0.362);
        }

    }
    @media (prefers-color-scheme: light) {
        nav > ul.items > ol.menu-item > a {
            color: var(--ev-c-black-soft);
        }
        nav > ul.items > ol.menu-item > a:hover {
            background-color: rgba(168, 168, 168, 0.424);
        }
    }
    
    .menu-link {
        text-decoration: none;
    }
</style>