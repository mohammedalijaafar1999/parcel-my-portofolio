import { MenuItem } from "./menuItem";
import { gsap } from "gsap";

export class Menu {
  constructor(menuDOM, menuBurgerButton) {
    this.menuBurgerButton = menuBurgerButton;
    // .menu element
    this.DOM = { el: menuDOM };
    // the menu items
    this.DOM.menuItems = this.DOM.el.querySelectorAll(".menu__item");
    // array of MenuItem
    this.menuItems = [];
    this.isOpen = false;
    this.DOM.menuItems.forEach((menuItem) =>
      this.menuItems.push(new MenuItem(menuItem))
    );
  }

  // a function that toggles the isOpen property
  toggle() {
    this.isOpen = !this.isOpen;
  }

  // a function that open or close the isOpen property with a param
  setOpen(isOpen) {
    this.isOpen = isOpen;
  }

  
  /**
   * Function to animate the opening of the menu.
   *
   */
  animateOpen () {
    this.menuBurgerButton.classList.toggle("change");
    if (!window.menu.isOpen) {
      gsap.to(this.DOM.el, {
        duration: 1,
        x: "0",
      });
      window.menu.toggle();
    } else {
      gsap.to(this.DOM.el, {
        duration: 1,
        x: "100%",
      });
      window.menu.toggle();
    }
  }

}
