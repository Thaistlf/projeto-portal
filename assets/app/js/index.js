$(document).ready(function(){
    var cep = null;

    $("#buscarEnderecoBTN").click(function(){

        if(cep != "") {
            var buscaEndereco = new BuscaEndereco(cep);

            buscaEndereco.busca();
        }
    });
});
