// import router from router dom
import {BrowserRouter, HashRouter, Routes, Route} from 'react-router-dom'

// import pages
import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails'

//import components
import Footer from './components/Footer'
import Header from './components/Header'
import Slidebar from './components/Sidebar'

function App() {
  return (
    <div className="overflow-hidden p-0">
      <HashRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product/:id' element={<ProductDetails />}/>
        </Routes>
        <Slidebar />
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
