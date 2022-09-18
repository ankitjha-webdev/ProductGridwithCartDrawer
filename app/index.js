
// Json data address
const api_url = "/data/products.json";

// A function to fetch the data from the product.json file
const productData = async (url) => {
    const response = await fetch(url);

    var data = await response.json();
    
    console.log(data);
    if (response) {
        // hideloader();
    }
    show(data);
}

productData(api_url);


// Function to hide the loader
// const hideloader = () => {
//     document.getElementById('loading').style.display = 'none';
// }