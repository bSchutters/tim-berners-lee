import "/css/style.css";
import "/css/reset.css";
import "/css/responsive.css";

const iconBurger = document.getElementById("btn-menu-burger");
const navBurger = document.getElementById("burger-menu");
const body = document.getElementsByTagName("body")[0];

if (iconBurger) {
  iconBurger.onclick = function () {
    navBurger.classList.toggle("test");
    iconBurger.classList.toggle("bx-menu");
    iconBurger.classList.toggle("bx-x");
  };
}
