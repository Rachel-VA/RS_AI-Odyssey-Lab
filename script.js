// Make the sound files play auto in the background continuously and randomly
document.addEventListener('DOMContentLoaded', function () {
    const audioElement = document.getElementById('backgroundAudio');
    const sources = audioElement.getElementsByTagName('source');
    let currentSourceIndex = 0;
  
    // Make the sounds play randomly
    function playRandomSound() {
      for (let i = sources.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = sources[i].src;
        sources[i].src = sources[j].src;
        sources[j].src = temp;
      }
    }
  
    // Play a random sound at the beginning
    playRandomSound();
  
    // Play a new random sound next after the beginning
    audioElement.addEventListener('ended', () => {
      playRandomSound();
      audioElement.load(); // Reload the audio 
      audioElement.play();
    });
    // Start audio playback on page load
    audioElement.play();
    
    
  });
  