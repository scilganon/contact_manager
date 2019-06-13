import { ROLES } from '../constants/roles'

const KEY = "auth";
const ROLE = "role";

export const AuthStore = {
    get isAdmin() {
        return this.role === ROLES.ADMIN;
    },

    get role() {
        return sessionStorage.getItem(ROLE);
    },

    get isAuthentificated() {
        return !!+sessionStorage.getItem(KEY);
    },
    login: () => new Promise((resolve) => {
        // @ts-ignore
        sessionStorage.setItem(KEY, String(1));
        setTimeout(resolve, 1000);
    }),
    logout: () => new Promise((resolve) => {
        // @ts-ignore
        sessionStorage.setItem(KEY, String(0));
        setTimeout(resolve, 1000);
    })
};