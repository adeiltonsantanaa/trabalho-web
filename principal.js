var controle = 0;
var destino = document.getElementById('destino');

function duplicarCampos() {

    if (controle < 7) {
        destino.classList.remove('aparecer');

        var clone = document.getElementById('criar-personagem').cloneNode(true);

        destino.append(clone);

        var camposClonados = clone.querySelectorAll("imput label div h1");

        for (i = 0; i < camposClonados.length; i++) {
            camposClonados[i].value = '';
        }
        controle++
    } else {
        console.log("Não é possível adicionar mais que 8")
    }



}

function removerCampos() {

    if (controle != 0 || controle > 0) {
        var node1 = document.getElementById('destino');
        node1.removeChild(node1.childNodes[0]);
        controle--

    } else if (controle < 1) {
        destino.classList.add('aparecer');
    }
}