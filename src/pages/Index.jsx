import {Navigate} from 'react-router-dom'
export const Landing = () => <h1>LANDING PUBLICO</h1>
export const Home = () => {

    // if(!user) {
    //  return <Navigate to={'/'} />
    // }

        return(
            <h1>HOME PRIVADO</h1>
        )
}
export const Dashboard = () => <h1>DASHBOARD PRIVADO</h1>
export const Analities = () => <h1>ANALITIES PRIVADO</h1>
export const Admin = () => <h1>ADMIN PERMISO Y PRIVADO</h1>


