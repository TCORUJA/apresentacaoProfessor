function criarApresentacao() {
    var texto1 = document.getElementById('texto1').value;
    var texto2 = document.getElementById('texto2').value.replace(/(\r\n|\n|\r)/gm, "</p>\n\<p>").replaceAll("<p></p>", "<br>").replace("<p></p>", "<br>");
    var texto3 = document.getElementById('texto3').value;

    document.getElementById('copiar').value = "<div style='text-align: center; font-size: 18px; padding: 15px; border: 1px solid #d7dfe3; border-radius: 15px; background-color:  #0f96ae41; background-color:  #ef7b0013;'><div style='display: grid; grid-template-columns: 350px auto;'><div style='margin: auto; padding-right: 5px;'><img src='https://graduacao.unisuam.edu.br/draftfile.php/456663/user/draft/401564928/imagem%20professor.png' alt='Imagem do Professor da Disciplina' width='480' height='640' style='width: 320px; height: 320px; border-radius: 50%; border: 1px solid #d7dfe3; background-color: #ffffff;'><p style='text-align: center; color: #FF7514; font-weight: bold; font-size: 22px;'>" + texto1 + "</p></div><div style='margin: auto; padding-left: 5px;'><p style='text-align: left; '>" + texto2 + "</p></div></div><hr style='width: 90%; color: #FF7514;'><div style='display: inline;'><div style='margin: auto;'><p style='text-align: center; color: #FF7514; font-weight: bold; font-size: 20px;'>Vídeo do professor:</p></div><div style='margin: auto 0px;'><p style='text-align: center;'><iframe style='border-radius: 8px; border: 1px solid #ffffff00;' src='" + texto3 + "'width='540'  height='380' allow='autoplay'></iframe></p> </div></div></div>";

    document.getElementById('copiar').disabled = true;
    document.getElementById('informacao3').classList.remove('displayNone');
    document.getElementById('informacao4').classList.remove('displayNone');
    
    window.scrollTo(0, 9999);
}




function copiarTexto() {
    var textoCopiado = document.getElementById('copiar');
    
    document.getElementById('copiar').disabled = false;

    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999);
    document.execCommand('copy');

    document.getElementById('copiar').disabled = true;
}