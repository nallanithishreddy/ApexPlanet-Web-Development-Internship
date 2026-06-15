/* ---------------- TO-DO APP ---------------- */

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function renderTasks(){

    const taskList = document.getElementById("taskList");

    if(!taskList) return;

    taskList.innerHTML = "";

    tasks.forEach((task,index)=>{

        const li = document.createElement("li");

        li.innerHTML = `
            ${task}
            <button onclick="deleteTask(${index})">
                Delete
            </button>
        `;

        taskList.appendChild(li);

    });

}

function addTask(){

    const input = document.getElementById("taskInput");

    if(!input || input.value === "") return;

    tasks.push(input.value);

    localStorage.setItem(
        "tasks",
        JSON.stringify(tasks)
    );

    input.value = "";

    renderTasks();

}

function deleteTask(index){

    tasks.splice(index,1);

    localStorage.setItem(
        "tasks",
        JSON.stringify(tasks)
    );

    renderTasks();

}

renderTasks();

/* ---------------- PRODUCT LIST ---------------- */

let products = [

{
name:"Laptop",
category:"Electronics",
price:50000
},

{
name:"T-Shirt",
category:"Clothing",
price:1000
},

{
name:"Phone",
category:"Electronics",
price:25000
}

];

function displayProducts(data){

    const productList =
    document.getElementById("productList");

    if(!productList) return;

    productList.innerHTML = "";

    data.forEach(product=>{

        const div = document.createElement("div");

        div.classList.add("product");

        div.innerHTML = `
            <h3>${product.name}</h3>
            <p>Category: ${product.category}</p>
            <p>Price: ₹${product.price}</p>
        `;

        productList.appendChild(div);

    });

}

function filterProducts(){

    const value =
    document.getElementById("filter").value;

    if(value === "all"){

        displayProducts(products);

    }else{

        const filtered =
        products.filter(
            product =>
            product.category === value
        );

        displayProducts(filtered);

    }

}

function sortProducts(){

    products.sort(
        (a,b)=>a.price-b.price
    );

    displayProducts(products);

}

displayProducts(products);