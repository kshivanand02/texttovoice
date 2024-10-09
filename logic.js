let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector('select');

// Event triggered when voices are loaded
window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    
    // Set the default voice
    speech.voice = voices[0];

    // Populate the voiceSelect dropdown with voice options
    voices.forEach((voice, i) => {
        let option = new Option(voice.name, i);
        voiceSelect.appendChild(option);
    });
};

// Change the voice based on the selected option
voiceSelect.addEventListener('change', () => {
    speech.voice = voices[voiceSelect.value];
});

// Trigger speech synthesis on button click
document.querySelector("button").addEventListener("click", () => {
    speech.text = document.querySelector('textarea').value;
    window.speechSynthesis.speak(speech);
});

