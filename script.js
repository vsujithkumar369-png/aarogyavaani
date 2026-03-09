// ---------------- PASSWORD TOGGLE ----------------
function togglePassword() {
    const password = document.getElementById("password");

    if (password.type === "password") {
        password.type = "text";
    } else {
        password.type = "password";
    }
}


// ---------------- LOGIN FUNCTION ----------------
function loginUser(event) {

    event.preventDefault();

    const username = document.querySelector("input[type='text']").value;

    if (username.trim() === "") {
        alert("Please enter username");
        return;
    }

    localStorage.setItem("username", username);

    // check if user logged before
    if (localStorage.getItem("hasLoggedIn")) {

        window.location.href = "welcome.html?type=back";

    } else {

        localStorage.setItem("hasLoggedIn", "true");
        window.location.href = "welcome.html";
    }
}



// ---------------- SHOW USERNAME IN CHATBOT ----------------
if (document.getElementById("userDisplay")) {

    const username = localStorage.getItem("username");
    document.getElementById("userDisplay").innerText = username;
}



// ---------------- CHATBOT LOGIC ----------------
let feverMode = false;



function sendMessage() {

    const input = document.getElementById("userInput");
    const message = input.value.trim();

    if (message === "") return;

    const chatBox = document.getElementById("chatMessages");



    // USER MESSAGE
    const userMsg = document.createElement("div");
    userMsg.className = "user-message";
    userMsg.innerText = message;
    chatBox.appendChild(userMsg);



    // BOT MESSAGE
    const botMsg = document.createElement("div");
    botMsg.className = "bot-message";
    botMsg.innerText = getBotResponse(message);
    chatBox.appendChild(botMsg);



    input.value = "";

    chatBox.scrollTop = chatBox.scrollHeight;
}



// ---------------- BOT RESPONSE ----------------
function getBotResponse(message) {

    message = message.toLowerCase();



    // FEVER DETECTION
    if (message.includes("fever")) {

        feverMode = true;

        return "You mentioned fever.\n\nDo you also have these symptoms?\n• cough\n• cold\n• body pain\n• headache\n\nPlease type your symptoms.";
    }



    // FEVER SYMPTOMS
    if (feverMode) {

        if (message.includes("cough") || message.includes("cold")) {

            feverMode = false;

            return "You may have viral fever.\n\nSuggested care:\n• Take rest\n• Drink warm fluids\n• Steam inhalation\n\nMedicine guidance:\nParacetamol 500mg may help reduce fever.\n\n⚠ If fever continues more than 2 days consult a doctor.";
        }



        if (message.includes("body pain")) {

            feverMode = false;

            return "Fever with body pain detected.\n\nSuggested care:\n• Rest well\n• Drink plenty of water\n\nMedicine guidance:\nParacetamol may help reduce pain.";
        }



        if (message.includes("headache")) {

            feverMode = false;

            return "Fever with headache detected.\n\nSuggested care:\n• Rest in a quiet place\n• Drink warm fluids\n\nMedicine guidance:\nParacetamol may help.";
        }
    }



    // OTHER PROBLEMS
    if (message.includes("cold")) {
        return "For cold: drink warm fluids and do steam inhalation.";
    }

    if (message.includes("cough")) {
        return "For cough: drink warm water with honey.";
    }

    if (message.includes("stomach pain")) {
        return "Avoid oily food and drink warm water.";
    }



    return "Please describe your health problem so I can assist you.";
}



// ---------------- LOGOUT ----------------
function logout() {
    window.location.href = "index.html";
}
