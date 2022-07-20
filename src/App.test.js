import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import {store} from "./app/store";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

test("Render the app", () => {
  const { getByText } = render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
  expect(getByText(/Inventario general/i)).toBeInTheDocument();
});



// describe('async actions products', () => {
//   it('should set status to "filfilled"', async () => {
//       const Storestate = store()
//       const data = Storestate.dispatch({
//         type: 'products/fetchProducts/fulfilled'
//       })
//       console.log(data)
//   })
// })

// describe('add products', () => {
//   const initialState = {
//     "id": 1,
//     "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//     "price": 109.95,
//     "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//     "category": "men's clothing",
//     "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//     "rating": {
//       "rate": 3.9,
//       "count": 120
//     }
//   }
//   it('add product ', () => {
//       const store = store()
//       const data = store.dispatch({
//         type: 'products/addProduct',
//         payload: initialState
//       })
//       console.log(data)
//   })
// })

