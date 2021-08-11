const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", checkBoxes);
checkBoxes();

function checkBoxes() {
  //this line has critical math that will warp the performance of the scroll
  const triggerbottom = (window.innerHeight / 5) * 4;

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerbottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}
