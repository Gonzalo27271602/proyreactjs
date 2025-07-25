const products = [
    {
        id: 1,
        name: "name1",
        description: "object1",
        stock: 1,
        image: "/img/automatizacion.jpg",
        price: "100 u$d",
        category: "gas",
    },
    {
        id: 2,
        name: "name2",
        description: "object2",
        stock: 1,
        image: "/img/CeldaMT.webp",
        price: "100 u$d",
        category: "gas",
    },
    {
        id: 3,
        name: "name3",
        description: "object3",
        stock: 1,
        image: "/img/montajes eléctricos.jpg",
        price: "100 u$d",
        category: "aire",
    },
    {
        id: 4,
        name: "name4",
        description: "object4",
        stock: 1,
        image: "/img/mediciones.jpg",
        price: "100 u$d",
        category: "fueloil",
    },
    {
        id: 5,
        name: "name5",
        description: "object5",
        stock: 1,
        image: "/img/panelsolar.jpg",
        price: "100 u$d",
        category: "programadores",
    },
    {
        id: 6,
        name: "name6",
        description: "object6",
        stock: 1,
        image: "/img/trabajador.jpg",
        price: "100 u$d",
        category: "quemadores",
    },
    {
        id: 7,
        name: "name7",
        description: "object7",
        stock: 1,
        image: "/img/ingenieria.jpg",
        price: "100 u$d",
        category: "aire",
    },
    {
        id: 8,
        name: "name8",
        description: "object8",
        stock: 1,
        image: "/img/ingenieria.jpg",
        price: "100 u$d",
        category: "programadores",
    },
    {
        id: 9,
        name: "name9",
        description: "object9",
        stock: 1,
        image: "/img/ingenieria.jpg",
        price: "100 u$d",
        category: "quemadores",
    },
    {
        id: 10,
        name: "name10",
        description: "object10",
        stock: 1,
        image: "/img/ingenieria.jpg",
        price: "100 u$d",
        category: "aire",
    },
    {
        id: 11,
        name: "name11",
        description: "object11",
        stock: 1,
        image: "/img/ingenieria.jpg",
        price: "100 u$d",
        category: "programadores",
    },
    {
        id: 12,
        name: "name12",
        description: "object12",
        stock: 1,
        image: "/img/ingenieria.jpg",
        price: "100 u$d",
        category: "quemadores",
    },
];

const getProducts = () => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve(products);
        }, 1500);
    });
};

const getProductsById = (productId) => {
    return new Promise ((resolve, reject) => {

        setTimeout(() => {
        const product = products.find((product) => product.id === productId);
        resolve(product);
        }, 1000);
    });
};

export {getProducts, getProductsById};
