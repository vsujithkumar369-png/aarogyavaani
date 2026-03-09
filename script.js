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

// ---------------- CHATBOT ----------------
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

// FEVER
if(message.includes("fever")){
return `You mentioned fever.

Possible causes:
• Viral infection
• Flu
• Body infection

Suggested care:
• Take rest
• Drink warm fluids
• Use a cold cloth on forehead

Medicine guidance:
• Paracetamol may help reduce fever

⚠ If fever continues more than 2 days consult a doctor.`;
}

// COUGH
if(message.includes("cough")){
return `You mentioned cough.

Possible causes:
• Cold
• Throat infection
• Allergy

Suggested care:
• Drink warm water
• Honey with ginger may help
• Avoid cold drinks

Medicine guidance:
• Cough syrup may help relieve symptoms

⚠ If cough lasts more than a week consult a doctor.`;
}

// COLD
if(message.includes("cold")){
return `You mentioned cold symptoms.

Suggested care:
• Drink warm fluids
• Steam inhalation
• Rest properly

Medicine guidance:
• Antihistamine tablets may help

⚠ If symptoms worsen consult a doctor.`;
}

// HEADACHE
if(message.includes("headache")){
return `You mentioned headache.

Possible causes:
• Stress
• Dehydration
• Lack of sleep

Suggested care:
• Drink enough water
• Rest in a quiet place
• Avoid screen time

Medicine guidance:
• Mild pain relievers may help

⚠ Severe headaches require medical consultation.`;
}

// STOMACH PAIN
if(message.includes("stomach pain")){
return `You mentioned stomach pain.

Possible causes:
• Indigestion
• Gas
• Food poisoning

Suggested care:
• Drink warm water
• Avoid oily foods
• Eat light meals

Medicine guidance:
• Antacid tablets may help reduce acidity

⚠ If pain continues for more than 24 hours consult a doctor.`;
}

// VOMITING
if(message.includes("vomit") || message.includes("vomiting")){
return `You mentioned vomiting.

Possible causes:
• Food poisoning
• Stomach infection
• Motion sickness

Suggested care:
• Drink small amounts of water
• Take ORS solution
• Rest properly

⚠ If vomiting continues consult a doctor.`;
}

// DIARRHEA
if(message.includes("diarrhea")){
return `You mentioned diarrhea.

Suggested care:
• Drink ORS solution
• Stay hydrated
• Avoid spicy foods

⚠ If diarrhea continues for more than a day consult a doctor.`;
}

// BODY PAIN
if(message.includes("body pain")){
return `You mentioned body pain.

Possible causes:
• Fatigue
• Viral infection
• Muscle strain

Suggested care:
• Take rest
• Drink warm fluids
• Gentle stretching may help

Medicine guidance:
• Mild pain relievers may reduce discomfort.`;
}

// STRESS
if(message.includes("stress")){
return `You mentioned stress.

Suggested care:
• Practice deep breathing
• Try meditation
• Take breaks from work

Maintaining a healthy routine can help reduce stress levels.`;
}

// DEFAULT
return "Please describe your symptoms clearly so I can assist you better.";
}

// ---------------- LOGOUT ----------------
function logout(){
window.location.href = "index.html";
}
