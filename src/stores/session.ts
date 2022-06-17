import { defineStore } from "pinia";

export const sessionStore = defineStore({
    id: "sessionStore",
    state: () => ({
        loggedInCustomerID: "",
        
    }),
    getters: {
        isUserLoggedIn: (state) => state.loggedInCustomerID != "",
    },
    actions: {
        logIn(customerIDToLogIn: string) {
            this.loggedInCustomerID = customerIDToLogIn;
        },
    },
});
