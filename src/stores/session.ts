import { defineStore } from "pinia";

export const sessionStore = defineStore({
    id: "sessionStore",
    state: () => ({
        loggedInCustomer: null,
        
    }),
    getters: {
        isUserLoggedIn: (state) => state.loggedInCustomer != "",
    },
    actions: {
        logIn(customerIDToLogIn: any) {
            this.loggedInCustomer = customerIDToLogIn;
        },
    },
});
