AFRAME.registerComponent('sensor2', {
  init: function () {
    this.el.addEventListener('markerFound', () => {
// resetto le impostazioni iniziali, immagine invisibile e modello 3d iniziale
      // var immagine = document.querySelector('#immagineprova2')
      // immagine.setAttribute('scale', '0.002 0.002 0.002')
      var element = document.querySelector('#entity2')
      element.setAttribute('gltf-model',"https://raw.githubusercontent.com/Bbbgl/ARsupport.github.io/main/ARsupport/assets/devices/pressure/scene.gltf")


      fetch("https://kdmg.dii.univpm.it/iot/mobile/ar/example/query.php?sid=2")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          id_device = data.sid;
          type_device = data.type;
          name_device = data.name;
          room_device = data.room;
          time_device = data.timestamp;
          measure_device = data.measure;
          uom_device = data.uom;
          pressure_device = data.value;
          console.log(pressure_device)
          // message_device="assente"


          document.getElementById("myDevice").innerHTML = id_device;
          document.getElementById("myType").innerHTML = type_device;
          document.getElementById("myName").innerHTML = name_device;
          document.getElementById("myRoom").innerHTML = room_device;
          document.getElementById("myTime").innerHTML = time_device;
          document.getElementById("myMeasure").innerHTML = measure_device;
          document.getElementById("myMeasure2").innerHTML = uom_device;
          document.getElementById("myMeasure3").innerHTML = pressure_device;
          //document.getElementById("myDevicesA").innerHTML = devices;

        });

      document.getElementById("measure").innerHTML = "measure";
      document.getElementById("measure2").innerHTML = "uom";
      document.getElementById("measure3").innerHTML = "pressure";
      document.getElementById("InkLevel").innerHTML = "";
      document.getElementById("myInkLevel").innerHTML = "";
    })

    /* AFRAME.registerComponent('clicker2', {
      init: function() { 
  
          //const el = document.getElementById("marker1");        
          this.el.addEventListener('click', e => {
            var element = document.querySelector('#entity2')
            var immagine = document.querySelector('#immagineprova2')
            // è necessario inizializzare un valore sennò non funziona il primo clicker
            if (pressure_device > 1010){
              element.removeAttribute('gltf-model');
              //immagine.parentNode.appendChild(immagine); //questo elimina l'oggetto --> provo a instanziare tutti gli oggetti e li rimuovo poi
              immagine.setAttribute('scale', '2 2 2')          
            }     
             
          
  
      })
    }
  }); */

    this.el.addEventListener('markerLost', () => {

      var element = document.querySelector('#entity2')
      // var immagine = document.querySelector('#immagineprova2')

        // 3D model start again
        element.setAttribute('gltf-model',"https://raw.githubusercontent.com/Bbbgl/ARsupport.github.io/main/ARsupport/assets/devices/pressure/scene.gltf")
        element.setAttribute('scale' , '1 1 1')
        // immagine.setAttribute('scale', '0.002 0.002 0.002')
      

      // id_device = 0;
      // type_device = 0;
      // name_device = 0;
      // room_device = 0;
      // time_device = 0;
      // measure_device = 0;
      // uom_device = 0;
      // pressure_device = 0;
      document.getElementById("myDevice").innerHTML = "N/A";
      document.getElementById("myType").innerHTML = "N/A";
      document.getElementById("myName").innerHTML = "N/A";
      document.getElementById("myRoom").innerHTML = "N/A";
      document.getElementById("myTime").innerHTML = "N/A";
      document.getElementById("myMeasure").innerHTML = "N/A";
      document.getElementById("myMeasure2").innerHTML = "N/A";
      document.getElementById("myMeasure3").innerHTML = "N/A";

    })
  }
});
