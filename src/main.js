window.addEventListener('load', () => {
    
    const joinOurProgramSection = document.createElement('section');
    joinOurProgramSection.className = 'app-section app-section--image-program'
    const main = document.getElementById("app-container");     
    main.appendChild(joinOurProgramSection); 
    main.insertBefore(joinOurProgramSection, main.children[4]);
    
});


