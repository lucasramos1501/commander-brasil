export default {
    login: (data) => {
        localStorage.setItem("TOKEN", data.token);
        localStorage.setItem("AUTH_STATUS", data.auth);
    },

    logout: () => {
        localStorage.removeItem("TOKEN");
        localStorage.removeItem("AUTH_STATUS");
    },

    getToken: () => (localStorage.getItem("TOKEN")),

    isAuth: () => (
        localStorage.getItem('TOKEN') !== null && localStorage.getItem('AUTH_STATUS') === "true"
        )
}
