{ 
    id: 6;
    title: "Asphalt 8: Airborne";
    cat: "3D";
    img: "https://picsum.photos";
    url: "https://crazygames.com" 
}
const cursor = document.querySelector('.custom-cursor');

document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});
const cursor = document.querySelector('.custom-cursor');
// Target links, buttons, and form inputs
const interactiveElements = document.querySelectorAll('a, button, input, select');

// 1. Follow the mouse
document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

// 2. Add hover effect
interactiveElements.forEach(element => {
  element.addEventListener('mouseenter', () => {
    cursor.classList.add('hovering');
  });
  
  element.addEventListener('mouseleave', () => {
    cursor.classList.remove('hovering');
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const cursor = document.querySelector('.custom-cursor');
  const interactiveElements = document.querySelectorAll('a, button, input, select');

  // Only run if the cursor element actually exists
  if (cursor) {
    document.addEventListener('mousemove', (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    });

    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', () => cursor.classList.add('hovering'));
      element.addEventListener('mouseleave', () => cursor.classList.remove('hovering'));
    });
  }
});


