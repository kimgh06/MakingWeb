let submits = [];
const submitForm = document.querySelector("#submit");
const age = document.querySelector(".agepoints");
const color = document.querySelector(".color");

const yourgender = document.querySelector(".yourgender");
const yourGenderValue = yourgender.options[yourgender.selectedIndex].value;

const yourChicken = document.querySelector(".DoULikeChicken");
const chickenValue = yourChicken.options[yourChicken.selectedIndex].value;

function sub(event){
    event.preventDefault();
    const ageValue = age.value;
    const colorValue = color.value;
    const asdf = {
        age: ageValue,
        gender: yourGenderValue,
        chicken: chickenValue,
        favoriteColor: colorValue,
    };
    submits.push(asdf);
    localStorage.setItem("submits", JSON.stringify(asdf));
}

submitForm.addEventListener("submit", sub);
