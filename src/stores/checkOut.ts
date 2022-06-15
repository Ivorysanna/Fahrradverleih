import { defineStore } from "pinia";

export const checkOutStore = defineStore({
    id: "checkOutStore",
    state: () => ({
        selectedDate: "",
        selectBike: "",
    }),
    getters: {
        doubleCount: (state) => state.counter * 2,
    },
    actions: {
        increment() {
            this.counter++;
        },
    },
});
