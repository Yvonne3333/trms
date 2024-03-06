import useAuth from "../../hooks/userAuth";
import { NXPDETAILS } from "../../models";
import fetchData from "../https";
 
let http : any
 
export const useInitializeApi = async () => {
  const {logout} = useAuth()
  http = await fetchData(logout);
};
 
   export const getFormNxpDetailsAsync = async (id:string | undefined)=>{
     const path = `/FormNXP/GetNXPSDetails?applicationID=${id}`
      const {data: {responseResult}} = await http.get(path)
      return {responseResult} as {responseResult : NXPDETAILS}
  }