pressure_device='pressure'//senno non funziona


AFRAME.registerComponent('clicker2', {
    init: function () {

        //const el = document.getElementById("marker1");        
        this.el.addEventListener('click', e => {
            var element = document.querySelector('#entity2')
            //var immagine = document.querySelector('#immagineprova2')
            // è necessario inizializzare un valore sennò non funziona il primo clicker
            if ((pressure_device > 1000)) {

                //element.removeAttribute('gltf-model');
                // prima c'era remove attribute per togliere il gltf
                element.setAttribute('gltf-model', "https://raw.githubusercontent.com/Bbbgl/ARsupport.github.io/main/ARsupport/assets/devices/pressure/pressure_alert/scene.gltf");
                //immagine.parentNode.appendChild(immagine); //questo elimina l'oggetto --> provo a instanziare tutti gli oggetti e li rimuovo poi
                // element.setAttribute('scale', '10 10 10')
                // element.setAttribute('position', '0 0 -1')
                element.setAttribute('animation-mixer','clip:Action' )
                document.getElementById("myInstruction").innerHTML = "Hold the button";
                
                //immagine.parentNode.appendChild(immagine); //questo elimina l'oggetto --> provo a instanziare tutti gli oggetti e li rimuovo poi
                //immagine.setAttribute('scale', '2 2 2')
            }



        })
    }
});

