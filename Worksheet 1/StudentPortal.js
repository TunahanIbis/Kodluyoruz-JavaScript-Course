const CHECK = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg icon-large" viewBox="0 0 16 16">
  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
</svg>
`;

const X = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x icon-large" viewBox="0 0 16 16">
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
</svg>
`;

let studentName = prompt("Welcome to the Student Portal. Please enter your name: ")
let lecture = prompt("Please enter your lecture:")
let examGrade = prompt("Please enter your numerical grade (0-100):")
let textInfo;
let info = document.querySelector("#info")

if (examGrade >= 0 && examGrade <= 100) {

    info.classList.add('text-primary')
    if (examGrade >= 90) {
        textInfo = `AA`
        passOrFail= `(${CHECK} You Pass ${CHECK})`
    } else if (examGrade >= 85) {
        textInfo = `BA`
        passOrFail= `(${CHECK} You Pass ${CHECK})`
    } else if (examGrade >= 80) {
        textInfo = `BB`
        passOrFail= `(${CHECK} You Pass ${CHECK})`
    } else if (examGrade >= 75) {
        textInfo = `CB`
        passOrFail= `(${CHECK} You Pass ${CHECK})`
    } else if (examGrade >= 70) {
        textInfo = `CC`
        passOrFail= `(${CHECK} You Pass ${CHECK})`
    } else if (examGrade >= 65) {
        textInfo = `DC`
        passOrFail= `(${CHECK} You Pass ${CHECK})`
    } else if (examGrade >= 60) {
        textInfo = `DD`
        passOrFail= `(${CHECK} You Pass ${CHECK})`
    } else if (examGrade >= 50) {
        textInfo = `FD`
        passOrFail= `(${CHECK} You Pass ${CHECK})`
    } else if (examGrade < 50) {
        textInfo = `FF`
        passOrFail= `(${X} You Fail ${X})`
        info.classList.remove('text-primary')
        info.classList.add('text-danger')
    }
} else {
    textInfo = "Numerical grade must be between 0 and 100. Please write your grade again."
}


info.innerHTML = `Hi <b>${studentName}</b>,<br>  your letter grade for <b>${lecture}</b> is <b>${textInfo}</b> <br> <br> <b>${passOrFail}</b>  `