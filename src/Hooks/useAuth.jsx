import { useContext } from 'react';
import { AuthContext } from "../AuthProvider/Authprovider";

const useAuth = () => {
    // Use the useContext hook to access the context value
    const auth = useContext(AuthContext);
    return auth;
};

export default useAuth;
