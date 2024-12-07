// Loader Effect
window.addEventListener("load", () => {
    document.getElementById("loader").classList.add("hidden");
});

// Personalized Greeting
function setGreeting() {
    const greetingEl = document.getElementById("greeting");
    const hour = new Date().getHours();
    let greeting = "Welcome to the Future!";
    if (hour < 12) greeting = "Good Morning, Future Traveler!";
    else if (hour < 18) greeting = "Good Afternoon, Visionary!";
    else greeting = "Good Evening, Dreamer!";
    
    greetingEl.textContent = greeting;
    greetingEl.classList.remove("hidden");
}

setGreeting();

// Smooth Navigation
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute("href"));
        target.scrollIntoView({ behavior: "smooth" });
    });
});

// Chat Integration
const chatToggle = document.getElementById("chat-toggle");
const chatWindow = document.getElementById("chat-window");
const chatMessages = document.getElementById("chat-messages");
const chatInput = document.getElementById("chat-input");
const chatSend = document.getElementById("chat-send");

chatToggle.addEventListener("click", () => {
    chatWindow.classList.toggle("hidden");
});

// Simulated Chatbot
chatSend.addEventListener("click", () => {
    const userMessage = chatInput.value.trim();
    if (!userMessage) return;

    // Append user message
    const userMessageEl = document.createElement("p");
    userMessageEl.textContent = `You: ${userMessage}`;
    chatMessages.appendChild(userMessageEl);
    
    // Simulate AI Response
    setTimeout(() => {
        const aiMessageEl = document.createElement("p");
        aiMessageEl.textContent = "AI Guide: This is only the beginning. Explore further.";
        chatMessages.appendChild(aiMessageEl);
    }, 1000);

    chatInput.value = "";
});
