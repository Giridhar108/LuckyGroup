const selectSingle = document.querySelector(".main__form-select");
const selectSingle_title = selectSingle.querySelector(
  ".main__form-select-title"
);
const selectSingle_labels = selectSingle.querySelectorAll(
  ".main__form-select-label"
);

selectSingle_title.addEventListener("click", () => {
  console.log("asdfg");
  if ("active" === selectSingle.getAttribute("data-state")) {
    selectSingle.setAttribute("data-state", "");
  } else {
    selectSingle.setAttribute("data-state", "active");
  }
});

for (let i = 0; i < selectSingle_labels.length; i++) {
  selectSingle_labels[i].addEventListener("click", (evt) => {
    console.log(evt.target.textContent);
    if (evt.target.textContent === "RU") {
      selectSingle_title.classList.remove("main__form-select-title--en");
      selectSingle_title.classList.add("main__form-select-title--ru");
    }
    if (evt.target.textContent === "EN") {
      selectSingle_title.classList.remove("main__form-select-title--ru");
      selectSingle_title.classList.add("main__form-select-title--en");
    }
    selectSingle_title.textContent = evt.target.textContent;
    selectSingle.setAttribute("data-state", "");
  });
}
