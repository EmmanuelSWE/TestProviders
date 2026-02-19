import Landing from "./Pages/Pets/Landing"
import { Login } from "./Pages/Login/Login"
import { Signup } from "./Pages/SignUp/Signup"
import { PetProvider } from "./providers"
import { Route, Routes } from "react-router-dom"
import EmptyLayout from "./Layouts/EmptyLayout"
import UserLayout from "./Layouts/UserLayout"
import { Home } from "./Pages/Landing/Home"
import { LogPet } from "./Pages/LogPet/LogPet"
import Pets from "./Pages/Pets/Landing"
import { Pet } from "./Pages/Pet/Pet"
import { EditPet } from "./Pages/EditPet/EditPet"
import { withAuth } from "./hoc/withAuth"


function App() {
//defining the routes
//const ProtectUserLayout = withAuth(UserLayout, {roles: ['user']});
  return (

   <Routes>
    <Route path='/' element={<EmptyLayout/>}>
      <Route index element={<Signup/>}/>
        <Route path='signup' element={<Signup/>}/>
         <Route path='login' element={<Login/>}/>
         <Route path='home' element={<Home/>}/>
    </Route>

     <Route path='/user' element={<UserLayout/>}>
      <Route index element={<Home/>}/>
      <Route path='home' element={<Home/>}/>
      <Route path='log' element={<LogPet/>}/>
      <Route path='pets' element={<Pets/>}/>
      <Route path='pet/:id' element={<Pet/>}/>
      <Route path='edit/:id' element={<EditPet/>}/>
    </Route>


   </Routes>
 
  )
}

export default App
