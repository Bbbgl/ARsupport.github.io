







AFRAME.registerComponent('clicker', {
    init: function () {

        //const el = document.getElementById("marker1");        
        this.el.addEventListener('click', e => {
            var element = document.querySelector('#entity')

            if((ink_level_device > 10)  && (message_device=='ok')){
                // ci metterò un innerHTML per un bottone 
                document.getElementById("myInstruction").innerHTML = "Ready to print";
        }
            
            if ((ink_level_device < 10) && (message_device=="ok")) {
                //element.removeAttribute('gltf-model');
                //immagine.parentNode.appendChild(immagine); //questo elimina l'oggetto --> provo a instanziare tutti gli oggetti e li rimuovo poi
                element.setAttribute('animation-mixer', 'clip:Open Front Door')
                document.getElementById("myInstruction").innerHTML = "Refill the ink as shown";
            }
            if ((ink_level_device > 10) && (message_device=="Error: paper tray is empty")) {
                //element.removeAttribute('gltf-model');
                //immagine.parentNode.appendChild(immagine); //questo elimina l'oggetto --> provo a instanziare tutti gli oggetti e li rimuovo poi
                element.setAttribute('animation-mixer', 'clip:Open Tray')
                document.getElementById("myInstruction").innerHTML = "Put paper where shown";
                
            }

            if ((ink_level_device > 10) && (message_device=="Warning: internal error")) {
                //element.removeAttribute('gltf-model');
                //immagine.parentNode.appendChild(immagine); //questo elimina l'oggetto --> provo a instanziare tutti gli oggetti e li rimuovo poi
                element.setAttribute('animation-mixer', 'clip:Extract Imaging Unit')
                document.getElementById("myInstruction").innerHTML = "Extract the chip";
                
            }

            if ((ink_level_device > 10) && (message_device=="Error: paper jam. Please contact the administrator")) {
                //element.removeAttribute('gltf-model');
                //immagine.parentNode.appendChild(immagine); //questo elimina l'oggetto --> provo a instanziare tutti gli oggetti e li rimuovo poi
                element.setAttribute('animation-mixer', 'clip:Extract cartridge')
                document.getElementById("myInstruction").innerHTML = "Check the cartridge";
                
            }



        })
    }
}); 