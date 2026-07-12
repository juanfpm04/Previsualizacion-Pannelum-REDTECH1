


function createImageTooltip(div, args) {
    const panormama = document.getElementById('panormama')
    var span = document.createElement('span');

    if (args[0].length === 0) {
        span.innerHTML = `
        <h2>${args[2]}</h2>
        <h1>${args[1]}</h1>
        <a href="${args[4]}" class="enlace-menu" target="_blank">${args[3]}</a>
        `; 
    }
    else {
         span.innerHTML = `
        <img src="${args[0]}" width="95%">
        <h2>${args[2]}</h2>
        <h1>${args[1]}</h1>
        <a href="${args[4]}" class="enlace-menu" target="_blank">${args[3]}</a>
    `;       
    }

        
    div.classList.add('custom-tooltip');
    div.appendChild(span);

    span.style.width = span.scrollWidth + 'px';
    span.style.marginLeft = -(span.scrollWidth - div.offsetWidth) / 2 + 'px';
    span.style.marginTop = -span.scrollHeight / 2 + 'px';


    

    div.addEventListener("mouseover" , function () {

        document.querySelectorAll(".pnlm-hotspot-base").forEach(h => {
            h.style.opacity = "0";
            h.style.pointerEvents = "none";
        });

        div.style.opacity = "1";
        div.style.pointerEvents = "auto";
        div.addEventListener("mouseleave", function () {

            document.querySelectorAll(".pnlm-hotspot-base").forEach(h => {
                h.style.opacity = "1";
                h.style.pointerEvents = "auto";
            });
        });
        document.addEventListener("pointermove", function () {

            document.querySelectorAll(".pnlm-hotspot-base").forEach(h => {
                h.style.opacity = "1";
                h.style.pointerEvents = "auto";
            });
        });
           
    });



}

