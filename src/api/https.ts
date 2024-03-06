import axios from "axios";
import configservice from "../hooks/configservice";
 
type LogoutFunction = () => void;
 
const fetchData = async (logout: LogoutFunction)=>{
    const config = await configservice()
    const {baseurl} = config
    let token =  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzaWQiOiIwNjkwOSIsImdpdmVuX25hbWUiOiJBbWFsdSBEb21pbmljIFVjaGVubmEgTXIuIiwiUm9sZSI6ImFwcHJvdmVyIiwiSm9iUm9sZSI6IlRlYW0gTWVtYmVyIiwiSm9iUm9sZUlEIjoiMTI3NSIsIlN0YWZmRW1haWwiOiJVQW1hbHVAdW5pdHliYW5rbmcuY29tIiwiRGVwYXJ0bWVudCI6IkJ1c2luZXNzIFNvbHVpb24gRGVwYXJ0bWVudCIsIlVuaXQiOiJBcHBsaWNhdGlvbiBEZXZlbG9wbWVudCBVbml0IiwiQnJhbmNoQ29kZSI6IjIwMSIsIlN1cGVydmlzb3JJZCI6IjA1NjY5IiwiRGF0ZSI6IjMvNi8yMDI0IDQ6MDU6MDcgUE0iLCJqdGkiOiI2YmM4NmYwMi03Mjc0LTQ1OTktYTQ5YS0zMDBhOWQ1YmM5NjAiLCJleHAiOjE3MDk3NDQ3MDd9.JiGwU4XbAQLpIeL2P-NPA84yQxfaB8eykbhfuwqkbUY";
 
    const buildUrl = (path: string) => {
        return baseurl + path;
      };
   
      const buildOptions = (token: string | null) => {
        return {
          headers: {
            accept: '*/*',
            Authorization: `Bearer ${token}`
          },
       
        };
      };
   
      const http = {
        get: (path: string) => axios.get(buildUrl(path), buildOptions(token)),
        post: (path: string, data: any) =>
          axios.post(buildUrl(path), data, buildOptions(token)),
        patch: (path: string, data: any) =>
          axios.patch(buildUrl(path), data, buildOptions(token)),
      };
   
      axios.interceptors.response.use(
        (response: any) => response,
        async (error : any) => {
   
          if (error.response) {
            if (error.response.status === 401) {
              logout()
            } else if (error.response.status === 500) {
              console.log("Network error", error)
            }
          } else if (error.request) {
            console.error('Network error:', error.request);
          } else {
            console.error('Request setup error:', error.message);
          }
   
          return Promise.reject(error);
        }
      );
      return http;
 
}
 
export default fetchData;