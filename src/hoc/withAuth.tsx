import { useNavigate ,Navigate} from "react-router-dom";

interface WithAuthProps{
    roles?: string[]
}

export const withAuth = (WrappedComponent: React.ComponentType, {roles = []} : WithAuthProps) =>{
    const navigate = useNavigate();
    return (props) => {
        
        const user = sessionStorage.getItem('user');

        if(!user){
           return  <Navigate to='/login' replace/>
        }

        if( roles.length> 0 && roles.includes('user')){
            return <Navigate to='/user' replace/>
        }

         return <WrappedComponent {...props} />;
    }

   
}