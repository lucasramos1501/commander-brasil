export default {
   login: (token) => {
        return localStorage.setItem("TOKEN", token);
    },

    logout: () => {
        return localStorage.removeItem("TOKEN");
    },

    getToken: () => {
        return localStorage.getItem("TOKEN");
    },

    isAuth: () =>{
        return localStorage.getItem('TOKEN') !== null;
    }
}
