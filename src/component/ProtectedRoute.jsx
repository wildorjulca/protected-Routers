import { Navigate } from "react-router-dom"

export const ProtectedRoute =({children, user, redirectTo ="/"})=>{
if(!user){
    return <Navigate  to={redirectTo}/>
}
  return children
}