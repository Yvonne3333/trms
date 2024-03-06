import { useStateContext } from '../context/StateContext';
 
export default function useAuth() {
  const context = useStateContext();
  const logout = () => {
    context?.setAuth(false);
    localStorage.removeItem('TrmsTimeStamp');
    localStorage.removeItem('TrmsToken');
    localStorage.removeItem('TrmsStaffId');
  };
 
  return {
    logout,
  };
}