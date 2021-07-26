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
    //Conversion du chiffre en euro
    let price = new Intl.NumberFormat("fr-FR", {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 2,
    }).format(product.price / 100);

    //Récupération de l'élément "produit"
    let elementProduct = document.getElementById("produit");

    //Réécriture du HTML en insérant les données de l'objet
    elementProduct.innerHTML = `<img class="presentation-produit__image" src="${product.imageUrl}" alt="${product.name}">
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
                                                    <button class="produit-texte__bouton" id="ajout-panier" type="button">Ajouter au panier</button>
                                                </div>`;

    //Récupération des couleurs pour personnaliser la peluche
    const choixCouleur = product.colors;

    //Boucle pour créer les options de couleur
    choixCouleur.forEach((color) => {
      const nouvelleCouleur = document.createElement("option");
      let option = document.getElementById("couleur");
      option.appendChild(nouvelleCouleur);
      nouvelleCouleur.value = couleur;
      nouvelleCouleur.textContent = color;
    });

    //Récupération de l'élément bouton "ajouter au panier"
    let ajoutPanier = document.getElementById("ajout-panier");


    let nouveauProduit = [
      product._id,
      product.name,
      product.price,
      product.imageUrl
    ]
      

    //Création de l'évènement lors du click
    ajoutPanier.addEventListener("click", () => {


      if (localStorage.getItem("panier") !== null) {
        alert("Y a un truc dans le panier !");

        donnéesPanier = JSON.parse(localStorage.getItem("panier"));
        /*console.log(donnéesPanier);*/
        let panier = [donnéesPanier];
        console.log(panier);

        let nouveauPanier = panier.push(nouveauProduit);
        console.log(panier);
        

      } else {
        alert("Le panier est vide !");
        let premierProduit = localStorage.setItem(
          "panier",
          JSON.stringify(nouveauProduit)
        );
      }

      /*
      If(il y a déjà des données dans le local storage){
        Ajouter le nouveau produit au tableau
      } else {
        créer un nouveau tableau et ajouter données dedans

        produit.length

      }
      
      
      */
    });

    /*
    try {
      localStorage.setItem("key", "value");
    } catch(e){

    /*
    1. Récupérer l'élément
    2. Créer un événement
    3. Stocker les données dans le local storage (JSON) JSON.stringify($DATAS)
  
      Si il y a déja des données ajouter le nouveuau produit au tableau
      Si il y a pas de donnée ajouter le produit dans un tableau
    
     "récupére le localstorage JSON.parse($DATAS)"
    */
  });
