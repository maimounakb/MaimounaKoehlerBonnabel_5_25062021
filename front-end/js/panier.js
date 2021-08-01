//Récupération des datas
let url = "http://localhost:3000/api/teddies";
fetch(url, { method: "GET" })
  .then((data) => {
    return data.json();
  })
  .then((product) => {
    //Récupérer ce qu'il y a dans le panier (local storage)
    let panierPlein = JSON.parse(localStorage.getItem("panier"));

    //Récupération de l'élément "panier" (balise article HTML)
    let elementsPanier = document.getElementById("panier");
    let elementsPanierProduits = document.getElementById("produits");

    /*--------------------------------SI PANIER REMPLI----------------------------------------*/

    //Si il y a quelque chose dans le panier
    if (localStorage.getItem("panier") !== null) {
      //Pour chaque produit dans le tableau
      panierPlein.forEach((item, index) => {
        //Conversion du chiffre en euro
        let price = new Intl.NumberFormat("fr-FR", {
          style: "currency",
          currency: "EUR",
          minimumFractionDigits: 2,
        }).format(item.price / 100);

        //Création d'une nouvelle div avec la classe "panier__produit", enfant de la div avec l'id "produits"
        let nouvelArticle = document.createElement("div");
        elementsPanierProduits.appendChild(nouvelArticle);
        nouvelArticle.className = "panier-produit";
        //Ajout des caractéristiques du produit
        nouvelArticle.innerHTML = `<img class="panier-produit--image" src="${item.imageUrl}" alt="${item.name}" />
                                    <h2 class="panier-produit--nom">${item.name}</h2>
                                    <h3 class="panier-produit--couleur">${item.color}</h3>
                                    <p class="panier-produit--prix">${price}</p>`;
      });

      /*------------------------------------PRIX TOTAL---------------------------------------------*/

      //Calcul du prix total
      var valeurInitiale = 0;
      var total = panierPlein.reduce(
        (accumulateur, valeurCourante) => accumulateur + valeurCourante.price,
        valeurInitiale
      );

      //Conversion du prix total en euros
      let totalPrice = new Intl.NumberFormat("fr-FR", {
        style: "currency",
        currency: "EUR",
        minimumFractionDigits: 2,
      }).format(total / 100);

      let elementTotalPrice = document.getElementById("panier-total");
      console.log
      elementTotalPrice.innerHTML = `<p class="panier-total--texte">Total :</p>
                                     <p class="panier-total--prix">${totalPrice}</p>`;

      /*---------------------------------SI PANIER VIDE-----------------------------------------------*/
    } else {
      //Si le panier est vide, création d'un paragraphe pour alerter
      elementsPanier.innerHTML = `<p class="panier-produit--vide">Le panier est vide.</p>`;
    }
  });
