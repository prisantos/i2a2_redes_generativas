// Abrir pop-up de login
const loginLink = document.getElementById("login-button");
const loginPopup = document.getElementById("login-popup");

loginLink.addEventListener("click", function(event) {
  event.preventDefault();
  loginPopup.style.display = "block";
});

// Fechar pop-up de login
const closeButton = document.getElementById("close-button");

closeButton.addEventListener("click", function(event) {
  event.preventDefault();
  loginPopup.style.display = "none";
});

// Função de autenticação do usuário
function authenticateUser(username, password) {
  // Exemplo de validação bem-sucedida
  return username === "usuario@gmail.com" && password === "senha";
}

// Evento de envio do formulário
const loginForm = document.querySelector(".popup-form");

loginForm.addEventListener("submit", function(event) {
  event.preventDefault();

  // Obter os valores do formulário
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");

  const username = usernameInput.value;
  const password = passwordInput.value;

  // Autenticar o usuário
  if (authenticateUser(username, password)) {
    // Login bem-sucedido, redirecionar para a página principal
    window.location.href = "../pages/product.html";
  } else {
    // Credenciais inválidas, exibir mensagem de erro
    const errorMessage = document.createElement("div");
    errorMessage.textContent = "Usuário ou senha inválidos. Por favor, tente novamente.";
    errorMessage.classList.add("error-message");
    loginForm.appendChild(errorMessage);
  }
});

 // Abrir pop-up de esqueci minha senha
 const forgotPasswordLink = document.querySelector(".forgot-password-link");
 const forgotPasswordPopup = document.getElementById("forgot-password-popup");
 const forgotPasswordCloseButton = document.getElementById("forgot-password-close-button");

 forgotPasswordLink.addEventListener("click", function(event) {
   event.preventDefault();
   loginPopup.style.display = "none";
   forgotPasswordPopup.style.display = "block";
 });

 forgotPasswordCloseButton.addEventListener("click", function(event) {
   event.preventDefault();
   forgotPasswordPopup.style.display = "none";
 });

// Lógica de envio do formulário de esqueci minha senha
const forgotPasswordForm = document.getElementById("forgot-password-form");

forgotPasswordForm.addEventListener("submit", function(event) {
  event.preventDefault();

  // Obter o valor do campo de e-mail
  const emailInput = document.getElementById("forgot-password-email");
  const email = emailInput.value;

  // sucesso
  const successMessage = document.createElement("div");
  successMessage.textContent = "Um e-mail de recuperação de senha foi enviado para: " + email;
  successMessage.classList.add("success-message");
  successMessage.style.marginTop = "20px";
  forgotPasswordForm.appendChild(successMessage);


  // Fechar o pop-up de esqueci minha senha após alguns segundos
  setTimeout(function() {
    forgotPasswordPopup.style.display = "none";
  }, 100000); // Oculta o pop-up
});
