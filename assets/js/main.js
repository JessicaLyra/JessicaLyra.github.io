/*==================================================
PRELOADER
==================================================*/

window.addEventListener("load", function(){

    const preloader = document.querySelector(".preloader");

    if(preloader){

        preloader.classList.add("hide");

        setTimeout(function(){

            preloader.remove();

        },800);

    }

});





/*==================================================
MENU MOBILE
==================================================*/


const menuButton = document.querySelector(".menu-mobile");

const menu = document.querySelector(".menu");


if(menuButton){

    menuButton.addEventListener("click",()=>{

        menu.classList.toggle("active");

        menuButton.classList.toggle("active");

    });

}





/* FECHAR MENU AO CLICAR */

document.querySelectorAll(".menu a").forEach(link=>{

    link.addEventListener("click",()=>{

        menu.classList.remove("active");

    });

});






/*==================================================
HEADER AO ROLAR
==================================================*/


const header = document.querySelector("#header");


window.addEventListener("scroll",()=>{


    if(window.scrollY > 50){

        header.classList.add("active");

    }else{

        header.classList.remove("active");

    }


});







/*==================================================
BARRA DE PROGRESSO
==================================================*/


const progressBar = document.querySelector(".progress-bar");


window.addEventListener("scroll",()=>{


    const scrollTop = window.scrollY;


    const documentHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;


    const progress =
    (scrollTop / documentHeight) * 100;


    if(progressBar){

        progressBar.style.width = progress + "%";

    }


});








/*==================================================
BOTÃO VOLTAR AO TOPO
==================================================*/


const scrollTopButton =
document.querySelector(".scroll-top");



window.addEventListener("scroll",()=>{


    if(window.scrollY > 500){

        scrollTopButton.classList.add("show");

    }else{

        scrollTopButton.classList.remove("show");

    }


});



if(scrollTopButton){


    scrollTopButton.addEventListener("click",()=>{


        window.scrollTo({

            top:0,

            behavior:"smooth"

        });


    });


}








/*==================================================
FAQ ACCORDION
==================================================*/


const faqButtons =
document.querySelectorAll(".faq-question");



faqButtons.forEach(button=>{


    button.addEventListener("click",()=>{


        const answer =
        button.nextElementSibling;


        const icon =
        button.querySelector("i");



        answer.classList.toggle("open");



        if(answer.classList.contains("open")){


            answer.style.maxHeight =
            answer.scrollHeight + "px";


            icon.classList.remove("fa-plus");

            icon.classList.add("fa-minus");


        }else{


            answer.style.maxHeight = null;


            icon.classList.remove("fa-minus");

            icon.classList.add("fa-plus");


        }


    });


});







/*==================================================
ANIMAÇÃO AO ENTRAR NA TELA
==================================================*/


const observer =
new IntersectionObserver((entries)=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){


            entry.target.classList.add("show");


        }


    });


},
{

    threshold:0.15

});





const animatedElements =
document.querySelectorAll(

".section-title, .service-card, .project, .tech-card, .advantage-card, .testimonial-card, .process-card, .stat-card"

);



animatedElements.forEach(element=>{


    element.classList.add("hidden");


    observer.observe(element);


});








/*==================================================
SMOOTH SCROLL PARA LINKS INTERNOS
==================================================*/


document.querySelectorAll('a[href^="#"]').forEach(anchor=>{


    anchor.addEventListener("click",function(e){


        const target =
        document.querySelector(
            this.getAttribute("href")
        );


        if(target){


            e.preventDefault();


            target.scrollIntoView({

                behavior:"smooth",

                block:"start"

            });


        }


    });


});