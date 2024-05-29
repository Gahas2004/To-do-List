document.addEventListener('DOMContentLoaded', (event) => {
    let myNodelist = document.getElementsByTagName("li");
    for (let i = 0; i < myNodelist.length; i++) {
        addCloseButton(myNodelist[i]);
        addEditButton(myNodelist[i]);
    }

    let close = document.getElementsByClassName("close");
    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            let div = this.parentElement;
            div.style.display = "none";
        }
    }

    let list = document.querySelector('ul');
    list.addEventListener('click', function (ev) {
        if (ev.target.tagName === 'LI') {
            ev.target.classList.toggle('checked');
        }
    }, false);
});

function addElemento() {
    let li = document.createElement("li");
    let inputValue = document.getElementById("tarefa").value.toUpperCase();
    let date = new Date();
    let dateString = date.toLocaleDateString();
    let t = document.createTextNode(`${dateString} - ${inputValue}`);
    li.appendChild(t);
    if (inputValue === '') {
        alert("Você precisa descrever a tarefa");
    } else {
        document.getElementById("itemLista").appendChild(li);
    }
    document.getElementById("tarefa").value = "";
    addCloseButton(li);
    addEditButton(li);
}

function addCloseButton(li) {
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    span.onclick = function () {
        let div = this.parentElement;
        div.style.display = "none";
    }
}

function addEditButton(li) {
    let editBtn = document.createElement("SPAN");
    let txt = document.createTextNode("Editar");
    editBtn.className = "editBtn";
    editBtn.appendChild(txt);
    li.appendChild(editBtn);

    editBtn.onclick = function () {
        let currentText = li.firstChild.textContent.split(" - ")[1];
        let newText = prompt("Editar tarefa:", currentText);
        if (newText) {
            let date = new Date();
            let dateString = date.toLocaleDateString();
            li.firstChild.textContent = `${dateString} - ${newText.toUpperCase()}`;
        }
    }
}

function limparLista() {
    let ul = document.getElementById("itemLista");
    ul.innerHTML = '';
}
