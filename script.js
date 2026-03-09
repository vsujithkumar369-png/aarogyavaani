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

    if (localStorage.getItem("hasLoggedIn")) {
        window.location.href = "welcome.html?type=back";
    } else {
        localStorage.setItem("hasLoggedIn", "true");
        window.location.href = "welcome.html";
    }
}

// ---------------- SHOW USERNAME ----------------
if (document.getElementById("userDisplay")) {
    const username = localStorage.getItem("username");
    document.getElementById("userDisplay").innerText = username;
}

function sendMessage() {

const input = document.getElementById("userInput");
const message = input.value.trim();

if(message === "") return;

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


// -------- SAVE HISTORY --------
let history = JSON.parse(localStorage.getItem("chatHistory")) || [];
history.push(message);
localStorage.setItem("chatHistory", JSON.stringify(history));

displayHistory();

input.value = "";

chatBox.scrollTop = chatBox.scrollHeight;
}

// ---------------- BOT RESPONSE ----------------
function getBotResponse(message){

message = message.toLowerCase();

if(message.includes("fever")){
return `You mentioned fever.

Suggested care:
• Take rest
• Drink warm fluids
• Use cold compress

Medicine guidance:
Paracetamol may help reduce fever.

⚠ If fever continues more than 2 days consult a doctor.`;
}

if(message.includes("cough")){
return `You mentioned cough.

Suggested care:
• Drink warm water
• Honey with ginger may help
• Avoid cold drinks

⚠ If cough lasts more than a week consult a doctor.`;
}

if(message.includes("cold")){
return `You mentioned cold symptoms.

Suggested care:
• Drink warm fluids
• Steam inhalation
• Rest properly`;
}

if(message.includes("headache")){
return `You mentioned headache.

Possible causes:
• Stress
• Dehydration
• Lack of sleep

Suggested care:
• Drink water
• Rest in a quiet room`;
}

if(message.includes("stomach pain")){
return `You mentioned stomach pain.

Possible causes:
• Indigestion
• Gas
• Food poisoning

Suggested care:
• Drink warm water
• Avoid oily food
• Eat light meals`;
}

if(message.includes("vomiting")){
return `You mentioned vomiting.

Suggested care:
• Drink small amounts of water
• ORS solution may help
• Rest properly`;
}

if(message.includes("diarrhea")){
return `You mentioned diarrhea.

Suggested care:
• Drink ORS
• Stay hydrated
• Avoid spicy food`;
}

if(message.includes("body pain")){
return `You mentioned body pain.

Suggested care:
• Take rest
• Drink warm fluids
• Gentle stretching may help`;
}

if(message.includes("stress")){
return `You mentioned stress.

Suggested care:
• Practice deep breathing
• Meditation
• Take breaks`;
}

if(message.includes("dengue")){
return `Dengue symptoms include fever, headache and joint pain.

⚠ Immediately consult a doctor if dengue is suspected.`;
}

if(message.includes("malaria")){
return `Malaria symptoms include fever, chills and sweating.

⚠ Seek medical attention immediately.`;
}

if(message.includes("asthma")){
return `Asthma symptoms include breathing difficulty and wheezing.

Suggested care:
• Avoid dust and smoke
• Use inhaler if prescribed`;
}

if(message.includes("chest pain")){
return `Chest pain can be serious.

⚠ Seek medical help immediately if pain is severe.`;
}

if(message.includes("throat pain")){
return `You mentioned throat pain.

Suggested care:
• Gargle warm salt water
• Drink warm liquids`;
}

if(message.includes("eye infection")){
return `Eye infection symptoms include redness and irritation.

Suggested care:
• Avoid touching eyes
• Keep eyes clean`;
}

if(message.includes("skin allergy")){
return `Skin allergy may cause itching or rash.

Suggested care:
• Avoid allergens
• Keep skin clean`;
}

if(message.includes("diabetes")){
return `Diabetes symptoms may include frequent urination and fatigue.

⚠ Consult a doctor for proper diagnosis.`;
}

return "Please describe your symptoms clearly so I can assist you.";
}
