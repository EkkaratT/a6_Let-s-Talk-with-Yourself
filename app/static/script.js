// function sendMessage() {
//     let inputField = document.getElementById("user-input");
//     let userText = inputField.value.trim();
//     if (!userText) return;

//     appendMessage("user", userText);
//     inputField.value = "";

//     fetch("/ask", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ question: userText })
//     })
//     .then(response => response.json())
//     .then(data => {
//         appendMessage("bot", data.response);
//         if (data.source_documents.length > 0) {
//             appendMessage("bot", "Sources: " + data.source_documents.join(", "));
//         }
//     })
//     .catch(error => console.error("Error:", error));
// }

// function appendMessage(sender, message) {
//     let chatBox = document.getElementById("chat-box");
//     let messageDiv = document.createElement("div");
//     messageDiv.className = sender === "user" ? "user-message" : "bot-message";
//     messageDiv.innerHTML = `<p>${message}</p>`;
//     chatBox.appendChild(messageDiv);
//     chatBox.scrollTop = chatBox.scrollHeight;
// }

// function handleKeyPress(event) {
//     if (event.key === "Enter") {
//         sendMessage();
//     }
// }

// document.addEventListener("DOMContentLoaded", function () {
//     const chatForm = document.getElementById("chat-form");
//     const chatInput = document.getElementById("chat-input");
//     const sendButton = document.getElementById("send-button");
//     const chatBox = document.getElementById("chat-box");

//     // Event listener for form submission
//     chatForm.addEventListener("submit", async function (event) {
//         event.preventDefault(); // Prevent page reload on form submission

//         const userMessage = chatInput.value.trim();
//         if (!userMessage) return; // Don't send empty messages

//         // Append user message to chatbox
//         appendMessage("You", userMessage);

//         // Disable button while waiting for response
//         sendButton.disabled = true;

//         try {
//             const response = await fetch("/ask", {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify({ question: userMessage })
//             });

//             if (!response.ok) {
//                 throw new Error(`Server error: ${response.status}`);
//             }

//             const data = await response.json();
//             console.log("Response from server:", data); // Debugging output

//             // Ensure there's a valid answer before displaying
//             const botResponse = data.answer || "I'm not sure how to respond.";
//             appendMessage("Bot", botResponse);
//         } catch (error) {
//             console.error("Error:", error);
//             appendMessage("Bot", "Sorry, there was an error processing your request.");
//         }

//         // Enable button and clear input field
//         sendButton.disabled = false;
//         chatInput.value = "";
//         chatInput.focus();
//     });

//     function appendMessage(sender, message) {
//         const messageElement = document.createElement("div");
//         messageElement.classList.add("message");
//         messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
//         chatBox.appendChild(messageElement);
//         chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll to latest message
//     }
// });

document.addEventListener("DOMContentLoaded", function () {
    const chatForm = document.getElementById("chat-form");
    const chatInput = document.getElementById("chat-input");
    const chatBox = document.getElementById("chat-box");
    const sendButton = document.getElementById("send-button");

    chatForm.addEventListener("submit", async function (event) {
        event.preventDefault(); // Prevent page reload

        const userMessage = chatInput.value.trim();
        if (!userMessage) return; // Don't send empty messages

        appendMessage("You", userMessage, "user");

        sendButton.disabled = true;

        try {
            const response = await fetch("/ask", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ question: userMessage })
            });

            if (!response.ok) throw new Error(`Server error: ${response.status}`);

            const data = await response.json();
            console.log("Response from server:", data);

            const botResponse = data.answer || "Sorry, I didn't understand that.";
            appendMessage("Bot", botResponse, "bot");
        } catch (error) {
            console.error("Error:", error);
            appendMessage("Bot", "Oops! Something went wrong.", "bot");
        }

        sendButton.disabled = false;
        chatInput.value = "";
        chatInput.focus();
    });

    function appendMessage(sender, message, type) {
        const messageElement = document.createElement("div");
        messageElement.classList.add("message", type);
        messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll to latest message
    }
});
