let submits = [];
const question = document.querySelector(".question");
const checkList = document.querySelector("#checkList");
let checkSpan = document.querySelector("#checkSpan");
let triedSpan = document.querySelector(".triedSpan");
const submitForm = document.querySelector("#submit");
const retry = document.querySelector(".retry");

const age = document.querySelector(".agepoints");
const color = document.querySelector(".color");
const yourgender = document.querySelector(".yourgender");
let checkGender;
let checkChicken;
const yourChicken = document.querySelector(".DoULikeChicken");
let tried = 1;
let imgClick = 0;
function sub(event) {
    event.preventDefault();
    const yourGenderValue = yourgender.options[yourgender.selectedIndex].value;
    const chickenValue = yourChicken.options[yourChicken.selectedIndex].value;
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
    localStorage.setItem("submits", JSON.stringify(asdf));
    checkList.classList.remove("hidden");
    chick(chickenValue);
    whatsYourGender(yourGenderValue);
    checkSpan.style.color = colorValue;
    checkSpan.innerText = `당신은 치킨을 ${checkChicken} ${ageValue}세 ${checkGender}이군요!`;
    if (tried == 10) {
        triedSpan.innerText = "열 번 시도하셨습니다.";
    }
    else if (tried == 4) {
        triedSpan.innerText = "404 NOT FOUND";
    }
    else if (tried == 7) {
        triedSpan.innerText = "당신은 정말 운이 좋으신지도 모르겠습니다.";
    }
    else if (tried == 1101) {
        triedSpan.innerText = "이 날짜는 제작자의 생일입니다.";
    }
    else {
        triedSpan.innerText = `${tried}회 시도하셨습니다.`;
    }
}

function whatsYourGender(yourGenderValue) {
    if (yourGenderValue === "female") {
        checkGender = '여성';
    }
    else if (yourGenderValue === "male") {
        checkGender = '남성';
    }
    else {
        checkGender = '성별을 알 수 없는 사람';
    }
}

function chick(like) {
    if (like === 'yes') {
        checkChicken = "좋아하는";
    }
    else if (like === 'no') {
        checkChicken = "좋아하지 않는";
    }
}

function Re() {
    question.classList.remove("hidden");
    checkList.classList.add("hidden");
    age.value = "20";
    document.getElementById('value2').innerHTML = "20";
    yourChicken.value = "no";
    yourgender.value = "none";
    color.value = "#ff0000";
    tried++;
}

function alienIs() {
    imgClick++;
    if (imgClick === 15) {
        alert("적당히 하셈");
        imgClick = 0;
    }
    else {
        if (document.querySelector("#alien1").classList.contains("hidden")) {
            document.querySelector("#alien1").classList.remove("hidden");
            document.querySelector("#alien2").classList.add("hidden");
        }
        else {
            document.querySelector("#alien1").classList.add("hidden");
            document.querySelector("#alien2").classList.remove("hidden");
        }
    }
}

function toggleMenu() {
    const menu = document.querySelector("#menu");
    const toToggle = document.querySelector("#toToggle");
    if (toToggle.classList.contains("hidden")) {
        toToggle.classList.remove("hidden");
        document.querySelector("aside").style.backgroundColor = "rgb(105, 191, 225)"; //사이드 색깔 변경
        menu.style.backgroundColor = "white"; //버튼 색깔 변경
        menu.style.color = "black";
        document.querySelector("#main").style.marginLeft = "20%";
        menu.style.transform = "rotate(0deg)";
    }
    else {
        toToggle.classList.add("hidden");
        document.querySelector("aside").style.backgroundColor = "rgba(255, 255, 255, 0)"; //사이드 색깔 변경
        menu.style.backgroundColor = "rgb(105, 191, 225)"; //버튼 색깔 변경
        menu.style.color = "white";
        document.querySelector("#main").style.marginLeft = "0%";
        menu.style.transform = "rotate(180deg)";

    }
}

submitForm.addEventListener("submit", sub);
