function isNumeric(str) {
  if (typeof str != "string") return false;
  return !isNaN(str) && !isNaN(parseFloat(str));
}
window.currentTab = "learn";
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

function handleSubmit() {
  let elements = [...document.getElementsByClassName("blank")];
  let blank = false;
  elements.forEach((ele) => {
    if (ele.innerHTML == "") {
      blank = true;
    }
  });
  if (blank) {
    document.getElementsByClassName("all")[0].classList.remove("hidden");
    return;
  }
  document.getElementsByClassName("all")[0].classList.add("hidden");
  if (
    elements[0].innerHTML == "lambda x : x*x" &&
    elements[1].innerHTML == "lambda x : not x%2" &&
    elements[2].innerHTML == "lambda x,y : x+y"
  ) {
    document.getElementsByClassName("correct")[0].classList.remove("hidden");
    document.getElementsByClassName("wrong")[0].classList.add("hidden");
    document.getElementById("answer").classList.remove("hidden");
    document.getElementById("complete").classList.add("hidden");
  } else {
    document.getElementsByClassName("correct")[0].classList.add("hidden");
    document.getElementsByClassName("wrong")[0].classList.remove("hidden");
    document.getElementById("answer").classList.add("hidden");
    document.getElementById("complete").classList.remove("hidden");
  }
}

function changeTabs(e) {
  const task = e.target.parentNode.id;
  if (window.currentTab === task) {
    return;
  }

  if (window.currentTab != null) {
    document.getElementById(window.currentTab).classList.remove("is-active");
  }
  console.log(window.currentTab, task);
  document.getElementsByClassName(window.currentTab)[0].classList.add("hidden");
  document.getElementsByClassName(task)[0].classList.remove("hidden");
  window.currentTab = task;
  document.getElementById(task).classList.add("is-active");
}

function dragMoveListener(event) {
  var target = event.target;
  var x = (parseFloat(target.getAttribute("data-x")) || 0) + event.dx;
  var y = (parseFloat(target.getAttribute("data-y")) || 0) + event.dy;

  target.style.transform = "translate(" + x + "px, " + y + "px)";
  target.setAttribute("data-x", x);
  target.setAttribute("data-y", y);
}

interact(".drag").draggable({
  inertia: true,
  autoScroll: true,
  onmove: dragMoveListener,
  onend: function (event) {
    var target = event.target;
    target.style.transform = "";
    target.setAttribute("data-x", 0);
    target.setAttribute("data-y", 0);
  },
});

interact(".drag").dropzone({
  accept: ".drag",
  overlap: 0.01,
  ondropactivate: function (event) {
    event.target.classList.add("drop-active");
  },
  ondragenter: function (event) {
    var draggableElement = event.relatedTarget;
    var dropzoneElement = event.target;

    dropzoneElement.classList.add("drop-target");
    draggableElement.classList.add("can-drop");
  },
  ondragleave: function (event) {
    var draggableElement = event.relatedTarget;
    var dropzoneElement = event.target;

    dropzoneElement.classList.remove("drop-target");
    draggableElement.classList.remove("can-drop");
  },
  ondrop: function (event) {
    var draggableElement = event.relatedTarget;
    var dropzoneElement = event.target;
    var temp = dropzoneElement.innerHTML;
    console.log(dropzoneElement.innerHTML, draggableElement.innerHTML);

    dropzoneElement.innerHTML = draggableElement.innerHTML;
    draggableElement.innerHTML = temp;

    dropzoneElement.classList.remove("drop-target");
    draggableElement.classList.remove("can-drop");
  },
  ondropdeactivate: function (event) {
    event.target.classList.remove("drop-active");
    event.target.classList.remove("drop-target");
  },
});