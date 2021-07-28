//Récupération des datas
let url = "http://localhost:3000/api/teddies";
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

    //Récupérer ce qu'il y a dans le panier (local storage)
    let panierPlein = JSON.parse(localStorage.getItem("panier"));
    console.log(panierPlein);

    //Récupération de l'élément "panier" (balise article HTML)
    let elementsPanier = document.getElementById("produits");
    console.log(elementsPanier);

    //IF il y a quelque chose dans le paniee
    panierPlein.forEach((item, index) => {
        console.log(item, index);
        let nouvelArticle = document.createElement("div");
        elementsPanier.appendChild(nouvelArticle);
        nouvelArticle.className =  "panier_produit";
        nouvelArticle.innerHTML = `<img class="panier__produit--image" src="${item[3]}" alt="${item[1]}" />
                                    <h2 class="panier__produit--nom">${item[1]}</h2>
                                    <p class="panier__produit--prix">${item[2]}</p>`
    });

    //ELSE il n'y a rien dans le panier

  });

  


/*
1. Récupérer ce qu'il y a dans le local storage
2. Créer nouvel objet "article" pour chaque array dans le local storage
3. Ajouter les données de chaque article du panier au HTML
*/
