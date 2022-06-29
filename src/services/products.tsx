const URL_BASE = "http://localhost:3000";
console.log(URL_BASE)
interface Product {
    id?: number,
    name: string,
    description: string,
    category_id: number,
    image?: string
}

const createProduct = (data: Product) => {
    const payload = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    return fetch(`${URL_BASE}/products`, payload)
}



const product = {
    createProduct,
}

export default product;