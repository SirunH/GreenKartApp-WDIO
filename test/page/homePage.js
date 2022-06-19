const Page = require("./page");

class HomePage extends Page {
    get searchBar() {
        return $("input.search-keyword");
    }
    get searchButton() {
        return $("button.search-button");
    }

    async searchAnItem(item) {
        let inputField = await this.searchBar;
        await inputField.waitForDisplayed();
        await inputField.setValue(item);
        let searchBtn = await this.searchButton;
        await searchBtn.click();
    }
    get addToCartBtn() {
        return $(".product-action > button");
    }

    async addTheProduct(number) {
        let addBtn = await this.addToCartBtn;
        await addBtn.click();
    }

    get productName() {
        return $(".product h4.product-name")
    }

    async getProductName() {
        let nameOfProduct = await this.productName;
        return nameOfProduct.getText();
    }

    get productPrice() {
        return $(".product p.product-price");
    }

    get productQuantityInputField() {
        return $(".stepper-input > .quantity");
    }

    async insertProductQuantity(number) {
        let inputField = await this.productQuantityInputField;
        await inputField.setValue(number);
    }

    async getProductPrice() {
        let priceOfProduct = await (await this.productPrice).getText();
        return +priceOfProduct;
    }

    get itemsQuantity() {
        return $(".cart-info > table > tbody > tr:nth-child(1) > td:nth-child(3) > strong")
    }

    get totalItemsPrice() {
        return $(".cart-info > table > tbody > tr:nth-child(2) > td:nth-child(3) > strong")
    }

    async getItemsQuantityNumber() {
        let quantity = await this.itemsQuantity;
        let quantityAsNumber = await quantity.getText();
        return +quantityAsNumber;
    }

    async getTotalItemsPrice() {
        let totalPrice = await this.totalItemsPrice;
        let totalPriceAsNumber = await totalPrice.getText();
        return +totalPriceAsNumber;
    }
}

module.exports = new HomePage();