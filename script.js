function togglePassword() {
    const password = document.getElementById("password");

    if (password.type === "password") {
        password.type = "text";
    } else {
        password.type = "password";
    }
}

function loginUser(event) {
    event.preventDefault();

    const username = document.querySelector("input[type='text']").value;

    if (username.trim() === "") {
        alert("Please enter username");
        return;
    }

    localStorage.setItem("username", username);

    // Check if user logged before
    if (localStorage.getItem("hasLoggedIn")) {
        window.location.href = "welcome.html?type=back";
    } else {
        localStorage.setItem("hasLoggedIn", "true");
        window.location.href = "welcome.html?type=new";
    }
}
// Display username in chatbot
if (document.getElementById("userDisplay")) {
    document.getElementById("userDisplay").innerText =
        localStorage.getItem("username");
}

function sendMessage() {
    const input = document.getElementById("userInput");
    const message = input.value.trim();
    if (message === "") return;

    const chatBox = document.getElementById("chatMessages");

    // User Message
    const userDiv = document.createElement("div");
    userDiv.className = "user-message";
    userDiv.innerText = message;
    chatBox.appendChild(userDiv);

    // Add to History (first 20 characters)
    const historyList = document.getElementById("historyList");
    const newItem = document.createElement("li");
    newItem.innerText = message.substring(0, 20) + "...";
    historyList.appendChild(newItem);

    input.value = "";

    // Bot reply
    const botDiv = document.createElement("div");
    botDiv.className = "bot-message";
    botDiv.innerText = "Thank you for your message. We are here to support your health 💗";
    chatBox.appendChild(botDiv);

    chatBox.scrollTop = chatBox.scrollHeight;
}

function logout() {
    window.location.href = "index.html";
}
// ================= CHATBOT LOGIC =================

let feverMode = false;

function getBotResponse(message) {

message = message.toLowerCase();

if(message.includes("fever")){
    feverMode = true;

    return "You mentioned fever. Do you also have cough, cold, body pain or headache?";
}

if(feverMode){

    if(message.includes("cough") || message.includes("cold")){
        feverMode = false;

        return "You may have viral fever. Take rest, drink warm fluids and consider Paracetamol 500mg if fever is high. Consult a doctor if it lasts more than 2 days.";
    }

    if(message.includes("body pain")){
        feverMode = false;

        return "Fever with body pain detected. Rest well and stay hydrated. Paracetamol may help reduce fever and pain.";
    }

    if(message.includes("headache")){
        feverMode = false;

        return "Fever with headache detected. Rest in a quiet place and drink warm fluids.";
    }
}

if(message.includes("cold")){
    return "For cold: drink warm fluids and do steam inhalation.";
}

if(message.includes("cough")){
    return "For cough: drink warm water with honey.";
}

return "Please describe your health problem so I can assist you.";
}
