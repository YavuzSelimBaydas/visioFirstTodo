//Favorilere ekleme

let favorites = getFavorites();

function getFavorites() {
    let favorites = localStorage.getItem('favorites');

    if ( favorites === null || ! favorites ) {
        favorites = [];
    } else {
        favorites = favorites.split(',');
    }

    return favorites;
}

if ( favorites )
    favorites.map(addToFavorites);

function addToFavorites( hearth ) {
    let e = document.getElementById(hearth);

    e.classList.add('text-danger');
    e.classList.add('fas');

    e.classList.remove('text-muted');
    e.classList.remove('far');
}

function heartClicked( e ) {

    if ( favorites.indexOf( e.id ) === -1 ) {
        favorites.push( e.id )
        e.classList.add('text-danger');
        e.classList.add('fas');

        e.classList.remove('text-muted');
        e.classList.remove('far');
    } else {
        favorites.pop( e.id )

        e.classList.remove('text-danger');
        e.classList.remove('fas');

        e.classList.add('text-muted');
        e.classList.add('far');
    }

    localStorage.setItem( 'favorites', favorites.toString() );
}






// Sepete ürün yükleme

const cartDiv = document.getElementById('cartDiv');

let cart = getCart();
cartDiv.innerHTML = cart.length;


function getCart() {
    let cart = localStorage.getItem('cart');

    if ( cart === null || ! cart ) {
        cart = [];
    } else {
        cart = cart.split(',');
    }
    return cart;
}

function addToCartOrRemove( e ) {
    if ( cart.indexOf( e ) === -1 ) {
        cart.push( e );
    } else {
        cart.pop( e );
    }

    localStorage.setItem( 'cart', cart.toString() )

    cartDiv.innerHTML = cart.length;
}