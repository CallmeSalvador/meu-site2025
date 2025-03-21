
const botao1 = document.getElementById('cabeca');
const botao2 = document.getElementById('corpinho');
const botao3 = document.getElementById('laptop');
const botao4 = document.getElementById('desenho');
const botao5 = document.getElementById('quadro');
const botao6 = document.getElementById('gatinho');
const botao7 = document.getElementById('cartaz');

botao1.addEventListener('mouseover', function(){dialogo(1);});
botao1.addEventListener('mouseout', function(){dialogo(0);});
botao2.addEventListener('mouseover', function(){dialogo(2);});
botao2.addEventListener('mouseout', function(){dialogo(0);});
botao3.addEventListener('mouseover', function(){dialogo(3);});
botao3.addEventListener('mouseout', function(){dialogo(0);});
botao4.addEventListener('mouseover', function(){dialogo(4);});
botao4.addEventListener('mouseout', function(){dialogo(0);});
botao5.addEventListener('mouseover', function(){dialogo(4);});
botao5.addEventListener('mouseout', function(){dialogo(0);});
botao6.addEventListener('mouseover', function(){dialogo(5);});
botao6.addEventListener('mouseout', function(){dialogo(0);});
botao7.addEventListener('mouseover', function(){dialogo(6);});
botao7.addEventListener('mouseout', function(){dialogo(0);});

function dialogo(valor) {
    if (valor === 0) {
        const caixaDeTexto = document.getElementById('caixadeTexto');
        caixaDeTexto.textContent = "Bem vindo ao meu portifólio! Experimente clicar em alguns objetos...";
    }
    if (valor === 1) {
        const caixaDeTexto = document.getElementById('caixadeTexto');
        caixaDeTexto.textContent = "Quer saber mais sobre mim?";
    }
    if(valor ===2){
        const caixaDeTexto = document.getElementById('caixadeTexto');
        caixaDeTexto.textContent = "Quer saber mais sobre mim?";
    }
    if(valor ===3){
        const caixaDeTexto = document.getElementById('caixadeTexto');
        caixaDeTexto.textContent = "Veja meus projetos!";
    }
    if(valor ===4){
        const caixaDeTexto = document.getElementById('caixadeTexto');
        caixaDeTexto.textContent = "Uma olhadinha boba nos meus desenhos?";
    }
    if(valor ===5){
        const caixaDeTexto = document.getElementById('caixadeTexto');
        caixaDeTexto.textContent = "Quem é essa gatinha fofa?";
    }
    if(valor ===6){
        const caixaDeTexto = document.getElementById('caixadeTexto');
        caixaDeTexto.textContent = "Quem não tem metas?";
    }
}