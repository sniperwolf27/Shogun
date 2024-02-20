import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/styles/Index.css';
import { Link, BrowserRouter, Route,Routes  } from 'react-router-dom';
import Catalog from './components/Catalog';
import Product from './components/Product';
import NavBar from './components/NavBar';
import ProductData from './data/products.json';
function App() {
  return (

    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Catalog products={ProductData}/>} />
        <Route path="/product/:id" element={<Catalog products={ProductData}/>} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
