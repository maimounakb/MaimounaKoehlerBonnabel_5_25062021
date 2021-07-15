/*console.log(window)*/
var URLSearchParams = new URLSearchParams(window.location.search);
var urlId = URLSearchParams.get("_id");
console.log(urlId);


let url = `http://localhost:3000/api/teddies/${urlId}`;
fetch(url , {method : "GET"})
.then(data => {
    return data.json()
}).then(product => {
    console.log(product)
   
    let elementProduct = document.getElementById("produit")
    /*console.log(elementProduct)*/

    elementProduct.innerHTML = elementProduct += `<img class="presentation-produit__image" src="${product.imageUrl}" alt="${product.name}">
                                                <div class="presentation-produit__texte produit-texte">
                                                    <h2 class="produit-texte__titre">${product.name}</h2>
                                                    <p class="produit-texte__prix">${product.price}</p>
                                                    <div class="produit-texte__personnaliser personnaliser">
                                                        <form method="post" action="">
                                                            <p>
                                                                <label for="couleur">Choisir la couleur :</label><br />
                                                                <select name="couleur" id="couleur">
                                                                    <option value=""></option>
                                                                    <option value=""></option>
                                                                    <option value=""></option>
                                                                </select>
                                                            </p>
                                                        </form>
                                                    </div>
                                                    <p class="produit-texte__description">${product.description}</p>
                                                    <button class="produit-texte__bouton">Ajouter au panier</button>
                                                </div>`

});
