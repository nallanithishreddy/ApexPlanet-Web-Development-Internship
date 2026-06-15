let applications =
JSON.parse(localStorage.getItem("applications")) || [];

function saveData(){

    localStorage.setItem(
        "applications",
        JSON.stringify(applications)
    );

}

function addApplication(){

    const company =
    document.getElementById("company").value;

    const role =
    document.getElementById("role").value;

    const status =
    document.getElementById("status").value;

    if(company === "" || role === ""){

        alert("Please fill all fields");
        return;
    }

    applications.push({
        company,
        role,
        status
    });

    saveData();

    displayApplications();

    document.getElementById("company").value = "";
    document.getElementById("role").value = "";

}

function deleteApplication(index){

    applications.splice(index,1);

    saveData();

    displayApplications();

}

function displayApplications(){

    const list =
    document.getElementById("applicationList");

    list.innerHTML = "";

    const searchText =
    document.getElementById("search").value.toLowerCase();

    const filterValue =
    document.getElementById("filter").value;

    let applied = 0;
    let interview = 0;
    let selected = 0;
    let rejected = 0;

    applications.forEach((app,index)=>{

        if(
            !app.company.toLowerCase().includes(searchText)
        ){
            return;
        }

        if(
            filterValue !== "All" &&
            app.status !== filterValue
        ){
            return;
        }

        if(app.status === "Applied") applied++;
        if(app.status === "Interview") interview++;
        if(app.status === "Selected") selected++;
        if(app.status === "Rejected") rejected++;

        const div =
        document.createElement("div");

        div.classList.add("application");

        let statusClass =
        app.status.toLowerCase();

        div.innerHTML = `
            <h3>${app.company}</h3>
            <p><strong>Role:</strong> ${app.role}</p>
            <p class="${statusClass}">
                ${app.status}
            </p>

            <button
            class="delete-btn"
            onclick="deleteApplication(${index})">

            Delete

            </button>
        `;

        list.appendChild(div);

    });

    document.getElementById("total")
    .textContent = applications.length;

    document.getElementById("applied")
    .textContent = applied;

    document.getElementById("interview")
    .textContent = interview;

    document.getElementById("selected")
    .textContent = selected;

    document.getElementById("rejected")
    .textContent = rejected;

}

displayApplications();