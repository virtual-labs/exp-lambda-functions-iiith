function isNumeric(str) {
  if (typeof str != "string") return false; 
  return (
    !isNaN(str) &&
    !isNaN(parseFloat(str))
  );
}

async function animation() {
  let val = document.getElementById("number-input").value;
  let ele = document.getElementById("operand");
  let out = document.getElementById("output");
  ele.innerHTML = val;
  ele.style.transform = "";
  console.log(val);
  anime({
    targets: ".operand",
    translateX:
      document.getElementsByClassName("obs-container")[0].clientWidth -
      100 +
      "px",
    duration: 2000,
    easing: "linear",
    direction: "normal",
  });
  let o = false;
  while (true) {
    let rect1 = ele.getBoundingClientRect();
    let rect2 = document.getElementById("lambda").getBoundingClientRect();
    let overlap = !(
      rect1.right < rect2.left ||
      rect1.left > rect2.right ||
      rect1.bottom < rect2.top ||
      rect1.top > rect2.bottom
    );
    if (overlap) {
      if (!o) {
        o = true;
      } else {
        if (!isNumeric(val)) {
          out.innerHTML = val + val;
          ele.innerHTML = val + val;
        } else {
          val = parseFloat(val);
          out.innerHTML = 2 * val;
          ele.innerHTML = 2 * val;
        }
        break;
      }
    }
    await new Promise((r) => setTimeout(r, 100));
  }
}
