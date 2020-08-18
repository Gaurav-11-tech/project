var addMore = document.getElementById("addmore");

var NewEducation = document.getElementById("newEducation");
var educationLevel = document.getElementById("education");
var educationYear = document.getElementById("year");
var educationGrade = document.getElementById("grade");

addMore.addEventListener("click", addEducation);

function addEducation(e) {
  e.preventDefault();

  const eduDiv = document.createElement("div");
  eduDiv.classList.add("new-education-details");

  const edulevel = document.createElement("p");
  edulevel.innerHTML = educationLevel.value;

  const eduyear = document.createElement("p");
  eduyear.innerHTML = educationYear.value;

  const edugrade = document.createElement("p");
  edugrade.innerHTML = educationGrade.value;

  NewEducation.appendChild(eduDiv);
  eduDiv.appendChild(edulevel);
  eduDiv.appendChild(eduyear);
  eduDiv.appendChild(edugrade);

  const removeEducation = document.getElementById("delete");

  removeEducation.addEventListener("click", (e) => {
    e.preventDefault();
    NewEducation.removeChild(eduDiv);
  });
}
