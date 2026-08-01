let cart = JSON.parse(localStorage.getItem("cart")) || [];

let editIndex = -1;

displayProducts();

function saveData(){
    localStorage.setItem("cart",JSON.stringify(cart));
}

function addProduct(){

    let name = document.getElementById("name").value;
    let price = document.getElementById("price").value;
    let quantity = document.getElementById("quantity").value;
    let category = document.getElementById("category").value;

    if(name=="" || price=="" || quantity=="" || category==""){
        alert("Fill all fields");
        return;
    }

    let product={
        name:name,
        price:Number(price),
        quantity:Number(quantity),
        category:category
    };

    if(editIndex==-1){
        cart.push(product);
    }
    else{
        cart[editIndex]=product;
        editIndex=-1;
        document.getElementById("btn").innerHTML="Add Product";
    }

    saveData();

    clearInput();

    displayProducts();

}

function displayProducts(){

    let data=cart;

    let search=document.getElementById("search").value.toLowerCase();

    let filter=document.getElementById("filter").value;

    data=data.filter(function(item){
        return item.name.toLowerCase().includes(search);
    });

    if(filter!="All"){
        data=data.filter(function(item){
            return item.category==filter;
        });
    }

    let output="";

    data.forEach(function(item,index){

        output+=`

        <div class="card">

        <h3>${item.name}</h3>

        <p>Price : ₹${item.price}</p>

        <p>Quantity : ${item.quantity}</p>

        <p>Category : ${item.category}</p>

        <button onclick="editProduct(${cart.indexOf(item)})">Edit</button>

        <button onclick="deleteProduct(${cart.indexOf(item)})">Delete</button>

        </div>

        `;

    });

    document.getElementById("products").innerHTML=output;

    updateSummary();

}

function deleteProduct(index){

    cart.splice(index,1);

    saveData();

    displayProducts();

}

function editProduct(index){

    let product=cart.find(function(item,i){
        return i==index;
    });

    document.getElementById("name").value=product.name;
    document.getElementById("price").value=product.price;
    document.getElementById("quantity").value=product.quantity;
    document.getElementById("category").value=product.category;

    editIndex=index;

    document.getElementById("btn").innerHTML="Update Product";

}

function clearInput(){

    document.getElementById("name").value="";
    document.getElementById("price").value="";
    document.getElementById("quantity").value="";
    document.getElementById("category").value="";

}

function updateSummary(){

    let totalProducts=cart.length;

    let totalQuantity=cart.reduce(function(total,item){
        return total+item.quantity;
    },0);

    let grandTotal=cart.reduce(function(total,item){
        return total+(item.price*item.quantity);
    },0);

    document.getElementById("summary").innerHTML=
    `
    Total Products : ${totalProducts} <br>
    Total Quantity : ${totalQuantity} <br>
    Grand Total : ₹${grandTotal}
    `;

}

function clearCart(){

    if(confirm("Clear Cart?")){

        cart=[];

        saveData();

        displayProducts();

    }

}