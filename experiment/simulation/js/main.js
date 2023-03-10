function isNumeric(str) {
  if (typeof str != "string") return false;
  return !isNaN(str) && !isNaN(parseFloat(str));
}

window.onload = () => {
  document.getElementById("number-input").value = "";
  document.getElementById("lambda").innerHTML = document.getElementById("operation").value
  document.getElementById("number-input").addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
      animation();
    }
  });
}

async function animation() {
  let val = document.getElementById("number-input").value;
  let ele = document.getElementById("operand");
  let out = document.getElementById("output");
  let op = document.getElementById("operation").value;
  if (op == "x**2" && !isNumeric(val)) {
    out.innerHTML =
    "TypeError: unsupported operand type(s) for ** or pow(): 'str' and 'int'";
    return;
  } else if (op == "x.upper()" && isNumeric(val)) {
    out.innerHTML = "TypeError: 'int' object has no attribute 'upper'";
    return;
  }
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
        if (op == "x*2") {
          if (!isNumeric(val)) {
            out.innerHTML = val + val;
            ele.innerHTML = val + val;
          } else {
            val = parseFloat(val);
            out.innerHTML = 2 * val;
            ele.innerHTML = 2 * val;
          }
        } else if (op == "x**2") {
          val = parseFloat(val);
          out.innerHTML = val * val;
          ele.innerHTML = val * val;
        }else {
          out.innerHTML = val.toUpperCase();
          ele.innerHTML = val.toUpperCase();
        }
        break;
      }
    }
    await new Promise((r) => setTimeout(r, 100));
  }
}

function changeOperation() {
  let op = document.getElementById("operation").value;
  let ele = document.getElementById("lambda");
  ele.innerHTML = op;
}
