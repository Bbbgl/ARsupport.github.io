
temperature_device='temperature_device' // altrimenti non funziona
AFRAME.registerComponent('clicker1', {
    init: function () {

        //const el = document.getElementById("marker1");        
        this.el.addEventListener('click', e => {
            // seleziono l'entity stampante
            var image = document.querySelector('#fater_logo')
            var video = document.querySelector('#videoprova')
            //attempting for image
            //var immagine = document.querySelector('#immagineprova1')
            if ((temperature_device > 18)) {

                image.setAttribute('scale','0.001 0.001 0.001')
                video.setAttribute('src','https://raw.githubusercontent.com/Bbbgl/ARsupport.github.io/main/ARsupport/assets/fater-images/videoprova.mp4')

                //element.removeAttribute('gltf-model');
                // prima c'era remove attribute per togliere il gltf
             //   element.setAttribute('gltf-model', "https://raw.githubusercontent.com/Bbbgl/ARsupport.github.io/main/ARsupport/assets/devices/temperature/conditioning_commands/scenesolved.glb");
                //immagine.parentNode.appendChild(immagine); //questo elimina l'oggetto --> provo a instanziare tutti gli oggetti e li rimuovo poi
                //element.setAttribute('scale', '10 10 10')
                //element.setAttribute('position', '0 0 -1')
                //document.getElementById("myInstruction").innerHTML = "Hold the button";
            }



        })
    }
});



