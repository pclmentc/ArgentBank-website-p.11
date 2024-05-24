
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Accueil from '../pages/Accueil/Accueil'
import User from '../pages/User/User'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import Login from '../pages/Login/Login'
import Error from '../pages/Error/Error.jsx';


function Router() {  

  return (
    
			<BrowserRouter basename="/">
				<Navbar />
				<Routes>
					
					<Route exact path="/" element={<Accueil />} />
					<Route path="/login" element={<Login />} /> 
					<Route path="/user" element={<User />} />
					<Route path='*' element={<Error />} />
          
				</Routes>
				<Footer />
			</BrowserRouter>
		
  )
}

export default Router
