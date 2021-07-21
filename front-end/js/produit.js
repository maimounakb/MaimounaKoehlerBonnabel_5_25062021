/*console.log(window)*/
var URLSearchParams = new URLSearchParams(window.location.search);
var urlId = URLSearchParams.get("_id");
/*console.log(urlId);*/


let url = `http://localhost:3000/api/teddies/${urlId}`;
fetch(url , {method : "GET"})
.then(data => {
    return data.json()
}).then(product => {
    /*console.log(product)*/
   
    let price = new Intl.NumberFormat("fr-FR", {
        style: "currency",
        currency: "EUR",
        minimumFractionDigits: 2,
      }).format(product.price / 100);

    let elementProduct = document.getElementById("produit");
    /*console.log(elementProduct)*/

    elementProduct.innerHTML =  `<img class="presentation-produit__image" src="${product.imageUrl}" alt="${product.name}">
                                                <div class="presentation-produit__texte produit-texte">
                                                    <h2 class="produit-texte__titre">${product.name}</h2>
                                                    <p class="produit-texte__prix">${price}</p>
                                                    <div class="produit-texte__personnaliser personnaliser">
                                                        <form method="post" action="">
                                                            <p>
                                                                <label for="couleur">Choisir la couleur :</label><br />
                                                                <select name="couleur" id="couleur">
                                                                </select>
                                                            </p>
                                                        </form>
                                                    </div>
                                                    <p class="produit-texte__description">${product.description}</p>
                                                    <button class="produit-texte__bouton">Ajouter au panier</button>
                                                </div>`;


    /*console.log(product.colors)*/

    const choixCouleur = product.colors;

    choixCouleur.forEach(color => {

        const nouvelleCouleur = document.createElement("option");
        let option = document.getElementById("couleur");
        option.appendChild(nouvelleCouleur);
        nouvelleCouleur.value = couleur;
        nouvelleCouleur.textContent = color;
        /*console.log(color)*/

    });

    /*
    1. Récupérer donnée de couleur
    2. Créer nouvelle balise pour chaque nouvelle couleur
    3. Placer la balise (par rapport à son élément parent)
    */

});
