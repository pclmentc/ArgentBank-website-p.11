
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Accueil from '../pages/Accueil/Accueil'
// import User from '../pages/User/User'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
// import Error404 from '../pages/404/index'


function Router() {  

  return (
    
			<BrowserRouter basename="/">
				<Navbar />
				<Routes>
					
					<Route exact path="/" element={<Accueil />} />
					{/* <Route path="*" element={<Error404 />} />
					<Route path="/user" element={<User />} />					 */}
          
				</Routes>
				<Footer />
			</BrowserRouter>
		
  )
}

export default Router