var check=document.querySelector(".check");
check.addEventListener('click', idioma);

function idioma(){
  let id=check.checked;
  if (id==true){
    location.href="../es/index.html";
  }
  else{
    location.href="../index.html";
  }
}



function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("wordpress");
        habilidades[4].classList.add("drupal");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 


//boton del menu

const TOGGLE = document.querySelector('button')

const HANDLE_TOGGLE = () => {
  TOGGLE.setAttribute('aria-pressed', TOGGLE.matches('[aria-pressed=true]') ? false : true)
}

TOGGLE.addEventListener('click', HANDLE_TOGGLE)

const INPUT = document.querySelector('input')

const APPLY_TRANSFORM_BOX = () => {
  TOGGLE.classList.toggle('unset')
}

INPUT.addEventListener('change', APPLY_TRANSFORM_BOX)
