//Création de l'url à partir de l'ID
var URLSearchParams = new URLSearchParams(window.location.search);
var urlId = URLSearchParams.get("_id");

//Récupération des données de l'objet correspondant à l'ID
let url = `http://localhost:3000/api/teddies/${urlId}`;
fetch(url, { method: "GET" })
  .then((data) => {
    return data.json();
  })
  .then((product) => {
    //Conversion du prix en euro
    let price = new Intl.NumberFormat("fr-FR", {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 2,
    }).format(product.price / 100);

//-----------------INSERTION DU PRODUIT-------------------------------------------

    //Récupération de l'élément "produit"
    let elementProduct = document.getElementById("produit");

    //Réécriture du HTML en insérant les données de l'objet
    elementProduct.innerHTML = `<img class="presentation-produit__image" src="${product.imageUrl}" alt="${product.name}">
                                                <div class="presentation-produit__texte produit-texte">
                                                    <h2 class="produit-texte__titre">${product.name}</h2>
                                                    <p class="produit-texte__prix">${price}</p>
                                                    <div class="produit-texte__personnaliser personnaliser">
                                                        <form method="" action="">
                                                            <p>
                                                                <label for="couleur">Choisir la couleur :</label><br />
                                                                <select id="couleur" name="couleur">
                                                                </select>
                                                                <input type="button" id="ajout-panier" class="produit-texte__bouton" value="Ajouter au panier"></input>
                                                            </p>
                                                        </form>
                                                    </div>
                                                    <p class="produit-texte__description">${product.description}</p>
                                                </div>`;

//-------------LES OPTIONS DU PRODUIT-------------------------------------------

    //Récupération des couleurs pour personnaliser la peluche
    const optionCouleur = product.colors;

    //Récupération de l'élément HTML pour ajouter les options
    let option = document.getElementById("couleur");

    //Boucle pour créer les options de couleur
    optionCouleur.forEach((color) => {
      const nouvelleCouleur = document.createElement("option");
      option.appendChild(nouvelleCouleur);
      nouvelleCouleur.value = color;
      nouvelleCouleur.textContent = color;
    });

//-------------Ecoute de l'EVENEMENT lors du click--------------------------------

    //Récupération de l'élément bouton "ajouter au panier"
    let ajoutPanier = document.getElementById("ajout-panier");

    //Création de l'évènement
    ajoutPanier.addEventListener("click", (event) => {
      event.preventDefault();

//-------------------CREATION DU PANIER----------------------------------------------

      //Récupère l'option choisie
      choixCouleur = option.value;

      //Création du panier
      let nouveauProduit = {
        id: product._id,
        name: product.name,
        price: product.price,
        imageUrl: product.imageUrl,
        color: choixCouleur,
      };
      console.log(nouveauProduit);

      //Récupère le contenu du panier
      let panier = JSON.parse(localStorage.getItem("panier"));

/*---------S'IL Y A QUELQUE CHOSE DANS LE PANIER--------------------------------
        1. Ajout du produit dans le tableau
        2. Envoie dans le local storage*/

      if (localStorage.getItem("panier") !== null) {
        panier.push(nouveauProduit);
        localStorage.setItem("panier", JSON.stringify(panier));

/*-----------SI LE PANIER EST VIDE-------------------------------------------------
        1. Création d'un tableau vide
        2. Ajout du produit dans le tableau
        3. Envoie dans le local storage*/
      } else {
        panier = [];
        panier.push(nouveauProduit);
        localStorage.setItem("panier", JSON.stringify(panier));
      }
    });
  });
