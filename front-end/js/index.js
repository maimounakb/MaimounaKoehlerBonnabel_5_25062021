let url = "http://localhost:3000/api/teddies"
fetch(url , {method : "GET"})
.then(data => {
    return data.json()
}).then(products => {
    console.log(products)


    let elementIndex = document.getElementById("presentation-produits")

    let newHtmlIndex = ""
    products.forEach(product => {
        /*console.log(product.name)
        console.log(product.price)*/
        newHtmlIndex += `<article class="produit">
                        <a href="pages/produit.html">
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


    /*
    let elementPageProduit = document.getElementById("presentation-produit")
    let newHtmlPageProduit = ""

    newHtmlPageProduit +=  `<img class="presentation-produit__image" src="${product.imageUrl}" alt="${product.name}">
                                <div class="presentation-produit__texte produit-texte">
                                    <h2 class="produit-texte__titre">${product.name}</h2>
                                    <p class="produit-texte__prix">${product.price}</p>
                                    <div class="produit-texte__personnaliser personnaliser">
                                        <p class="personnaliser__titre">Couleur :</p>
                                        <div class="personnaliser__couleur"> 
                                            <a href="#" class="personnaliser__couleur--couleur1">...</a>
                                            <a href="#" class="personnaliser__couleur--couleur2">...</a>
                                            <a href="#" class="personnaliser__couleur--couleur3">...</a>
                                        </div>
                                    </div>
                                    <p class="produit-texte__description">${product.description}</p>
                                    <button class="produit-texte__bouton">Ajouter au panier</button>
                                </div>`

    console.log(newHtmlPageProduit)
    elementPageProduit.innerHTML = newHtmlPageProduit
    */
    
})