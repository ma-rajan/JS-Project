const sad = document.getElementById("sad");
const neutral = document.getElementById("neutral");
const happy = document.getElementById("happy");
const reviewSend = document.getElementById("reviewSend");
const container = document.querySelector(".container");
let feedback = "";
function selectOption(option, value) {
    sad.classList.remove("selected");
    neutral.classList.remove("selected");
    happy.classList.remove("selected");
    option.classList.add("selected");
    feedback = value;
}
sad.onclick = () => selectOption(sad, "Unhappy");
neutral.onclick = () => selectOption(neutral, "Neutral");
happy.onclick = () => selectOption(happy, "Happy");
reviewSend.onclick = () => {
    if (feedback === "") {
        alert("Please select feedback first!");
        return;
    }
    container.innerHTML = `
        <div class="thankyou">
            <h2>Thank You!</h2>
            <p>Feedback: ${feedback}</p>
            <p>We'll use your feedback to improve our customer support.</p>
        </div>
    `;
};