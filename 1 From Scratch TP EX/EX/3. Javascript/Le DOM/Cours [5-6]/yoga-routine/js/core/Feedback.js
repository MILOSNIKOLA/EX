/**
 * Feedback helpers (sound + vibration)
 * Side effects live here (NOT in Timer).
 */
 
export class Feedback {
  static currentAudio = null;

  static playSound(src = "ring.mp3", volume = 0.35) {
    try {
      // Stop previous sound if any (optional, but good for cleanup)
      // this.stopAll(); 
      
      const audio = new Audio(src);
      audio.volume = volume;
      this.currentAudio = audio;
      
      audio.play().catch(() => {});
      
      // Cleanup reference when done
      audio.onended = () => {
        if (this.currentAudio === audio) {
          this.currentAudio = null;
        }
      };
    } catch {
      // ignore
    }
  }

  static stopAll() {
    // Stop any playing audio
    if (this.currentAudio) {
      this.currentAudio.pause();
      this.currentAudio.currentTime = 0;
      this.currentAudio = null;
    }
    
    // Cancel any ongoing vibration
    try {
      if ("vibrate" in navigator) {
        navigator.vibrate(0); // Passing 0 cancels vibration
      }
    } catch {
      // ignore
    }
  }

  static vibrate(pattern = 50) {
    try {
      if ("vibrate" in navigator) {
        navigator.vibrate(pattern);
      }
    } catch {
      // ignore
    }
  }
}
