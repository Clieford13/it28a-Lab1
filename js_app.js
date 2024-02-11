document.addEventListener("DOMContentLoaded", function () {
    fetch('json_data.json')
    .then(response => response.json())
    .then(data => {
        const Catalogue = document.getElementById('Catalogue');
            data.forEach(Product => {
        const productDiv = document.createElement('div');
            productDiv.innerHTML = `
                <h2>${Product.Product_Name}</h2>
                <p>Product Description: ${Product.Product_Description}</p>
                <p>Product Price: $${Product.Product_Price}</p>
                <p>Product Date Added: ${Product.Product_DateAdded}</p>
                <hr>
            `;
            Catalogue.appendChild(productDiv);
        });
    })
    .catch(error => console.error('Error fetching data:', error));
});