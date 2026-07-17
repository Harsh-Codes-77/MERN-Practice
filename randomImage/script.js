const products = [
    {
        name: "Laptop",
        price: "₹50,000",
        image: "https://imgs.search.brave.com/Efy6gEXgVmXG5ghIDIs9ezZfNyQsG01OGx5dMJX8uuA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kbGNk/bndlYmltZ3MuYXN1/cy5jb20vZ2Fpbi9m/ZjhlZjM3ZC05ZTkx/LTQzODctYjUwZS0w/NjAzYTkwNjlmMDkv/dzUzNA"
    },
    {
        name: "Desktop",
        price: "₹70,000",
        image: "https://imgs.search.brave.com/4lNwK4BqN16-edCO3a0S6NhCpvd07ym6WwTu8MPridA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQx/OTkyNjE5Ny9waG90/by9iZXJsaW4tZ2Vy/bWFueS1hbi1hc3Vz/LXplbmJvb2stMTct/Zm9sZC1sYXB0b3At/Y29tcHV0ZXItaXMt/c2Vlbi1kdXJpbmct/YS1wcmVzcy1wcmV2/aWV3LWF0LXRoZS5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/cmZFZHhzU2I0MlNu/aFdGdlZPSVlMM2hh/Y0V2LUpBOTZ1ODlr/c29fMWoxTT0"
    },
    {
        name: "Mobile",
        price: "₹25,000",
        image: "https://imgs.search.brave.com/889gkKC4zULLBPwlAcZlG2Y7erT0lS-3PHGO9utc1CI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YW5kcm9pZGhlYWRs/aW5lcy5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMjUvMDEv/U2Ftc3VuZy1HYWxh/eHktUzI1LW9mZmlj/aWFsLXJlbmRlci0x/LTM1NXgzNTUud2Vi/cA"
    },
    {
        name: "Tablet",
        price: "₹18,000",
        image: "https://imgs.search.brave.com/UxEaLxNdA-o7llGl0Rdtj8lWMBTitRNZTyr87orVThk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzF3QzFlSWJiN0wu/anBn"
    }
];
const productName = document.getElementById("productName");
const productPrice = document.getElementById("price");
const productImage = document.getElementById("randomImage");
const btn = document.getElementById("newImage");

function showRandomProduct() {
    const randomIndex = Math.floor(Math.random() * products.length);

    productName.textContent = products[randomIndex].name;
    productPrice.textContent = products[randomIndex].price;
    productImage.src = products[randomIndex].image;
}
btn.onclick = function () {
    showRandomProduct();
};