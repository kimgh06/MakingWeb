let submits = [];
const question = document.querySelector(".question");
const checkList = document.querySelector("#checkList");
const checkListGender = document.querySelector("#span1");

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
        Yourage: ageValue,
        YourGender: yourGenderValue,
        doYouLikeChicken: chickenValue,
        favoriteColor: colorValue,
    };
    submits.push(asdf);
    question.classList.add("hidden");
    checkList.classList.remove("hidden");
    if (yourGenderValue === female){
        checkListGender.innerText = 여성;
    }
    else if (yourGenderValue === male){
        checkListGender.innerText = 남성;
    }
    else {
        checkListGender.innerText = 뭐여;
    }
    localStorage.setItem("submits", JSON.stringify(asdf));
}

submitForm.addEventListener("submit", sub);
