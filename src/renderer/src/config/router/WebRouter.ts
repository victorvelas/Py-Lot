import { createMemoryHistory, createRouter } from "vue-router";
import { routes } from "./Routes";

const WebRouter = createRouter({
    history: createMemoryHistory(),
    routes: routes
});

export { WebRouter };