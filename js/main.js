let mov = 0;
let arrows = document.querySelectorAll("svg.single-project-gallery-arrow");
let gallery = document.querySelector("ul.single-project-gallery-image");
let galleryCount = document.querySelectorAll("li.single-project-gallery-image-item").length - 1;

arrows.forEach(element => {
  element.addEventListener("click", () => {
    let direction = element.getAttribute("data-direction");

    if (direction == "left") {
      mov--;
      if (mov < 0) {
        mov = galleryCount;
      }
    }
    if (direction == "right") {
      mov++;
      if (mov > galleryCount) {
        mov = 0;
      }
    }

    gallery.style.translate = `${(-100) * mov}% 0`;
  });
});