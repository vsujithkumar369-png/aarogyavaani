// Show username
if (document.getElementById("userDisplay")) {
    document.getElementById("userDisplay").innerText =
        localStorage.getItem("username");
}

let feverMode = false;

// Send message
function sendMessage() {

    const input = document.getElementById("userInput");
    const message = input.value.toLowerCase();

    if (message === "") return;

    const chatBox = document.getElementById("chatMessages");

    // USER MESSAGE
    const userMsg = document.createElement("div");
    userMsg.className = "user-message";
    userMsg.innerText = message;
    chatBox.appendChild(userMsg);

    // BOT REPLY
    const botMsg = document.createElement("div");
    botMsg.className = "bot-message";
    botMsg.innerText = getBotResponse(message);;
    chatBox.appendChild(botMsg);

    input.value = "";

    chatBox.scrollTop = chatBox.scrollHeight;
}


// BOT RESPONSE FUNCTION
function getBotResponse(message) {

message = message.toLowerCase();


// FEVER
if(message.includes("fever")){
    return "You mentioned fever. Do you also have cough, cold, body pain or headache?";
}

if(message.includes("fever") && message.includes("cough")){
    return "This may be viral fever. Rest well, drink warm fluids and steam inhalation may help. Paracetamol can reduce fever. If it lasts more than 2 days, consult a doctor.";
}


// COLD
if(message.includes("cold")){
    return "For common cold: drink warm fluids, take steam inhalation and rest well.";
}


// COUGH
if(message.includes("cough")){
    return "For cough: drink warm water with honey or ginger. Avoid cold drinks.";
}


// HEADACHE
if(message.includes("headache")){
    return "Headache can be caused by stress or dehydration. Rest, drink water and avoid too much screen time.";
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
• Avoid oily or spicy foods
• Eat light meals

Medicine guidance:
• Antacid tablets may help reduce acidity

⚠ If pain is severe or lasts more than 24 hours, consult a doctor.`;
}


// VOMITING
if(message.includes("vomiting")){
    return "Drink small amounts of water frequently. ORS solution can help prevent dehydration.";
}


// DIARRHEA
if(message.includes("diarrhea")){
    return "Drink ORS solution and stay hydrated. Avoid spicy foods.";
}


// BODY PAIN
if(message.includes("body pain")){
    return "Body pain may be due to fatigue or viral infection. Rest well and drink fluids.";
}


// STRESS
if(message.includes("stress")){
    return "Try deep breathing, meditation or short breaks from work.";
}


// DEFAULT
return "Please describe your symptoms clearly so I can help you.";
}
