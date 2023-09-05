import { gsap } from "gsap";
import { Menu } from "./menu";
// initialize the menu

export default function initMenuLogic() {
  let menu = document.querySelector(".menu");
  new Menu(menu);

  gsap.set(menu, {
    x: "100%",
  });

  let isMenuOpen = false;
  let menuBurgerButton = document.querySelector("#menu-burger");
  menuBurgerButton.addEventListener("click", () => {
    menuBurgerButton.classList.toggle("change");
    if (!isMenuOpen) {
      gsap.to(menu, {
        duration: 1,
        x: "0",
      });
      isMenuOpen = true;
    } else {
      gsap.to(menu, {
        duration: 1,
        x: "100%",
      });
      isMenuOpen = false;
    }
  });

  // let closeButton = menu.querySelector("#closeButton");
  // closeButton.addEventListener("click", () => {
  //   gsap.to(menu, {
  //     duration: 1,
  //     x: "100%",
  //   });
  // });
}
