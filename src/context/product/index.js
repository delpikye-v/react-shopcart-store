import EventBus from "event-bus-e2z";
import React, { Component } from "react";
import _ from 'lodash'
import { items } from "../../assets/product-data";
import { LocalStorage } from "../../hooks/useLocalStore";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    cartItemCounter: 0,
    cart: [],
    cartTax: 0,
    cartTotal: 0,
    cartSubtotal: 0,
    listProducts: [],
    featuredProducts: [],
    singleProduct: {},
    loading: true,

    //Filter products
    filteredProducts: [],
    search: "",
    price: 0,
    min: 0,
    max: 0,
    company: "all",
    shipping: false,
  };

  componentDidMount() {
    this.setProducts(_.shuffle(items));
  }

  setProducts = (products) => {
    let listProducts = products.map((item) => {
      return {
        id: item.sys,
        ...item.fields,
        image: item.fields.image.fields.file.url,
      };
    });

    // Get Top rating
    let featuredProducts = listProducts.filter((item) =>
      Boolean(item.featured)
    );

    // Get max price
    let maxPrice = Math.max(...listProducts.map((item) => item.price));

    this.setState(
      {
        listProducts,
        featuredProducts,
        cart: LocalStorage.get("listCart", []),
        singleProduct: LocalStorage.get("singleProduct", {}),
        loading: false,

        //Filter products
        filteredProducts: listProducts,
        price: maxPrice,
        max: maxPrice,
      },
      () => this.updatePriceAndAmout(false)
    );
  };

  //get totals
  calculatorPriceAmount = () => {
    let subTotal = 0;
    let cartItemCounter = 0;
    this.state.cart.forEach((item) => {
      subTotal += item.total;
      cartItemCounter += item.count;
    });
    subTotal = parseFloat(subTotal.toFixed(2));

    let tax = parseFloat((subTotal * 0.2).toFixed(2));
    let total = parseFloat((subTotal + tax).toFixed(2));
    return {
      cartItemCounter,
      subTotal,
      tax,
      total,
    };
  };

  updatePriceAndAmout = (store = true) => {
    const totals = this.calculatorPriceAmount();
    this.setState({
      cartItemCounter: totals.cartItemCounter,
      cartSubtotal: totals.subTotal,
      cartTax: totals.tax,
      cartTotal: totals.total,
    });

    store && LocalStorage.set("listCart", this.state.cart);
  };

  //add to cart
  addToCart = (id) => {
    let tempCart = [...this.state.cart];
    let currentProducts = [...this.state.listProducts];
    let existingItem = tempCart.find((item) => item.id === id);

    if (!existingItem) {
      existingItem = currentProducts.find((item) => item.id === id);

      tempCart = [
        ...tempCart,
        { ...existingItem, count: 1, total: existingItem.price },
      ];
    } else {
      existingItem.count++;

      let total = existingItem.price * existingItem.count;
      existingItem.total = parseFloat(total.toFixed(2));
    }

    this.updateCart(null, tempCart);
    setTimeout(() => EventBus.$emit("toggleCart", true), 250);
  };

  viewProductDetails = (id) => {
    let product = this.state.listProducts.find((item) => item.id === id);
    LocalStorage.set("singleProduct", product);
    this.setState({
      singleProduct: { ...product },
      loading: false,
    });
  };

  increment = (id) => {
    let tempCart = [...this.state.cart];
    const cartItem = tempCart.find((item) => item.id === id);
    cartItem.count++;
    cartItem.total = parseFloat((cartItem.count * cartItem.price).toFixed(2));
    this.updateCart(null, tempCart);
  };

  decrement = (id) => {
    let tempCart = [...this.state.cart];
    const cartItem = tempCart.find((item) => item.id === id);
    if (cartItem.count === 0) {
      this.removeItem(id);
      return;
    }

    cartItem.count--;
    cartItem.total = cartItem.count * cartItem.price;
    cartItem.total = parseFloat(cartItem.total.toFixed(2));
    this.updateCart(null, tempCart);
  };

  removeItem = (id) => {
    let tempCart = [...this.state.cart];
    tempCart = tempCart.filter((item) => item.id !== id);
    this.updateCart(null, tempCart);
  };

  updateCart = (evt, cart = []) => {
    this.setState(
      {
        cart,
      },
      () => this.updatePriceAndAmout()
    );
  };

  // Hanlde filetering
  handleChangeFilter = (e) => {
    const name = e.target.name;
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    this.setState(
      {
        [name]: value,
      },
      this.sortData
    );
  };

  sortData = () => {
    const { search, company, price, shipping, listProducts } = this.state;
    let tempProducts = [...listProducts];

    if (company !== "all") {
      tempProducts = tempProducts.filter((item) => item.company === company);
    }

    let tempPrice = parseInt(price);
    tempProducts = tempProducts.filter((item) => item.price <= tempPrice);

    if (shipping)
      tempProducts = tempProducts.filter((item) => item.freeShipping);

    if (search.length > 0) {
      tempProducts = tempProducts.filter((item) => {
        let tempSearch = search.toLowerCase();
        let tempTitle = item.title.toLowerCase().slice(0, search.length);
        if (tempSearch === tempTitle) {
          return item;
        }
      });
    }

    this.setState({ filteredProducts: tempProducts });
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          addToCart: this.addToCart,
          viewProductDetails: this.viewProductDetails,

          //Cart functionality
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          updateCart: this.updateCart,

          //Filter products
          handleChangeFilter: this.handleChangeFilter,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

export const useProductContenxt = () => useProductContenxt(ProductContext);
const ProductConsumer = ProductContext.Consumer;
export { ProductProvider, ProductConsumer };
