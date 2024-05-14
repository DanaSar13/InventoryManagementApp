import react from 'react'
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom'
import NavBar from './components/NavBar'
import { ProductProvider } from './ProductContext'
import ProductsTable from './components/ProductsTable'
import AddProducts from './components/AddProducts'
import UpdateProduct from './components/UpdateProduct'
import { UpdateProductContextProvider } from './UpdateProductContext'
import { SupplierContextProvider } from './SupplierContext'
import SupplierPage from './components/SupplierPage'


function App() {
  return (
    <div>
      <Router>
        <ProductProvider>
          <NavBar />
          <div className="row">
              <div className="col-sm-10 col-xm-12 mr-auto ml-auto mt-4 mb-4">
                  <UpdateProductContextProvider>
                  <SupplierContextProvider>
                    <Routes>
                      < Route exact path='/' component={ProductsTable} />
                      <Route exact path='/updateproduct' component={UpdateProduct} />
                      <Route exact path="/supplierpage" component={SupplierPage} />
                      <Route exact path="/addproduct" component={AddProducts} />
                    </Routes>
                  </SupplierContextProvider>
                  </UpdateProductContextProvider>
              </div>
            </div>
        </ProductProvider>
      </Router>
    </div>
  );
}


export default App;
