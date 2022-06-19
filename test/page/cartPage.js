const Page = require("./page");

class CartPage extends Page {
    get cartLink() {
        return $(".cart-icon > img");
    }

    async openCart() {
        let cartBtn = await this.cartLink;
        await cartBtn.click();
    }

    get cartPopUp() {
        return $(".cart> .cart-preview")
    }
    async cartTable() {
        let cartname = await cartPopUp.getText();
        return cartname;
    }

    get itemsList() {
        return $(".cart-preview .cart-items")
    }

    async itemsArray() {
        let parent = await this.itemsList;
        let child = parent.$$("li");
        return child;
    }

    get productName() {
        return $(".cart-preview .product-info > .product-name");
    }

    async ProductName() {
        let name = await this.productName;
        let prodName = await name.getText();
        return prodName;
    }

    get proceedToCheckoutBtn() {
        return $(".cart-preview.active > .action-block > button")
    }

    async orderPage() {
        let goToBtn = this.proceedToCheckoutBtn;
        await goToBtn.click();
    }
}

module.exports = new CartPage();