const storeContainerId = "store"
const cartContentContainerId = "cartContent"

const product = [
    {
        id: 1,
        title: "Товар 1",
        price: 150,
        imageUrl: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
    },
    {
        id: 2,
        title: "Товар 2",
        price: 100,
        imageUrl: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
    },
    {
        id: 3,
        title: "Товар 3",
        price: 250,
        imageUrl: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
    },
    {
        id: 4,
        title: "Товар 4",
        price: 50,
        imageUrl: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
    },
    {
        id: 5,
        title: "Товар 5",
        price: 100,
        imageUrl: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
    },
    {
        id: 6,
        title: "Товар 6",
        price: 200,
        imageUrl: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
    },
    {
        id: 7,
        title: "Товар 7",
        price: 350,
        imageUrl: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
    },
    {
        id: 8,
        title: "Товар 8",
        price: 75,
        imageUrl: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    },
    {
        id: 9,
        title: "Товар 9",
        price: 150,
        imageUrl: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    },
    {
        id: 10,
        title: "Товар 10",
        price: 50,
        imageUrl: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    },
]

function createStoreLayout() {
    const storeContainer = document.getElementById(storeContainerId)

    const storeContent = document.createElement("section")
    storeContent.classList.add("store-content")

    storeContent.appendChild(getProductsLayout())
    storeContent.appendChild(getCartLayout())
    storeContainer.appendChild(storeContent)
}

function updateCartContentLayout() {
    const cartContentContainer = document.getElementById(cartContentContainerId)

    if (cartContent.length) {
        cartContentContainer.innerHTML = ""

        cartContent.forEach((product) => {
            const cartContentItem = document.createElement("div")
            cartContentItem.classList.add("cart-content-item")
            cartContentItem.innerHTML = `<img src='${product.imageUrl}' />
                <div>
                    <div class='product-title'>${product.title}</div>
                    <div>${product.price} ₽</div>
                    <div class="button" onclick="removeFromCartOnClickHandler(${product.id})">Удалить</div>
                </div>`

            cartContentContainer.appendChild(cartContentItem)
        })
    } else {
        cartContentContainer.innerHTML = "<div>Корзина пуста</div>"
    }
}

createStoreLayout()
updateCartContentLayout()