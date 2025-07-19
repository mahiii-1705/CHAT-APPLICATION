const socket = io();

const form = document.getElementById("chatForm");
const input = document.getElementById("msgInput");
const messages = document.getElementById("messages");

const username = "Guest" + Math.floor(Math.random() * 1000);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (input.value.trim() !== "") {
    socket.emit("chat message", `${username}: ${input.value}`);
    input.value = "";
  }
});

socket.on("chat message", (msg) => {
  const li = document.createElement("li");
  li.textContent = msg;
  messages.appendChild(li);
  messages.scrollTop = messages.scrollHeight;
});
