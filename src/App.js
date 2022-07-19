import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { fetchProducts } from "./features/products/productsSlice";
import MainLayout from "./components/layout/layout";
import Inventory from "./pages/inventory/inventory";
import AddProducts from "./pages/addProduct/addproduct";
import EditProduct from "./pages/editProduct/editProduct";
import RegisterInventory from "./pages/registerInventory/registerInventory";
import About from "./pages/about/about";
import Search from "./pages/search/search";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <ChakraProvider>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Inventory />} />
          <Route path="editar-producto/:idProduct" element={<EditProduct />} />
          <Route path="agregar-producto" element={<AddProducts />} />
          <Route
            path="registrar-inventario/:idProduct"
            element={<RegisterInventory />}
          />
           <Route
            path="acerca"
            element={<About />}
          />
           <Route
            path="buscar/:querySearch"
            element={<Search />}
          />
        </Routes>
      </MainLayout>
    </ChakraProvider>
  );
}

export default App;
