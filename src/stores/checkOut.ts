import { defineStore } from "pinia";

export const checkOutStore = defineStore({
    id: "checkOutStore",
    state: () => ({
        selectedDateFrom: "",
        selectedDateTo: "",
        selectedBike: "",
        selectedPaymentOption: "Cash",
    }),
});
