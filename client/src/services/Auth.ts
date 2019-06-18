import { ROLES } from '../../../common/roles'
import axios from "axios";

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
    login: (data: FormData) => new Promise(async (resolve, reject) => {
        try {
            // @ts-ignore
            const { data: { role } } = await axios({
                method: "post",
                url: "/login",
                data,
            });

            // @ts-ignore
            sessionStorage.setItem(KEY, String(1));
            sessionStorage.setItem(ROLE, role);

            window.location.reload();
        } catch (e) {
            console.error("You can not login due to happened err :(");
            reject();
        }
    }),
    logout: () => new Promise(async(resolve) => {
        // @ts-ignore
        await axios({
            method: "get",
            url: "/logout",
        });

        sessionStorage.removeItem(KEY);
        sessionStorage.removeItem(ROLE);

        window.location.reload();
    })
};