function r(n,c){var i="https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js";window.ShopifyBuy&&window.ShopifyBuy.UI?e():o();function o(){var t=document.createElement("script");t.async=!0,t.src=i,(document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]).appendChild(t),t.onload=e}function e(){var t=ShopifyBuy.buildClient({domain:"bandhan-434c.myshopify.com",storefrontAccessToken:"54003e4d70bff0658062f3c8df074568"});ShopifyBuy.UI.onReady(t).then(function(a){a.createComponent("product",{id:n,node:document.getElementById("product-component-"+c),moneyFormat:"%24%7B%7Bamount%7D%7D",options:{product:{styles:{product:{"@media (min-width: 601px)":{"max-width":"100%","margin-left":"0","margin-bottom":"50px"},"text-align":"left"},title:{"font-size":"26px"},button:{":hover":{"background-color":"#bf9b93"},"background-color":"#d4aca3",":focus":{"background-color":"#bf9b93"},"padding-left":"79px","padding-right":"79px"},price:{"font-size":"18px"},compareAt:{"font-size":"15.299999999999999px"},unitPrice:{"font-size":"15.299999999999999px"}},layout:"horizontal",contents:{img:!1,imgWithCarousel:!0,button:!1,buttonWithQuantity:!0,description:!0},width:"100%",text:{button:"Add to cart"}},productSet:{styles:{products:{"@media (min-width: 601px)":{"margin-left":"-20px"}}}},modalProduct:{contents:{img:!1,imgWithCarousel:!0,button:!1,buttonWithQuantity:!0},styles:{product:{"@media (min-width: 601px)":{"max-width":"100%","margin-left":"0px","margin-bottom":"0px"}},button:{":hover":{"background-color":"#bf9b93"},"background-color":"#d4aca3",":focus":{"background-color":"#bf9b93"},"padding-left":"79px","padding-right":"79px"},title:{"font-family":"Helvetica Neue, sans-serif","font-weight":"bold","font-size":"26px",color:"#4c4c4c"},price:{"font-family":"Helvetica Neue, sans-serif","font-weight":"normal","font-size":"18px",color:"#4c4c4c"},compareAt:{"font-family":"Helvetica Neue, sans-serif","font-weight":"normal","font-size":"15.299999999999999px",color:"#4c4c4c"},unitPrice:{"font-family":"Helvetica Neue, sans-serif","font-weight":"normal","font-size":"15.299999999999999px",color:"#4c4c4c"}},text:{button:"add to cart"}},option:{},cart:{styles:{button:{":hover":{"background-color":"#bf9b93"},"background-color":"#d4aca3",":focus":{"background-color":"#bf9b93"}}},text:{total:"Subtotal",button:"checkout"},contents:{note:!0}},toggle:{styles:{toggle:{"background-color":"#d4aca3",":hover":{"background-color":"#bf9b93"},":focus":{"background-color":"#bf9b93"}}}}}})})}}export{r as l};
