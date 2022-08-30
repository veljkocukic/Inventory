import axios from "axios";


const customFetch = axios.create({
    baseURL: "http://localhost:8000/api",
  });
  
//   customFetch.interceptors.request.use(
//     (config:any) => {
//       if (user) {
//         config.headers.common["Authorization"] = `Bearer ${user.token}`;
//       }
//       return config;
//     },
//     (error) => {
//       return Promise.reject(error);
//     }
//   );

  export default customFetch