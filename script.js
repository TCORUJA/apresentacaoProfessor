function criarApresentacao1_0() {
    document.getElementById('escolha').classList.add('displayNone');
    document.getElementById('HTML1_1').classList.remove('displayNone');
    document.getElementById('HTML2_1').classList.add('displayNone');
}
function criarApresentacao2_0() {
    document.getElementById('escolha').classList.add('displayNone');
    document.getElementById('HTML1_1').classList.add('displayNone');
    document.getElementById('HTML2_1').classList.remove('displayNone');
}


function criarApresentacao1_1() {
    var texto1_1 = document.getElementById('texto1_1').value;
    var texto1_2 = document.getElementById('texto1_2').value.replace(/(\r\n|\n|\r)/gm, "</p>\n\<p  style='text-align: left; '>").replaceAll("<p  style='text-align: left; '></p>", "<br>");
    var texto1_3 = document.getElementById('texto1_3').value;
    if (texto1_1 == "" & texto1_2 == "" & texto1_3 == "") {
        window.alert("Verifique se estão vazios os campos: \n\n\tNome do professor\n\tDescrição do Currículo\n\tVídeo do professor");
    }
    else if (texto1_1 == "" & texto1_2 == "") {
        window.alert("Verifique se estão vazios os campos: \n\n\tNome do professor\n\tDescrição do Currículo");
    }
    else if (texto1_1 == "") {
        window.alert("Verifique se está vazio o campo: \n\n\tNome do professor");
    }
    else if (texto1_2 == "") {
        window.alert("Verifique se está vazio o campo: \n\n\tDescrição do Currículo");
    }
    else if (texto1_1 != "" & texto1_2 != "" & texto1_3 == "") {
        document.getElementById('copiar1_1').value = "<div style='text-align: center; font-size: 18px; padding: 15px; border: 1px solid #d7dfe3; border-radius: 15px; background-color:  #0f96ae41; background-color:  #ef7b0013;'><div style='display: grid; grid-template-columns: 350px auto;'><div style='margin: auto; padding-right: 5px;'><img src='https://graduacao.unisuam.edu.br/draftfile.php/456663/user/draft/118377983/imagem%20professor.png' alt='Local para inserir a Imagem' width='480' height='640' style='width: 320px; height: 320px; border-radius: 50%; border: 1px solid #d7dfe3; background-color: #ffffff;'><p style='text-align: center; color: #FF7514; font-weight: bold; font-size: 22px;'>" + texto1_1 + "</p></div><div style='margin: auto; padding-left: 5px;'><p style='text-align: left; '>" + texto1_2 + "</p></div></div></div>";

        document.getElementById('copiar1_1').disabled = true;
        document.getElementById('div1_3').classList.remove('displayNone');
        document.getElementById('div1_4').classList.remove('displayNone');

        window.scrollTo(0, 9999);
    }

    else if (texto1_1 != "" & texto1_2 != "" & texto1_3 != "") {
        if (texto1_3.substr(0, 32) == "https://www.youtube.com/watch?v=") {

            let string = texto1_3.replace("https://www.youtube.com/watch?v=", "https://www.youtube.com/embed/");
            let array = string.split('_channel');

            let video = array[0]


            document.getElementById('copiar1_1').value = "<div style='text-align: center; font-size: 18px; padding: 15px; border: 1px solid #d7dfe3; border-radius: 15px; background-color:  #0f96ae41; background-color:  #ef7b0013;'><div style='display: grid; grid-template-columns: 350px auto;'><div style='margin: auto; padding-right: 5px;'><img src='https://graduacao.unisuam.edu.br/draftfile.php/456663/user/draft/118377983/imagem%20professor.png' alt='Local para inserir a Imagem' width='480' height='640' style='width: 320px; height: 320px; border-radius: 50%; border: 1px solid #d7dfe3; background-color: #ffffff;'><p style='text-align: center; color: #FF7514; font-weight: bold; font-size: 22px;'>" + texto1_1 + "</p></div><div style='margin: auto; padding-left: 5px;'><p style='text-align: left; '>" + texto1_2 + "</p></div></div><hr style='width: 90%; color: #FF7514;'><div style='display: inline;'><div style='margin: auto;'><p style='text-align: center; color: #FF7514; font-weight: bold; font-size: 20px;'>Vídeo do professor:</p></div><div style='margin: auto 0px;'><p style='text-align: center;'><iframe style='border-radius: 8px; border: 1px solid #ffffff00;' src='" + video + "'width='540'  height='380' allow='autoplay'></iframe></p> </div></div></div>";

            document.getElementById('copiar1_1').disabled = true;
            document.getElementById('div1_3').classList.remove('displayNone');
            document.getElementById('div1_4').classList.remove('displayNone');

            window.scrollTo(0, 9999);
        }
        else if (texto1_3.substr(0, 17) == "https://youtu.be/") {

            let string = texto1_3.replace("https://youtu.be/", "https://www.youtube.com/embed/");
            let array = string.split('_channel');

            let video = array[0]


            document.getElementById('copiar1_1').value = "<div style='text-align: center; font-size: 18px; padding: 15px; border: 1px solid #d7dfe3; border-radius: 15px; background-color:  #0f96ae41; background-color:  #ef7b0013;'><div style='display: grid; grid-template-columns: 350px auto;'><div style='margin: auto; padding-right: 5px;'><img src='https://graduacao.unisuam.edu.br/draftfile.php/456663/user/draft/118377983/imagem%20professor.png' alt='Local para inserir a Imagem' width='480' height='640' style='width: 320px; height: 320px; border-radius: 50%; border: 1px solid #d7dfe3; background-color: #ffffff;'><p style='text-align: center; color: #FF7514; font-weight: bold; font-size: 22px;'>" + texto1_1 + "</p></div><div style='margin: auto; padding-left: 5px;'><p style='text-align: left; '>" + texto1_2 + "</p></div></div><hr style='width: 90%; color: #FF7514;'><div style='display: inline;'><div style='margin: auto;'><p style='text-align: center; color: #FF7514; font-weight: bold; font-size: 20px;'>Vídeo do professor:</p></div><div style='margin: auto 0px;'><p style='text-align: center;'><iframe style='border-radius: 8px; border: 1px solid #ffffff00;' src='" + video + "'width='540'  height='380' allow='autoplay'></iframe></p> </div></div></div>";

            document.getElementById('copiar1_1').disabled = true;
            document.getElementById('div1_3').classList.remove('displayNone');
            document.getElementById('div1_4').classList.remove('displayNone');

            window.scrollTo(0, 9999);
        }
        else if (texto1_3.substr(0, 30) == "https://www.youtube.com/embed/") {
            let video = texto1_3


            document.getElementById('copiar1_1').value = "<div style='text-align: center; font-size: 18px; padding: 15px; border: 1px solid #d7dfe3; border-radius: 15px; background-color:  #0f96ae41; background-color:  #ef7b0013;'><div style='display: grid; grid-template-columns: 350px auto;'><div style='margin: auto; padding-right: 5px;'><img src='https://graduacao.unisuam.edu.br/draftfile.php/456663/user/draft/118377983/imagem%20professor.png' alt='Local para inserir a Imagem' width='480' height='640' style='width: 320px; height: 320px; border-radius: 50%; border: 1px solid #d7dfe3; background-color: #ffffff;'><p style='text-align: center; color: #FF7514; font-weight: bold; font-size: 22px;'>" + texto1_1 + "</p></div><div style='margin: auto; padding-left: 5px;'><p style='text-align: left; '>" + texto1_2 + "</p></div></div><hr style='width: 90%; color: #FF7514;'><div style='display: inline;'><div style='margin: auto;'><p style='text-align: center; color: #FF7514; font-weight: bold; font-size: 20px;'>Vídeo do professor:</p></div><div style='margin: auto 0px;'><p style='text-align: center;'><iframe style='border-radius: 8px; border: 1px solid #ffffff00;' src='" + video + "'width='540'  height='380' allow='autoplay'></iframe></p> </div></div></div>";

            document.getElementById('copiar1_1').disabled = true;
            document.getElementById('div1_3').classList.remove('displayNone');
            document.getElementById('div1_4').classList.remove('displayNone');

            window.scrollTo(0, 9999);
        }
        else {
            document.getElementById('div1_3').classList.add('displayNone');
            document.getElementById('div1_4').classList.add('displayNone');
            window.alert("Verifique se o link do vídeo está no padrão correto dentro do campo Vídeo do professor.\n\nExemplo:\n\thttps://www.youtube.com/watch?v=Hxg9K2-QFYI&ab_channel=UNISUAM\n\thttps://youtu.be/Hxg9K2-QFYI\n\thttps://www.youtube.com/embed/Hxg9K2-QFYI");
        }
    }
}


function copiarTexto1_1() {
    var texto1_Copiado = document.getElementById('copiar1_1');

    document.getElementById('copiar1_1').disabled = false;

    texto1_Copiado.select();
    texto1_Copiado.setSelectionRange(0, 99999);
    document.execCommand('copy');

    document.getElementById('copiar1_1').disabled = true;
}

function criarApresentacao2_1() {
    var texto2_1 = document.getElementById('texto2_1').value;
    var texto2_2 = document.getElementById('texto2_2').value.replace(/(\r\n|\n|\r)/gm, "</p>\n\<p  style='text-align: left; '>").replaceAll("<p  style='text-align: left; '></p>", "<br>");
    var texto2_3 = document.getElementById('texto2_3').value;
    if (texto2_1 == "" & texto2_2 == "" & texto2_3 == "") {
        window.alert("Verifique se estão vazios os campos: \n\n\tNome do coordenador\n\tDescrição do Currículo\n\tVídeo do coordenador");
    }
    else if (texto2_1 == "" & texto2_2 == "") {
        window.alert("Verifique se estão vazios os campos: \n\n\tNome do coordenador\n\tDescrição do Currículo");
    }
    else if (texto2_1 == "") {
        window.alert("Verifique se está vazio o campo: \n\n\tNome do coordenador");
    }
    else if (texto2_2 == "") {
        window.alert("Verifique se está vazio o campo: \n\n\tDescrição do Currículo");
    }
    else if (texto2_1 != "" & texto2_2 != "" & texto2_3 == "") {
        document.getElementById('copiar2_1').value = "<div style='text-align: center; font-size: 18px; padding: 15px; border: 1px solid #d7dfe3; border-radius: 15px; background-color:  #0f96ae41; background-color:  #ef7b0013;'><div style='display: grid; grid-template-columns: 350px auto;'><div style='margin: auto; padding-right: 5px;'><img src='https://graduacao.unisuam.edu.br/draftfile.php/456663/user/draft/118377983/imagem%20coordenador.png' alt='Local para inserir a Imagem' width='480' height='640' style='width: 320px; height: 320px; border-radius: 50%; border: 1px solid #d7dfe3; background-color: #ffffff;'><p style='text-align: center; color: #FF7514; font-weight: bold; font-size: 22px;'>" + texto2_1 + "</p></div><div style='margin: auto; padding-left: 5px;'><p style='text-align: left; '>" + texto2_2 + "</p></div></div></div>";

        document.getElementById('copiar2_1').disabled = true;
        document.getElementById('div2_3').classList.remove('displayNone');
        document.getElementById('div2_4').classList.remove('displayNone');

        window.scrollTo(0, 9999);
    }

    else if (texto2_1 != "" & texto2_2 != "" & texto2_3 != "") {
        if (texto2_3.substr(0, 32) == "https://www.youtube.com/watch?v=") {

            let string = texto2_3.replace("https://www.youtube.com/watch?v=", "https://www.youtube.com/embed/");
            let array = string.split('_channel');

            let video = array[0]


            document.getElementById('copiar2_1').value = "<div style='text-align: center; font-size: 18px; padding: 15px; border: 1px solid #d7dfe3; border-radius: 15px; background-color:  #0f96ae41; background-color:  #ef7b0013;'><div style='display: grid; grid-template-columns: 350px auto;'><div style='margin: auto; padding-right: 5px;'><img src='https://graduacao.unisuam.edu.br/draftfile.php/456663/user/draft/118377983/imagem%20coordenador.png' alt='Local para inserir a Imagem' width='480' height='640' style='width: 320px; height: 320px; border-radius: 50%; border: 1px solid #d7dfe3; background-color: #ffffff;'><p style='text-align: center; color: #FF7514; font-weight: bold; font-size: 22px;'>" + texto2_1 + "</p></div><div style='margin: auto; padding-left: 5px;'><p style='text-align: left; '>" + texto2_2 + "</p></div></div><hr style='width: 90%; color: #FF7514;'><div style='display: inline;'><div style='margin: auto;'><p style='text-align: center; color: #FF7514; font-weight: bold; font-size: 20px;'>Vídeo do coordenador:</p></div><div style='margin: auto 0px;'><p style='text-align: center;'><iframe style='border-radius: 8px; border: 1px solid #ffffff00;' src='" + video + "'width='540'  height='380' allow='autoplay'></iframe></p> </div></div></div>";

            document.getElementById('copiar2_1').disabled = true;
            document.getElementById('div2_3').classList.remove('displayNone');
            document.getElementById('div2_4').classList.remove('displayNone');

            window.scrollTo(0, 9999);
        }
        else if (texto2_3.substr(0, 17) == "https://youtu.be/") {

            let string = texto2_3.replace("https://youtu.be/", "https://www.youtube.com/embed/");
            let array = string.split('_channel');

            let video = array[0]


            document.getElementById('copiar2_1').value = "<div style='text-align: center; font-size: 18px; padding: 15px; border: 1px solid #d7dfe3; border-radius: 15px; background-color:  #0f96ae41; background-color:  #ef7b0013;'><div style='display: grid; grid-template-columns: 350px auto;'><div style='margin: auto; padding-right: 5px;'><img src='https://graduacao.unisuam.edu.br/draftfile.php/456663/user/draft/118377983/imagem%20coordenador.png' alt='Local para inserir a Imagem' width='480' height='640' style='width: 320px; height: 320px; border-radius: 50%; border: 1px solid #d7dfe3; background-color: #ffffff;'><p style='text-align: center; color: #FF7514; font-weight: bold; font-size: 22px;'>" + texto2_1 + "</p></div><div style='margin: auto; padding-left: 5px;'><p style='text-align: left; '>" + texto2_2 + "</p></div></div><hr style='width: 90%; color: #FF7514;'><div style='display: inline;'><div style='margin: auto;'><p style='text-align: center; color: #FF7514; font-weight: bold; font-size: 20px;'>Vídeo do coordenador:</p></div><div style='margin: auto 0px;'><p style='text-align: center;'><iframe style='border-radius: 8px; border: 1px solid #ffffff00;' src='" + video + "'width='540'  height='380' allow='autoplay'></iframe></p> </div></div></div>";

            document.getElementById('copiar2_1').disabled = true;
            document.getElementById('div2_3').classList.remove('displayNone');
            document.getElementById('div2_4').classList.remove('displayNone');

            window.scrollTo(0, 9999);
        }
        else if (texto2_3.substr(0, 30) == "https://www.youtube.com/embed/") {
            let video = texto2_3


            document.getElementById('copiar2_1').value = "<div style='text-align: center; font-size: 18px; padding: 15px; border: 1px solid #d7dfe3; border-radius: 15px; background-color:  #0f96ae41; background-color:  #ef7b0013;'><div style='display: grid; grid-template-columns: 350px auto;'><div style='margin: auto; padding-right: 5px;'><img src='https://graduacao.unisuam.edu.br/draftfile.php/456663/user/draft/118377983/imagem%20coordenador.png' alt='Local para inserir a Imagem' width='480' height='640' style='width: 320px; height: 320px; border-radius: 50%; border: 1px solid #d7dfe3; background-color: #ffffff;'><p style='text-align: center; color: #FF7514; font-weight: bold; font-size: 22px;'>" + texto2_1 + "</p></div><div style='margin: auto; padding-left: 5px;'><p style='text-align: left; '>" + texto2_2 + "</p></div></div><hr style='width: 90%; color: #FF7514;'><div style='display: inline;'><div style='margin: auto;'><p style='text-align: center; color: #FF7514; font-weight: bold; font-size: 20px;'>Vídeo do coordenador:</p></div><div style='margin: auto 0px;'><p style='text-align: center;'><iframe style='border-radius: 8px; border: 1px solid #ffffff00;' src='" + video + "'width='540'  height='380' allow='autoplay'></iframe></p> </div></div></div>";

            document.getElementById('copiar2_1').disabled = true;
            document.getElementById('div2_3').classList.remove('displayNone');
            document.getElementById('div2_4').classList.remove('displayNone');

            window.scrollTo(0, 9999);
        }
        else {
            document.getElementById('div2_3').classList.add('displayNone');
            document.getElementById('div2_4').classList.add('displayNone');
            window.alert("Verifique se o link do vídeo está no padrão correto dentro do campo Vídeo do coordenador.\n\nExemplo:\n\thttps://www.youtube.com/watch?v=Hxg9K2-QFYI&ab_channel=UNISUAM\n\thttps://youtu.be/Hxg9K2-QFYI\n\thttps://www.youtube.com/embed/Hxg9K2-QFYI");
        }
    }
}


function copiarTexto2_1() {
    var texto2_Copiado = document.getElementById('copiar2_1');

    document.getElementById('copiar2_1').disabled = false;

    texto2_Copiado.select();
    texto2_Copiado.setSelectionRange(0, 99999);
    document.execCommand('copy');

    document.getElementById('copiar2_1').disabled = true;
}