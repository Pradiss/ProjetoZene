export default function mostrarSenha() {
    var inputPass = document.getElementById("senha")
    var btnShowPass = document.getElementById("btn-senha")

    if(inputPass.type === 'password'){
        inputPass.setAttribute('type', 'text')
        btnShowPass.classList.replace('bi bi-eye-slash-fill')

    }else {
        inputPass.setAttribute('type','password')
        btnShowPass.classList.replace('bi bi-eye-slash-fill','bi-eye-fill')
    }
}
mostrarSenha()