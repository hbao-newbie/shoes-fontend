import axios from "axios";
import { useAuthStore } from "../stores/auth.store";
import vm from "../main";

const commonConfig = {
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
};

export const createApiClient = (baseURL, withAuthToken = false) => {
    const api = axios.create({
        baseURL,
        ...commonConfig,
    });

    if (withAuthToken) {
        api.interceptors.request.use((config) => {
            const auth = useAuthStore();

            const user = auth.user;
            if (user && user.accessToken) {
                config.headers.authorization = `Bearer ${user.accessToken}`;
            }
            return config;
        });

        api.interceptors.response.use(
            (response) => {
                return response;
            },
            (error) => {
                if (error.response.status == 401) {
                    //
                    useAuthStore().logout();
                    vm.$router.push({name: "Login"});
                }
                return Promise.reject(error);
            }
        );
    }

    return api;
};