import axiosInstance from './axiosInstance';

class AuthService {
    async signUp(data) {
        try {
            await axiosInstance.post(`/auth/signup`, data);
        } catch (err) {
            throw err;
        }
    }

    async signIn(data) {
        try {
            const res = await axiosInstance.post(`/auth/signin`, data);
            return res.data.access_token;
        } catch (err) {
            throw err;
        }
    }
}

const authService = new AuthService();
export default authService;
