let homePage = document.getElementById("home-page")
let signUpPage = document.getElementById("sign-up-page")
let loginPage = document.getElementById("login-page")

function showSignupPage() {
    homePage.style.display = 'none'
    loginPage.style.display = 'none'
    signUpPage.style.display = 'block'
}

function showLoginPage() {
    homePage.style.display = 'none'
    loginPage.style.display = 'block'
    signUpPage.style.display = 'none'
}