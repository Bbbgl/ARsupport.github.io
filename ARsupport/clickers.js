ink_level_device= 0;// serve per far funzionare lo script clicker che senno da errore
pressure_device= 0;// serve per far funzionare lo script clicker che senno da errore
temperature_device=0;

AFRAME.registerComponent('clicker1', {
    init: function () {

        //const el = document.getElementById("marker1");        
        this.el.addEventListener('click', e => {
            // seleziono l'entity stampante
            var element = document.querySelector('#entity1')
            //attempting for image
            //var immagine = document.querySelector('#immagineprova1')
            if ((temperature_device > 18) && (message_device='assente')) {
                //element.removeAttribute('gltf-model');
                // prima c'era remove attribute per togliere il gltf
                element.setAttribute('gltf-model', "https://raw.githubusercontent.com/Bbbgl/ARsupport.github.io/main/ARsupport/assets/devices/temperature/conditioning_commands/scenesolved.glb");
                //immagine.parentNode.appendChild(immagine); //questo elimina l'oggetto --> provo a instanziare tutti gli oggetti e li rimuovo poi
                element.setAttribute('scale', '10 10 10')
                element.setAttribute('position', '0 0 -1')
            }



        })
    }
});



AFRAME.registerComponent('clicker2', {
    init: function () {

        //const el = document.getElementById("marker1");        
        this.el.addEventListener('click', e => {
            var element = document.querySelector('#entity2')
            //var immagine = document.querySelector('#immagineprova2')
            // è necessario inizializzare un valore sennò non funziona il primo clicker
            if ((pressure_device > 1000) && (messagge='assente')) {

                //element.removeAttribute('gltf-model');
                // prima c'era remove attribute per togliere il gltf
                element.setAttribute('gltf-model', "https://raw.githubusercontent.com/Bbbgl/ARsupport.github.io/main/ARsupport/assets/devices/temperature/conditioning_commands/scenesolved.glb");
                //immagine.parentNode.appendChild(immagine); //questo elimina l'oggetto --> provo a instanziare tutti gli oggetti e li rimuovo poi
                element.setAttribute('scale', '10 10 10')
                element.setAttribute('position', '0 0 -1')
                
                //immagine.parentNode.appendChild(immagine); //questo elimina l'oggetto --> provo a instanziare tutti gli oggetti e li rimuovo poi
                //immagine.setAttribute('scale', '2 2 2')
            }



        })
    }
});

AFRAME.registerComponent('clicker3', {
    init: function () {

        //const el = document.getElementById("marker1");        
        this.el.addEventListener('click', e => {
            var element = document.querySelector('#entity3')

            if((ink_level_device > 10)  && (message_device=='ok')){
                // ci metterò un innerHTML per un bottone 
            alert('Ready to print')
        }
            
            if ((ink_level_device < 10) && (message_device=="ok")) {
                //element.removeAttribute('gltf-model');
                //immagine.parentNode.appendChild(immagine); //questo elimina l'oggetto --> provo a instanziare tutti gli oggetti e li rimuovo poi
                element.setAttribute('animation-mixer', 'clip:Open Front Door')
                alert('ink level low')
            }
            if ((ink_level_device > 10) && (message_device=="Error: paper tray is empty")) {
                //element.removeAttribute('gltf-model');
                //immagine.parentNode.appendChild(immagine); //questo elimina l'oggetto --> provo a instanziare tutti gli oggetti e li rimuovo poi
                element.setAttribute('animation-mixer', 'clip:Open Tray')
                
            }

            if ((ink_level_device > 10) && (message_device=="Warning: internal error")) {
                //element.removeAttribute('gltf-model');
                //immagine.parentNode.appendChild(immagine); //questo elimina l'oggetto --> provo a instanziare tutti gli oggetti e li rimuovo poi
                element.setAttribute('animation-mixer', 'clip:Extract Imaging Unit')
                
            }

            if ((ink_level_device > 10) && (message_device=="Error: paper jam. Please contact the administrator")) {
                //element.removeAttribute('gltf-model');
                //immagine.parentNode.appendChild(immagine); //questo elimina l'oggetto --> provo a instanziare tutti gli oggetti e li rimuovo poi
                element.setAttribute('animation-mixer', 'clip:Extract cartridge')
                
            }



        })
    }
}); 
