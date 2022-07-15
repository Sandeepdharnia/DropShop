import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    // sample inventory
    itemInventory: [
      {
        id: 1,
        name: "Headphones PX5000",
        price: 300,
        stock: 3,
      },
      {
        id: 2,
        name: "Speakers PX5000",
        price: 100,
        stock: 1,
      },
      {
        id: 3,
        name: "Earphones PX5000",
        price: 450,
        stock: 7,
      },
    ],
    itemsOnline: [],
    showWarning: false,
  },

  reducers: {
    // used for the drag and drop of items from the inventory to another column
    ADD_ITEM_TO_COLUMN: (state, action) => {
      state.itemsOnline = [
        ...state.itemsOnline.filter(item => item.id !== action.payload[0].id),
        action.payload[0],
      ];
    },

    // will delete the item from the Products-Online Column
    DELETE_ITEM_FROM_COLUMN: (state, action) => {
      state.itemsOnline = [
        ...state.itemsOnline.filter(item => item.id !== action.payload),
      ];
      state.showWarning = false;
    },

    TOGGLE_WARNING_MESSAGE: state => {
      state.showWarning = !state.showWarning;
    },
  },
});

export const {
  ADD_ITEM_TO_COLUMN,
  DELETE_ITEM_FROM_COLUMN,
  TOGGLE_WARNING_MESSAGE,
} = productSlice.actions;
export default productSlice.reducer;