export const getAccessToken = () => localStorage.getItem("token");
export const setAccessToken = (token) => localStorage.setItem("token", token);
export const unsetToken = () => localStorage.removeItem("token");
export const isAuthenticated = function () {
    if (getAccessToken() != null) {
        console.log("authenticated");
        return true;
    }
    console.log("unauthenticated");
    return false;
}