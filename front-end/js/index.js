let url = "http://localhost:3000/api/teddies"
fetch(url)
.then(data => {
    return data.json()
}).then(products => {
    console.log(products)

    products.forEach(product => {
        console.log(product)
        console.log(product.name)
    });
})