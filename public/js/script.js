let eye = document.getElementById("eye");
let eye2 = document.getElementById("eye2");
let password = document.getElementById("password");
let confirm_password = document.getElementById("confirm-password");

eye.onclick = function() {
    if (password.type == "password") {
        password.type = "text";
    } else {        
        password.type = "password";
    }
}

eye2.onclick = function() {
    if (confirm_password.type == "password") {
        confirm_password.type = "text";
    } else {        
        confirm_password.type = "password";
    }
}
const multiStepForm = document.querySelector("[data-multi-step]")
const formSteps = [...multiStepForm.querySelectorAll("[data-step]")]
let currentStep = formSteps.findIndex(step => {
    return step.classList.contains("active")
})

if (currentStep < 0) {
    currentStep = 0
    showCurrentStep()
}

multiStepForm.addEventListener("click", e => {
    let incrementor
    const binusianRadio = document.getElementById('binusian');
    if (e.target.matches("[data-next]")) {
        if (binusianRadio.checked) {
            if (currentStep === 1) {
                incrementor = 2
            } else {
                incrementor = 1
            }
        } else {
            if (currentStep === 0) {
                incrementor = 2
            } else if (currentStep === 2){
                incrementor = 1
            }
        }
    } else if (e.target.matches("[data-previous]")) {
        if(binusianRadio.checked) {
            if (currentStep === 3) {
                incrementor = -2
            } else {
                incrementor = -1
            }
        } else {
            if (currentStep === 3) {
                incrementor = -1
            } else {
                incrementor = -2
            }
        }
    }

    if (incrementor == null) return
    const inputs = [...formSteps[currentStep].querySelectorAll("input")]
    const allValid = inputs.every(input => input.reportValidity())
    if (allValid) {
        if (incrementor > 0) {
            if (currentStep + incrementor >= formSteps.length) {
                return
            }
        }
        currentStep += incrementor
        showCurrentStep()
    } else if (!allValid && currentStep === 0) {
        validation();
        verify();
    } else if (!allValid && currentStep === 1) {
        validation2();
        verify2();
    }else if (!allValid && currentStep === 2) {
        validation3();
        verify3();
    }
})

function showCurrentStep() {
    formSteps.forEach((step, index) => {
        step.classList.toggle("active", index === currentStep)
        if (index === currentStep || (index === 3 && currentStep === 3)) {
            step.classList.remove("hide")
        } else {
            step.classList.add("hide")
        }
    })
}

const prevBtns = document.querySelectorAll(".prev-btn");
const nextBtns = document.querySelectorAll(".next-btn");
const progress = document.getElementById("progress");
const progressSteps = document.querySelectorAll(".Hex");

let formStepsNum = 0;

nextBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        const inputs = [...formSteps[formStepsNum].querySelectorAll("input")];
        const allValid = inputs.every((input) => input.reportValidity());

        if (allValid && currentStep === 0) {
            formStepsNum++;
            updateProgressbar();
            showCurrentStep();
        }else if (allValid && currentStep === 1 || allValid && currentStep === 2) {
            formStepsNum++;
            updateProgressbar();
            showCurrentStep();
        }
    });
});

prevBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        const inputs = [...formSteps[formStepsNum].querySelectorAll("input")];
        const allValid = inputs.every((input) => input.reportValidity());
        if (allValid) {
            formStepsNum--;
            updateProgressbar();
            showCurrentStep();
        }
    });
});

function updateProgressbar() {
    progressSteps.forEach((progressStep, idx) => {
    if (idx < formStepsNum + 1) {
        progressStep.classList.add("progress-step-active");
    } else {
        progressStep.classList.remove("progress-step-active");
    }
    });

    const progressActive = document.querySelectorAll(".progress-step-active");

    progress.style.width =
      ((progressActive.length - 1) / (progressSteps.length - 1)) * 100 + "%";
}

var username = document.getElementById("name");
var password2 = document.getElementById("password");
var confirm_password2 = document.getElementById("confirm-password");
var fullname = document.getElementById("fullname");
var email = document.getElementById("email");
var number = document.getElementById("number")
var lineID = document.getElementById("LineID");
var githubID = document.getElementById("GithubID");
var birthPlace = document.getElementById("BirthPlace");
var input = document.getElementsByClassName("input");
var birthDate = document.getElementById("BirthDate");
var fullname2 = document.getElementById("fullname2");
var email2 = document.getElementById("email2");
var number2 = document.getElementById("number2")
var LineID2 = document.getElementById("LineID2");
var githubID2 = document.getElementById("GithubID2");
var birthPlace2 = document.getElementById("BirthPlace2");
var birthDate2 = document.getElementById("BirthDate2");



var username_error = document.getElementById("username-error");
var password_error = document.getElementById("password-error");
var confirm_password_error = document.getElementById("confirm-password-error");
var radio_error = document.getElementById("radio-error");
var fullname_error = document.getElementById("fullname-error");
var email_error = document.getElementById("email-error");
var number_error = document.getElementById("number-error");
var lineID_error = document.getElementById("lineID-error");
var githubID_error = document.getElementById("githubID-error");
var birthPlace_error = document.getElementById("birthPlace-error");
var birthDate_error = document.getElementById("birthDate-error");
var cv_error = document.getElementById("CV-error");
var idCard_error = document.getElementById("IDCard-error");
var fullname2_error = document.getElementById("fullname2-error");
var email2_error = document.getElementById("email2-error");
var number2_error = document.getElementById("number2-error");
var lineID2_error = document.getElementById("lineID2-error");
var githubID2_error = document.getElementById("githubID2-error");
var birthPlace2_error = document.getElementById("birthPlace2-error");
var birthDate2_error = document.getElementById("birthDate2-error");
var cv2_error = document.getElementById("CV2-error");
var idCard2_error = document.getElementById("IDCard2-error");




var isBinusianRadio = document.querySelector('input[name="isBinusian"]:checked');
function validation(){
    if (username.value == "") {
        username_error.style.display = "block";
        document.querySelector(".input").classList.add("input-error");
        return false;
    }
    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password2.value)) {
        password_error.style.display = "inline-block";
        document.querySelector("#password").closest(".input").classList.add("input-error");
        return false;
    }
    if (confirm_password2.value != password2.value) {
        confirm_password_error.style.display = "block";
        document.querySelector("#confirm-password").closest(".input").classList.add("input-error");
        return false;
    }
    if (!isBinusianRadio) {
        document.getElementById("radio-error").style.display = "block";
        document.querySelectorAll('.form-group2 label input[type="radio"]').forEach(function(radio) {
        radio.classList.add("input-error");
        });
        return false;
    }
}

document.querySelector(".prev-btn").addEventListener("click", verify);
function verify(){
    if (username.value != "") {
        username_error.style.display = "none";
        document.querySelector(".input").classList.remove("input-error");    
        return true;
    }
    if (passwordRegex.test(password2.value)) {
        password_error.style.display = "none";
        document.querySelector("#password").closest(".input").classList.remove("input-error");
        return true;
    }
    if (confirm_password2.value == password2.value) {
        confirm_password_error.style.display = "none";
        document.querySelector("#confirm-password").closest(".input").classList.remove("input-error");
        return true;
    }
    if (isBinusianRadio) {
        document.getElementById("radio-error").style.display = "none";
        document.querySelectorAll('.form-group2 label input[type="radio"]').forEach(function(radio) {
        radio.classList.remove("input-error");
        });
        return true;
    }
}



function validation2(){
    if (fullname.value == "") {
        fullname_error.style.display = "block";
        document.querySelector("#fullname").closest(".input").classList.add("input-error");    
        return false;
    }
    if (!email.value.includes("@")) {
        email_error.style.display = "block";
        document.querySelector("#email").closest(".input").classList.add("input-error"); 
        return false;
    }
    if (number.value.length < 9) {
        number_error.style.display = "block";
        document.querySelector("#number").closest(".input").classList.add("input-error"); 
        return false;
    }
    if (lineID.value == "") {
        lineID_error.style.display = "block";
        document.querySelector("#LineID").closest(".input").classList.add("input-error"); 
        return false;
    }
    if (githubID.value == "") {
        githubID_error.style.display = "block";
        document.querySelector("#GithubID").closest(".input").classList.add("input-error"); 
        return false;
    }
    if (birthPlace.value == "") {
        birthPlace_error.style.display = "block";
        document.querySelector("#BirthPlace").closest(".input").classList.add("input-error"); 
        return false;
    }
    var today = new Date();
    var birthDateValue = new Date(birthDate.value);
    var age = today.getFullYear() - birthDateValue.getFullYear();

    if (birthDateValue.getMonth() < today.getMonth() || (birthDateValue.getMonth() === today.getMonth() && birthDateValue.getDate() < today.getDate())) {
        age--;
    }

    if (age < 17) {
        birthDate_error.style.display = "block";
        document.querySelector("#BirthDate").closest(".input").classList.add("input-error");
        return false;
    }

    var cvFile = document.getElementById("CV").files[0];
    var idCardFile = document.getElementById("IDCard").files[0];

    if (cvFile !== null) {
        var fileType = cvFile.type;
        var allowedTypes = ["application/pdf", "image/jpeg", "image/png"];

        if (!allowedTypes.includes(fileType)) {
            cv_error.style.display = "block";
            document.querySelector("#CV").closest(".input").classList.add("input-error");
            return false;
        }
    } else {
        cv_error.style.display = "block";
        document.querySelector("#CV").closest(".input").classList.add("input-error");
        return false;
    }

    if (idCardFile !== null) {
        var fileType = idCardFile.type;
        var allowedTypes = ["application/pdf", "image/jpeg", "image/png"];

        if (!allowedTypes.includes(fileType)) {
            idCard_error.style.display = "block";
            document.querySelector("#IDCard").closest(".input").classList.add("input-error");
            return false;
        }
    } else {
        idCard_error.style.display = "block";
        document.querySelector("#IDCard").closest(".input").classList.add("input-error");
        return false;
    }
}

document.querySelector(".prev-btn").addEventListener("click", verify2);
function verify2(){
    if (fullname.value != "") {
        fullname_error.style.display = "none";
        document.querySelector("#fullname").closest(".input").classList.remove("input-error");    
        return true;
    }
    if (email.value.includes("@")) {
        email_error.style.display = "none";
        document.querySelector("#email").closest(".input").classList.remove("input-error"); 
        return true;
    }
    if (number.value.length >= 9) {
        number_error.style.display = "none";
        document.querySelector("#number").closest(".input").classList.remove("input-error"); 
        return true;
    }
    if (lineID.value != "") {
        lineID_error.style.display = "none";
        document.querySelector("#LineID").closest(".input").classList.remove("input-error"); 
        return true;
    }
    if (githubID.value != "") {
        githubID_error.style.display = "none";
        document.querySelector("#GithubID").closest(".input").classList.remove("input-error"); 
        return true;
    }
    if (birthPlace.value != "") {
        birthPlace_error.style.display = "none";
        document.querySelector("#BirthPlace").closest(".input").classList.remove("input-error"); 
        return true;
    }
    var today = new Date();
    var birthDateValue = new Date(birthDate.value);
    var age = today.getFullYear() - birthDateValue.getFullYear();

    if (birthDateValue.getMonth() < today.getMonth() || (birthDateValue.getMonth() === today.getMonth() && birthDateValue.getDate() < today.getDate())) {
        age--;
    }

    if (age >= 17) {
        birthDate_error.style.display = "none";
        document.querySelector("#BirthDate").closest(".input").classList.remove("input-error");
        return true;
    }

    if (validation2()) {
        cv_error.style.display = "none";
        document.querySelector("#CV").closest(".input").classList.remove("input-error");
        return true;
    }
    
    if (validation2()) {
        idCard_error.style.display = "none";
        document.querySelector("#IDCard").closest(".input").classList.remove("input-error");
        return true;
    }
}

function validation3(){
    if (fullname2.value == "") {
        fullname2_error.style.display = "block";
        document.querySelector("#fullname2").closest(".input").classList.add("input-error");    
        return false;
    }
    if (!email2.value.includes("@")) {
        email2_error.style.display = "block";
        document.querySelector("#email2").closest(".input").classList.add("input-error"); 
        return false;
    }
    if (number2.value.length < 9) {
        number2_error.style.display = "block";
        document.querySelector("#number2").closest(".input").classList.add("input-error"); 
        return false;
    }
    if (lineID2.value == "") {
        lineID2_error.style.display = "block";
        document.querySelector("#LineID2").closest(".input").classList.add("input-error"); 
        return false;
    }
    if (githubID2.value == "") {
        githubID2_error.style.display = "block";
        document.querySelector("#GithubID2").closest(".input").classList.add("input-error"); 
        return false;
    }
    if (birthPlace2.value == "") {
        birthPlace2_error.style.display = "block";
        document.querySelector("#BirthPlace2").closest(".input").classList.add("input-error"); 
        return false;
    }
    var today = new Date();
    var birthDateValue = new Date(birthDate2.value);
    var age = today.getFullYear() - birthDateValue.getFullYear();

    if (birthDateValue.getMonth() < today.getMonth() || (birthDateValue.getMonth() === today.getMonth() && birthDateValue.getDate() < today.getDate())) {
        age--;
    }

    if (age < 17) {
        birthDate2_error.style.display = "block";
        document.querySelector("#BirthDate2").closest(".input").classList.add("input-error");
        return false;
    }

    var cvFile = document.getElementById("CV2").files[0];
    var idCardFile = document.getElementById("IDCard2").files[0];

    if (cvFile !== null) {
        var fileType = cvFile.type;
        var allowedTypes = ["application/pdf", "image/jpeg", "image/png"];

        if (!allowedTypes.includes(fileType)) {
            cv2_error.style.display = "block";
            document.querySelector("#CV2").closest(".input").classList.add("input-error");
            return false;
        }
    } else {
        cv2_error.style.display = "block";
        document.querySelector("#CV2").closest(".input").classList.add("input-error");
        return false;
    }

    if (idCardFile !== null) {
        var fileType = idCardFile.type;
        var allowedTypes = ["application/pdf", "image/jpeg", "image/png"];

        if (!allowedTypes.includes(fileType)) {
            idCard2_error.style.display = "block";
            document.querySelector("#IDCard2").closest(".input").classList.add("input-error");
            return false;
        }
    } else {
        idCard2_error.style.display = "block";
        document.querySelector("#IDCard2").closest(".input").classList.add("input-error");
        return false;
    }
}

document.querySelector(".prev-btn").addEventListener("click", verify3);
function verify3(){
    if (fullname2.value != "") {
        fullname2_error.style.display = "none";
        document.querySelector("#fullname2").closest(".input").classList.remove("input-error");    
        return true;
    }
    if (email2.value.includes("@")) {
        email2_error.style.display = "none";
        document.querySelector("#email2").closest(".input").classList.remove("input-error"); 
        return true;
    }
    if (number2.value.length >= 9) {
        number2_error.style.display = "none";
        document.querySelector("#number2").closest(".input").classList.remove("input-error"); 
        return true;
    }
    if (lineID2.value != "") {
        lineID2_error.style.display = "none";
        document.querySelector("#LineID2").closest(".input").classList.remove("input-error"); 
        return true;
    }
    if (githubID2.value != "") {
        githubID2_error.style.display = "none";
        document.querySelector("#GithubID2").closest(".input").classList.remove("input-error"); 
        return true;
    }
    if (birthPlace2.value != "") {
        birthPlace2_error.style.display = "none";
        document.querySelector("#BirthPlace2").closest(".input").classList.remove("input-error"); 
        return true;
    }
    var today = new Date();
    var birthDateValue = new Date(birthDate2.value);
    var age = today.getFullYear() - birthDateValue.getFullYear();

    if (birthDateValue.getMonth() < today.getMonth() || (birthDateValue.getMonth() === today.getMonth() && birthDateValue.getDate() < today.getDate())) {
        age--;
    }

    if (age >= 17) {
        birthDate2_error.style.display = "none";
        document.querySelector("#BirthDate2").closest(".input").classList.remove("input-error");
        return true;
    }

    if (validation3()) {
        cv2_error.style.display = "none";
        document.querySelector("#CV2").closest(".input").classList.remove("input-error");
        return true;
    }
    
    if (validation3()) {
        idCard2_error.style.display = "none";
        document.querySelector("#IDCard2").closest(".input").classList.remove("input-error");
        return true;
    }
}
