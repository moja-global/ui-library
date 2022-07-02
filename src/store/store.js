import { createStore } from 'vuex'

export default createStore({
    state: {
        toasts: [],
        alerts: []
    },
    mutations: {
        addToast(state, toast) {
            state.toasts.push(toast);
        },
        clearToast(state, id) {
            const index = state.toasts.findIndex((toast) => toast.id === id);
            state.toasts.splice(index, 1);
        },
        addAlert(state, alert) {
            state.alerts.push(alert);
        },
        clearAlert(state, id) {
            const index = state.alerts.findIndex((alert) => alert.id === id);
            state.alerts.splice(index, 1);
        }
    },
    actions: {
    },
    modules: {
    }
})