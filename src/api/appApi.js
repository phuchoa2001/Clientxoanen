import axiosClient from './axiosClient';

export const appApi = {
    getAll(params) {
        return axiosClient.post("/public/app", {...params , filter : "showXoanen"});
    }
};
