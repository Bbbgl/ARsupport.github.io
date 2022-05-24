
AFRAME.registerComponent('clicker1', {
    init: function () {

        //const el = document.getElementById("marker1");        
        this.el.addEventListener('click', e => {
            var element = document.querySelector('#entity1')
            var immagine = document.querySelector('#immagineprova1')
            if (value_device > 21) {
                element.removeAttribute('gltf-model');
                //immagine.parentNode.appendChild(immagine); //questo elimina l'oggetto --> provo a instanziare tutti gli oggetti e li rimuovo poi
                immagine.setAttribute('scale', '2 2 2')
            }



        })
    }
});



AFRAME.registerComponent('clicker2', {
    init: function () {

        //const el = document.getElementById("marker1");        
        this.el.addEventListener('click', e => {
            var element = document.querySelector('#entity2')
            var immagine = document.querySelector('#immagineprova2')
            // è necessario inizializzare un valore sennò non funziona il primo clicker
            if (value_device > 1010) {
                element.removeAttribute('gltf-model');
                //immagine.parentNode.appendChild(immagine); //questo elimina l'oggetto --> provo a instanziare tutti gli oggetti e li rimuovo poi
                immagine.setAttribute('scale', '2 2 2')
            }



        })
    }
});

AFRAME.registerComponent('clicker3', {
    init: function () {

        //const el = document.getElementById("marker1");        
        this.el.addEventListener('click', e => {
            var element = document.querySelector('#entity3')
            var immagine = document.querySelector('#immagineprova3')

            if (ink_level_device > 100) {
                element.removeAttribute('gltf-model');
                //immagine.parentNode.appendChild(immagine); //questo elimina l'oggetto --> provo a instanziare tutti gli oggetti e li rimuovo poi
                immagine.setAttribute('scale', '2 2 2')
            }



        })
    }
}); 