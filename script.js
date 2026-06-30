const openMenu = () => {
    const menu = document.querySelector(".header-menu");
    menu.classList.toggle("active");
    if(menu.classList.contains("active")){
        document.querySelector("header.material-icons").innerHTML ="close"/*fonction qui fait que nous pouvons cliquer 
                                                                            sur le menu pour l'ouvir et le fermer sur mobile*/
    }
    else{ document.querySelector("header.material-icons").innerHTML ="menu"
    }
}