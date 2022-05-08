function duplicarCampos() {

    var destino = document.getElementById('destino');
    destino.classList.remove('aparecer');

    var clone = document.getElementById('criar-personagem').cloneNode(true);

    destino.append(clone);

    var camposClonados = clone.querySelectorAll("imput label div h1");
    console.log(camposClonados)

    for (i = 0; i < camposClonados.length; i++) {
        camposClonados[i].value = '';
    }

}

function removerCampos() {
    var node1 = document.getElementById('destino');
    node1.removeChild(node1.childNodes[0]);

}