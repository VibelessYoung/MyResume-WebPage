function createTypingEffect(element, texts, speed = 100) {
  let textIndex = 0; 
  let charIndex = 0; 
  let isDeleting = false;
  
  function type() {
    const currentText = texts[textIndex];
    
    if (isDeleting) {
      element.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;
    } else {
      element.textContent = currentText.substring(0, charIndex + 1);
      charIndex++;
    }
    
    let typeSpeed = speed;
    
    if (isDeleting) {
      typeSpeed /= 2;
    }
    
    if (!isDeleting && charIndex === currentText.length) {
      typeSpeed = 2000;
      isDeleting = true;
    } 
    else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length; // NEXT TEXT   
      typeSpeed = 500; // STOP 
    }
    setTimeout(type, typeSpeed);
  }
  type();
}

// LOAD EFFECT
document.addEventListener('DOMContentLoaded', function() {
  const typingElement = document.querySelector('.typing-effect');

  // TEXTS
  
  if (typingElement) {
    const texts = [
      'من امیر هستم',
      'طراح سایت',
      'برنامه‌نویس',
      'و . . .'
    ];
    
    //  START TYPE EFFECT
    createTypingEffect(typingElement, texts, 150);
  }
});
