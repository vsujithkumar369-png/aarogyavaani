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

    // Detect fever
    if(message.includes("fever")){

        feverMode = true;

        return "You mentioned fever.\n\nDo you also have these symptoms?\n• cough\n• cold\n• body pain\n• headache\n\nPlease type your symptoms.";
    }

    // If fever mode active
    if(feverMode){

        if(message.includes("cough") || message.includes("cold")){
            feverMode = false;

            return "You may have viral fever.\n\nSuggested care:\n• Rest well\n• Drink warm fluids\n• Steam inhalation\n\nMedicine guidance:\nParacetamol 500mg for fever.\n\n⚠ If fever lasts more than 2 days consult a doctor.";
        }

        if(message.includes("body pain")){
            feverMode = false;

            return "Fever with body pain detected.\n\nSuggested care:\n• Take rest\n• Drink plenty of water\n\nMedicine:\nParacetamol 500mg may help reduce pain and fever.";
        }

        if(message.includes("headache")){
            feverMode = false;

            return "Fever with headache detected.\n\nSuggested care:\n• Rest in a quiet room\n• Drink warm fluids\n\nMedicine:\nParacetamol 500mg may help reduce fever.";
        }

    }

    // Other common problems
    if(message.includes("cold")){
        return "For cold: drink warm fluids, take rest and do steam inhalation.";
    }

    if(message.includes("cough")){
        return "For cough: drink warm water with honey and avoid cold drinks.";
    }

    if(message.includes("stomach pain")){
        return "For stomach pain: avoid oily food and drink warm water.";
    }

    return "Please describe your health problem so I can assist you.";
}


// Logout
function logout(){
    window.location.href = "index.html";
}
