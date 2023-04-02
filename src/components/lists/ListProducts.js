import {useState} from "react";
import Product from "./Product";


function ListProducts(){
    const productsList = [
        {
            name: 'Apple iPhone 13',
            description: '6.1-inch Super Retina XDR display, Ceramic Shield front cover, A15 Bionic chip with Neural Engine, 5G capable',
            price: 799
        },
        {
            name: 'Samsung Galaxy S21',
            description: '6.2-inch Dynamic AMOLED 2X display, Corning Gorilla Glass Victus, Exynos 2100 (5 nm) - International, Qualcomm SM8350 Snapdragon 888 5G (5 nm) - USA/China',
            price: 699
        },
        {
            name: 'Sony PlayStation 5',
            description: 'AMD Zen 2-based CPU with 8 cores at 3.5GHz, 10.28 teraflops GPU with 36 compute units at 2.23GHz, 16GB GDDR6/256-bit RAM, 825GB PCIe Gen 4 NVMe SSD',
            price: 499
        },
        {
            name: 'Apple MacBook Pro 16-inch',
            description: '16-inch Retina display with True Tone, Touch Bar and Touch ID, 9th-generation 8-core Intel Core i9 processor, AMD Radeon Pro 5500M graphics with GDDR6 memory, 1TB SSD storage',
            price: 2399
        },
        {
            name: 'Tesla Model S',
            description: 'Range up to 373 miles, 0-60 mph in 1.98 seconds, 1,020 horsepower, 10 teraflops processing power',
            price: 79990
        }
    ];

    const productsToAdd = [
        {
            name: 'Google Pixel 6',
            description: '6.4-inch AMOLED display, Corning Gorilla Glass 6, Google Tensor chip with 8-core processor, 5G capable',
            price: 699
        },
        {
            name: 'Samsung Galaxy Z Fold 3',
            description: '7.6-inch Dynamic AMOLED 2X foldable display, Corning Gorilla Glass Victus, Qualcomm SM8350 Snapdragon 888 5G (5 nm), 12GB RAM',
            price: 1799
        },
        {
            name: 'Dell XPS 13',
            description: '13.4-inch FHD+ InfinityEdge display, 11th Generation Intel Core i7-1165G7 Processor, Intel Iris Xe Graphics, 16GB LPDDR4x RAM, 1TB SSD storage',
            price: 1399
        }
    ];

    const [products, setProducts] = useState(productsList)

    function addProduct() {
        const removed = removeRandomElement(productsToAdd)
        if (removed){

            setProducts( previous => [...previous, removed])
        }
    }
    function removeRandomElement(arr) {
        if (arr.length === 0) {
            return null;
        }
        const randomIndex = Math.floor(Math.random() * arr.length);
        const removedElement = arr.splice(randomIndex, 1)[0];
        return removedElement;
    }

    const classDiv = {
        display: 'flex',
        flexDirection: 'column'

    }
    return (
        <div style={classDiv}>




            <div>
                <button onClick={addProduct}> Add Product</button>

            </div>
            <div>
            <ul>
                {
                    products.map(
                        (product) => <Product id={product.name} name={product.name}
                                              description = {product.description}
                                              price={product.price} />

                        // end map
                    )

                }

            </ul>



        </div>
        </div>

// return
    )

}
export default ListProducts
