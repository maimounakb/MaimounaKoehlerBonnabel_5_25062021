let url = "http://localhost:3000/api/teddies"
fetch(url , {method : "GET"})
.then(data => {
    return data.json()
}).then(products => {
    console.log(products)


    let elementIndex = document.getElementById("presentation-produits")
    let urlPageProduit = '../pages/produit.html'

    let newHtmlIndex = ""
    products.forEach(product => {
        /*console.log(product.name)
        console.log(product.price)
        console.log(product._id)*/
        
        newHtmlIndex += `<article class="produit">
                        <a href="${urlPageProduit + "?" + product._id}">
                            <img class="produit__image" src="${product.imageUrl}" alt="${product.name}">
                            <ul class="produit__description">
                                <li><h3 class="">${product.name}</h3></li>
                                <li><p class="">${product.price}</p></li>
                            </ul>
                        </a>
                    </article>`
    });

    /*console.log(newHtmlIndex)*/
    elementIndex.innerHTML = newHtmlIndex

    
})
