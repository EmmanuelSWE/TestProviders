import { useNavigate ,Navigate} from "react-router-dom";

interface WithAuthProps{
    roles?: string[]
}

export const withAuth = (WrappedComponent: React.ComponentType) =>{
    
    return (props) => {
      
        const user = sessionStorage.getItem('user');

        if(!user){
           return  <Navigate to='/login' replace/>
        }


         return <WrappedComponent {...props} />;
    }

   
}