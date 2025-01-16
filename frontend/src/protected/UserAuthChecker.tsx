import { useUser } from "../store/hooks/useUser";
import { Home } from "../pages/user/Home";



export const UserAuthChecker = ({ children } : {children : React.ReactNode}) => {
  const user = useUser()

  if (user) {
    return <Home/>
  } else {
    return {children}
  }

};
