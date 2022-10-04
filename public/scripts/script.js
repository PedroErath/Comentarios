document.addEventListener('DOMContentLoaded', () => {
    updateComents();
})

function updateComents() {
    fetch("http://localhost:3000/api/all").then((res) => {
        return res.json();
    }).then((json) => {
        let comentElements = "";
        let coments = JSON.parse(json);

        coments.forEach((coment) => {
            let comentElement = `<div id=${coment.id} class="card mt-3 w-50">
                                    <div class="card-header">
                                        <h4>${coment.nome}</h4>
                                    </div>
                                    <div class="card-body">
                                        <p class="card-text">${coment.description}</p>
                                    </div>
                                </div>`
            comentElements += comentElement;
        })

        document.getElementById("coments").innerHTML = comentElements;
    })

}

function newComent() {
    let nome = document.getElementById("inputNome").value;
    let description = document.getElementById("inputDesc").value;

    let coment = { nome, description };

    const options = { 
        method: "POST", headers: new Headers({ 'content-type': 'application/json' }), 
        body: JSON.stringify(coment)
    }

    fetch("http://localhost:3000/api/new", options);

}