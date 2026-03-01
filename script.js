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