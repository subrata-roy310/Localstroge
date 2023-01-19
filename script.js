const productForm = document.getElementById("add-product");
const allProductDiv = document.getElementById("all-product");
const productNameInpute = document.getElementById("product-name");
const productImageInpute = document.getElementById("product-image");
const productPriceInpute = document.getElementById("product-price");
const productTextInpute = document.getElementById("product-text");

const products = JSON.parse(localStorage.getItem("lsProducts")) || [];



// Add Product
const addProduct = (nameValue, imageValue, priceValue, textValue) => {
    products.push({
        image: imageValue,
        price: priceValue,
        name: nameValue,
        text: textValue
    });

    // Add product local stroge
    localStorage.setItem("lsProducts", JSON.stringify(products));
}

// Create Element
const createElement = (nameValue, imageValue, priceValue, textValue) => {
    const productCol = document.createElement("div");
    productCol.classList.add("col-lg-3");

    // Create Product Div
    const productDiv = document.createElement("div");
    productDiv.classList.add("single-product");

    // Create Product img
    const productImage = document.createElement("img");
    productImage.setAttribute("src", imageValue);

    // Create Product Price
    const productPrice = document.createElement("h5");
    productPrice.innerText = priceValue;

    // Create Product Name
    const productName = document.createElement("h3");
    productName.innerText = nameValue;

    // Create Product Text
    const productText = document.createElement("p");
    productText.innerText = textValue;

    // Completed Single Product
    productDiv.append(productImage, productPrice, productName, productText);

    // Complete Col
    productCol.appendChild(productDiv);

    // Complete First Task
    allProductDiv.appendChild(productCol);
};


productForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const nameValue = productNameInpute.value;
    const imageValue = productImageInpute.value;
    const priceValue = productPriceInpute.value;
    const textValue = productTextInpute.value;



    // task 1
    createElement(nameValue, imageValue, priceValue, textValue);
    //// task 2
    addProduct(nameValue, imageValue, priceValue, textValue);

});

// Show product form local Storage
products.forEach(product => {
    createElement(product["name"], product["image"], product["price"], product["text"]);
})
