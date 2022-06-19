module.exports = {
    mainPagePath: "seleniumPractise/#/",
    mainPageTitle: "GreenKart - veg and fruits kart",
    productToSearch: "Mango",
    mangoPrice: 75,
    mangoQuantity: 1,
    orderPagePath: "/seleniumPractise/#/cart",
    countryPagePath: "/seleniumPractise/#/country",
    generateRadomNumber() {
        return Math.round(Math.random() * 100);
    }
}