import { Menu } from "./menu";
import { gsap } from "gsap";

export default function initMenuLogic() {
  let menuDOM = document.querySelector(".menu");
  let menuBurgerButton = document.querySelector("#menu-burger");
  
  window.menu = new Menu(menuDOM, menuBurgerButton);

  gsap.set(menuDOM, {
    x: "100%",
  });

  menuBurgerButton.addEventListener("click", ()=>{
    window.menu.animateOpen();
  });
}
