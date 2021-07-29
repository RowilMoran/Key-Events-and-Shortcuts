import moveBall from "./Key_Event.js";
import shortCuts from "./shortcuts.js";


document.addEventListener("keydown", e => {
    shortCuts(e);
    moveBall(e, ".circle", ".container");
})