import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (dispatch, getState) => {
    return  await fetch(`https://fakestoreapi.com/products?limit=5`).then(
      (res) => res.json()
    )
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState: [],
  reducers: {
    addProduct: (state, action) => {  
     state.push(action.payload);
    },
    deleteProduct: (state, action) => {
      const product = state.find((product) => product.id === action.payload);
      if (product) {
        state.splice(state.indexOf(product), 1);
      }
    },
    updateInventory: (state, action) => {
      const { id, countInventory } = action.payload;
      const existingProduct = state.find((product) => product.id === id);
      if (existingProduct) {
        existingProduct.countInventory = countInventory;
      }
    },
    editProduct: (state, action) => {
      const { id, title, description, price, image } = action.payload;
      const existingProduct = state.find((product) => product.id === id);
      if (existingProduct) {
        existingProduct.title = title;
        existingProduct.description = description;
        existingProduct.price = price;
        existingProduct.image = image;
      }
    },
  },
  extraReducers: {
    [fetchProducts.fulfilled]: (state, action) => {
        const products = action.payload
        products.map((product) => product.countInventory = 0)
       return products
    }
  },
});

export const { addProduct, deleteProduct, updateInventory, editProduct } =
  productsSlice.actions;

export default productsSlice.reducer;