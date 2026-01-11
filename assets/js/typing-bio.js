/**
 * Typing Effect for Author Bio
 */
document.addEventListener('DOMContentLoaded', function() {
  const bioElement = document.querySelector('.author__bio');

  if (!bioElement) return;

  const fullText = bioElement.textContent.trim();
  const phrases = fullText.split('|').map(s => s.trim());

  // Clear the bio and add cursor
  bioElement.innerHTML = '<span class="typing-text"></span><span class="typing-cursor"></span>';
  const typingText = bioElement.querySelector('.typing-text');

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let isPaused = false;

  const typeSpeed = 80;
  const deleteSpeed = 40;
  const pauseTime = 2000;
  const delayBetweenPhrases = 500;

  function type() {
    const currentPhrase = phrases[phraseIndex];

    if (isPaused) {
      isPaused = false;
      isDeleting = true;
      setTimeout(type, pauseTime);
      return;
    }

    if (isDeleting) {
      // Deleting characters
      typingText.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;

      if (charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(type, delayBetweenPhrases);
        return;
      }
    } else {
      // Typing characters
      typingText.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;

      if (charIndex === currentPhrase.length) {
        isPaused = true;
        setTimeout(type, 100);
        return;
      }
    }

    setTimeout(type, isDeleting ? deleteSpeed : typeSpeed);
  }

  // Start typing after a short delay
  setTimeout(type, 1000);
});
