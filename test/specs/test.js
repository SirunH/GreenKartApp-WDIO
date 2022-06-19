const MainPage = require("../page/mainPage.js");
const HomePage = require("../page/homePage.js");
const CartPage = require("../page/cartPage.js")
const OrdersPage = require("../page/orderPage.js");
const CountryPage = require("../page/countryPage.js");
const helper = require("../helper/helper")
const chai = require("chai");
//const expect = require("expect");
const expectChai = chai.expect;

describe("Buying Mango in GreenKart app", () => {
    it("Open the main page", async() => {
        let path = helper.mainPagePath;
        let title = helper.mainPageTitle;
        await MainPage.goTo(path);
        let currentUrl = await MainPage.currentUrl();
        let pageTitle = await MainPage.currentTitle();
        expectChai(currentUrl).to.contain(path);
        expectChai(pageTitle).to.be.equal(title);
    })

    it("Searching the item", async() => {
        await HomePage.searchAnItem(helper.productToSearch);
        let productName = await HomePage.getProductName();
        let productPrice = await HomePage.getProductPrice();
        expectChai(productName).to.contain(helper.productToSearch);
        expectChai(productPrice).to.be.equal(helper.mangoPrice);
    })

    it("Adding mango", async() => {
        let productQuantity = helper.mangoQuantity;
        let productPrice = helper.mangoPrice;
        let orederPrice = productPrice * productQuantity;
        await HomePage.addTheProduct();
        let addBtn = await HomePage.addToCartBtn;
        let itemsQuantity = await HomePage.getItemsQuantityNumber();
        let totalPrice = await HomePage.getTotalItemsPrice();
        await expect(addBtn).toHaveElementClass("added")
        expectChai(itemsQuantity).to.be.equal(1);
        expectChai(totalPrice).to.be.equal(orederPrice);
    })


    it("Opening the cart", async() => {
        await CartPage.openCart();
        let itemsInCart = await CartPage.itemsArray();
        let cartproducte = await CartPage.ProductName();
        expectChai(await itemsInCart).to.have.length(1);
        expectChai(cartproducte).to.contain(helper.productToSearch)
    })

    it("Navigating to order page", async() => {
        await CartPage.orderPage();
        let productTable = await OrdersPage.productTable;
        await productTable.waitForDisplayed();
        let theProductsList = await OrdersPage.getProductsList();
        let currentUrl = await MainPage.currentUrl();
        let nameOfProduct = await OrdersPage.getProductNameText();
        let numberOfProduct = await OrdersPage.getNumberOfPriducts();
        let priceOfProduct = await OrdersPage.getProductPrice();
        let displayedTotalPrice = await OrdersPage.getTotalPrice();
        let actualTotalPrice = numberOfProduct * priceOfProduct;
        expectChai(await theProductsList).to.have.length(1);
        expectChai(await productTable.isDisplayed()).to.be.true;
        expectChai(currentUrl).to.contain(helper.orderPagePath);
        expectChai(nameOfProduct).to.contain(helper.productToSearch);
        expectChai(displayedTotalPrice).to.be.equal(actualTotalPrice)
    })

    it("Selecting country", async() => {
        await OrdersPage.placeAnOrder();
        let country = await CountryPage.counntryList;
        await country.waitForDisplayed();
        let currentUrl = await MainPage.currentUrl();
        expectChai(currentUrl).to.contain(helper.countryPagePath);
    })

    it("Agree with Terms and Conditions", async() => {
        let index = await CountryPage.getCountryIndex();
        let countries = await CountryPage.getCountriesList();
        let checkbox = await CountryPage.termsAndConditionsCheckbox;
        await CountryPage.selectCountry(index);
        await CountryPage.agreeWithTermsAndConditions();
        expectChai(await countries[index].isSelected()).to.be.true;
        expectChai(await checkbox.isSelected()).to.be.true;
        await CountryPage.confirmTheOrder();
        let success = await CountryPage.successMessage;
        expectChai(await success.isDisplayed()).to.be.true;
    })

});