export const ENV = {
    Api_key: import.meta.env.VITE_API_KEY,
    Api_host: import.meta.env.VITE_API_HOST,
    Api_url: "https://microsoft-translator-text.p.rapidapi.com",
    Api_routes:{
        translate: "translate",
    }
}

export default ENV;