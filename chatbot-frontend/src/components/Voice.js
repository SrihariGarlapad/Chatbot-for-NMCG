let currentlySpeaking = false;
let synth = null;

function speakText(text) {
  // Check if speech synthesis is already in progress
  if (currentlySpeaking) {
    // If yes, stop the current speech
    synth.cancel();
  }

  // Access the SpeechSynthesis interface from the window object
  synth = window.speechSynthesis;

  // Create a new SpeechSynthesisUtterance object with the provided text
  const utterance = new SpeechSynthesisUtterance(text);

  // Use the speak method of the SpeechSynthesis interface to initiate text-to-speech
  synth.speak(utterance);

  // Set currentlySpeaking flag to true
  currentlySpeaking = true;

  // Listen for the end of speech event to reset the currentlySpeaking flag
  utterance.onend = () => {
    currentlySpeaking = false;
  };
}

// Export the speakText function for use in other modules
export { speakText };