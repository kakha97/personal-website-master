window.addEventListener('load', () => {
    
    const joinOurProgramSection = document.createElement('section');
    joinOurProgramSection.className = 'app-section app-section--image-program'
    const main = document.getElementById("app-container");     
    main.appendChild(joinOurProgramSection); 

    main.insertBefore(joinOurProgramSection, main.children[4]);

    const headline = document.createElement('h1');
    headline.className = 'app-title';
    headline.innerText = 'Join Our Program';
    joinOurProgramSection.appendChild(headline);

    const smlHeadline = document.createElement('h2');
    smlHeadline.className = 'app-smlTitle';
    smlHeadline.innerText = `Sed do eiusmod tempor incididunt 
    ut labore et dolore magna aliqua.`
    joinOurProgramSection.appendChild(smlHeadline);

    const divFlex = document.createElement('div');
    divFlex.className = 'input-div-flex';
    joinOurProgramSection.appendChild(divFlex);

    const email = document.createElement('input');
    email.setAttribute('type', 'email');
    email.setAttribute('value', 'Email');
    email.className = 'app-section--email';
    divFlex.appendChild(email);

    const subscribe = document.createElement('button');
    subscribe.innerHTML = 'SUBSCRIBE';
    subscribe.className = 'app-section--subscribe';
    divFlex.appendChild(subscribe);

    subscribe.addEventListener('click', function(event){
        event.preventDefault();
        console.log(event);
    },false) 
    
 
});


