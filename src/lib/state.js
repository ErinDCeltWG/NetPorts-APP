import { writable } from "svelte/store";

export const PAGE_TITLE = writable("");

export const CURRENT_SEARCH = writable({
    port: "",
    protocol: "",
});

export const currentUser = writable({
    uid: "",
    email: "",
});


export const favorites = writable([]);