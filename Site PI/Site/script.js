function carregar(){
    on = 0
    tamanho=1.8
    tamanho_noticia=1.6
    aumento=0
    if ((window.location.pathname).split("/").pop() == "inicio.html"){
        showSlides(1)
    }
    else if ((window.location.pathname).split("/").pop() == "inicio.html%20"){
        showSlides(1) 
    }
}

let slideIndex = 1;
if ((window.location.pathname).split("/").pop() == "inicio.html"){
    showSlides(slideIndex);
}
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

function aumentarfonte(){
    if (aumento < 3){
        aumento+=1
        tamanho+=0.1
        if ((window.location.pathname).split("/").pop() == "inicio.html"){
            tamanho_noticia+=0.1
        }
        executamudança()
    }
}

function diminuirfonte(){
    if (aumento != 0){
        aumento-=1
        tamanho-=0.1
        if ((window.location.pathname).split("/").pop() == "inicio.html"){
            tamanho_noticia-=0.1
        }
        executamudança()
        
    }
}

function executamudança(){
    //Início
    if ((window.location.pathname).split("/").pop() == "inicio.html"){
        
        document.getElementById("aumentavel1").style.fontSize=tamanho+"vw";
        document.getElementById("aumentavel2").style.fontSize=tamanho+"vw";
        document.getElementById("aumentavel3").style.fontSize=tamanho+"vw";
        document.getElementById("aumentavel4").style.fontSize=tamanho_noticia+"vw";
        document.getElementById("aumentavel5").style.fontSize=tamanho_noticia+"vw";
        document.getElementById("aumentavel6").style.fontSize=tamanho_noticia+"vw";
        if (aumento == 0){
            document.getElementById("div2").style.marginTop=3+"vw";
            document.getElementById("div3").style.marginTop=3+"vw";
            document.getElementById("aumentavel4").style.bottom=6+"vw";
            document.getElementById("aumentavel5").style.bottom=6+"vw";
            document.getElementById("aumentavel6").style.bottom=7+"vw";   
        }
        else if (aumento == 1){
            document.getElementById("div2").style.marginTop=4+"vw";
            document.getElementById("div3").style.marginTop=6+"vw";
        }
        else if (aumento == 2){
            document.getElementById("div2").style.marginTop=5+"vw";
            document.getElementById("div3").style.marginTop=9+"vw";
            document.getElementById("div3").style.marginBottom=3+"vw";

            document.getElementById("aumentavel4").style.bottom=1.8+"vw";
            document.getElementById("aumentavel5").style.bottom=1.8+"vw";
            document.getElementById("aumentavel6").style.bottom=4+"vw";   
        }
        else if (aumento == 3){
            document.getElementById("div2").style.marginTop=8+"vw";
            document.getElementById("div3").style.marginTop=11+"vw";
            document.getElementById("div3").style.marginBottom=5+"vw";
        } 
    }

    else if ((window.location.pathname).split("/").pop() == "bilinguismo.html"){
        document.getElementById("aumentavel1").style.fontSize=tamanho+"vw";
        document.getElementById("aumentavel2").style.fontSize=tamanho+"vw";
        document.getElementById("aumentavel3").style.fontSize=tamanho+"vw";
        if (aumento == 0){
            document.getElementById("div1").style.marginBottom=0+"vw";
            document.getElementById("div2").style.marginTop=-20+"vw";
            document.getElementById("aumentavel3").style.marginTop=8+"vw";
        }
        else if (aumento == 1){
            document.getElementById("div1").style.marginBottom=1+"vw";
            document.getElementById("div2").style.marginTop=-21+"vw";
            document.getElementById("aumentavel3").style.marginTop=14+"vw";
        }
        else if (aumento == 2){
            document.getElementById("div1").style.marginBottom=2+"vw";
            document.getElementById("div2").style.marginTop=-22+"vw";
            document.getElementById("aumentavel3").style.marginTop=18+"vw";
        }
        else if (aumento == 3){
            document.getElementById("div1").style.marginBottom=3+"vw";
            document.getElementById("div2").style.marginTop=-23+"vw";
            document.getElementById("aumentavel3").style.marginTop=24+"vw";
        }
    }
    else if ((window.location.pathname).split("/").pop() == "deficiencia%20auditiva.html"){
        document.getElementById("aumentavel1").style.fontSize=tamanho+"vw";
        document.getElementById("aumentavel2").style.fontSize=tamanho+"vw";
        document.getElementById("aumentavel3").style.fontSize=tamanho+"vw";
    }
    else if ((window.location.pathname).split("/").pop() == "fontes.html"){
        document.getElementById("aumentavel1").style.fontSize=tamanho+"vw";
        document.getElementById("aumentavel2").style.fontSize=tamanho+"vw";
        document.getElementById("aumentavel3").style.fontSize=tamanho+"vw";
        document.getElementById("aumentavel4").style.fontSize=tamanho+"vw";
        document.getElementById("aumentavel5").style.fontSize=tamanho+"vw";
        document.getElementById("aumentavel6").style.fontSize=tamanho+"vw";
        document.getElementById("aumentavel7").style.fontSize=tamanho+"vw";
        document.getElementById("aumentavel8").style.fontSize=tamanho+"vw";
    }
    
}

function contraste(){
    if (on == 0){
        on = 1
        
        var r = document.querySelector(':root');
        r.style.setProperty("--sombra", "#a9a9a9");

        document.getElementById("body").style.backgroundColor  = "black";

        //NavBar
        document.getElementById("navbar").style.backgroundColor  = "black";
        document.getElementById("titulosite").src = "NavBar/Título2.png";
        document.getElementById("logosite").src = "NavBar/Logo2.png";

        //Botão Contraste
        document.getElementById("contraste").src = "NavBar/Contraste2.png";
        document.getElementById("contraste").style.backgroundColor = "black";
        document.getElementById("contraste").style.borderColor = "white";

        //Aumentar Fonte
        document.getElementById("aumentafonte").src = "NavBar/AumentarFonte2.png";
        document.getElementById("aumentafonte").style.backgroundColor = "black";
        document.getElementById("aumentafonte").style.borderColor = "white";

        //Diminuir Fonte
        document.getElementById("diminuifonte").src = "NavBar/DiminuirFonte2.png";
        document.getElementById("diminuifonte").style.backgroundColor = "black";
        document.getElementById("diminuifonte").style.borderColor = "white";

        if ((window.location.pathname).split("/").pop() == "inicio.html"){
            document.getElementById("aumentavel1").style.color="white";
            document.getElementById("aumentavel2").style.color="white";
            document.getElementById("aumentavel3").style.color="white";
            document.getElementById("aumentavel4").style.color="white";
            document.getElementById("aumentavel5").style.color="white";
            document.getElementById("aumentavel6").style.color="white";
            document.getElementById("titulo1").style.color="white";
            document.getElementById("titulo2").style.color="white";
        }
        else if ((window.location.pathname).split("/").pop() == "inicio.html%20"){
            document.getElementById("aumentavel1").style.color="white";
            document.getElementById("aumentavel2").style.color="white";
            document.getElementById("aumentavel3").style.color="white";
            document.getElementById("aumentavel4").style.color="white";
            document.getElementById("aumentavel5").style.color="white";
            document.getElementById("aumentavel6").style.color="white";
            document.getElementById("titulo1").style.color="white";
            document.getElementById("titulo2").style.color="white";
        }
        else if ((window.location.pathname).split("/").pop() == "bilinguismo.html"){
            document.getElementById("aumentavel1").style.color="white";
            document.getElementById("aumentavel2").style.color="white";
            document.getElementById("aumentavel3").style.color="white";
            document.getElementById("titulo").style.color="white";
        }
        else if ((window.location.pathname).split("/").pop() == "deficiencia%20auditiva.html"){
            document.getElementById("aumentavel1").style.color="white";
            document.getElementById("aumentavel2").style.color="white";
            document.getElementById("aumentavel3").style.color="white";
            document.getElementById("titulo").style.color="white";
        }
        else if ((window.location.pathname).split("/").pop() == "fontes.html"){
            document.getElementById("aumentavel1").style.color="white";
            document.getElementById("aumentavel2").style.color="white";
            document.getElementById("aumentavel3").style.color="white";
            document.getElementById("aumentavel4").style.color="white";
            document.getElementById("aumentavel5").style.color="white";
            document.getElementById("aumentavel6").style.color="white";
            document.getElementById("aumentavel7").style.color="white";
            document.getElementById("aumentavel8").style.color="white";
            document.getElementById("titulo").style.color="white";
        }
        else if ((window.location.pathname).split("/").pop() == "contato.html"){
            document.getElementById("aumentavel1").style.color="white";
            document.getElementById("aumentavel2").style.color="white";
        }
    }
    else{
        on = 0
        
        document.getElementById("body").style.backgroundColor  = "white";

        var r = document.querySelector(':root');
        r.style.setProperty("--sombra", "#00000080");

        //NavBar
        document.getElementById("navbar").style.backgroundColor  = "white";
        setTimeout(function() {
            document.getElementById("titulosite").src = "NavBar/Título.png";
        }, 500);

        setTimeout(function() {
            document.getElementById("logosite").src = "NavBar/Logo.png";
        }, 500);
        
        
        //Botão Contraste
        document.getElementById("contraste").style.backgroundColor = "white";
        document.getElementById("contraste").src = "NavBar/Contraste.png";
        document.getElementById("contraste").style.borderColor = "black";

        //Aumentar Fonte
        document.getElementById("aumentafonte").style.backgroundColor = "white";
        document.getElementById("aumentafonte").src = "NavBar/AumentarFonte.png";
        document.getElementById("aumentafonte").style.borderColor = "black";
        
        //Diminuir Fonte
        document.getElementById("diminuifonte").style.backgroundColor = "white";
        document.getElementById("diminuifonte").src = "NavBar/DiminuirFonte.png";
        document.getElementById("diminuifonte").style.borderColor = "black";
       
        if ((window.location.pathname).split("/").pop() == "inicio.html"){
            document.getElementById("aumentavel1").style.color="black";
            document.getElementById("aumentavel2").style.color="black";
            document.getElementById("aumentavel3").style.color="black";
            document.getElementById("aumentavel4").style.color="black";
            document.getElementById("aumentavel5").style.color="black";
            document.getElementById("aumentavel6").style.color="black";
            document.getElementById("titulo1").style.color="black"; 
            document.getElementById("titulo2").style.color="black";
        }
        else if ((window.location.pathname).split("/").pop() == "inicio.html%20"){
            document.getElementById("aumentavel1").style.color="black";
            document.getElementById("aumentavel2").style.color="black";
            document.getElementById("aumentavel3").style.color="black";
            document.getElementById("aumentavel4").style.color="black";
            document.getElementById("aumentavel5").style.color="black";
            document.getElementById("aumentavel6").style.color="black";
            document.getElementById("titulo1").style.color="black"; 
            document.getElementById("titulo2").style.color="black";
        }
        else if ((window.location.pathname).split("/").pop() == "bilinguismo.html"){
            document.getElementById("aumentavel1").style.color="black";
            document.getElementById("aumentavel2").style.color="black";
            document.getElementById("aumentavel3").style.color="black";
            document.getElementById("titulo").style.color="black";
        }
        else if ((window.location.pathname).split("/").pop() == "deficiencia%20auditiva.html"){
            document.getElementById("aumentavel1").style.color="black";
            document.getElementById("aumentavel2").style.color="black";
            document.getElementById("aumentavel3").style.color="black";
            document.getElementById("titulo").style.color="black";
        }
        else if ((window.location.pathname).split("/").pop() == "fontes.html"){
            document.getElementById("aumentavel1").style.color="black";
            document.getElementById("aumentavel2").style.color="black";
            document.getElementById("aumentavel3").style.color="black";
            document.getElementById("aumentavel4").style.color="black";
            document.getElementById("aumentavel5").style.color="black";
            document.getElementById("aumentavel6").style.color="black";
            document.getElementById("aumentavel7").style.color="black";
            document.getElementById("aumentavel8").style.color="black";
            document.getElementById("titulo").style.color="black";
        }
        else if ((window.location.pathname).split("/").pop() == "contato.html"){
            document.getElementById("aumentavel1").style.color="black";
            document.getElementById("aumentavel2").style.color="black";
        }
    }
}

function mostrarPesquisa(){
    document.getElementById("resultados").style.display="block";
}

function esconderPesquisa(){
    document.getElementById("resultados").style.display="none";
    document.getElementById("resultados").value= "";
}