AFRAME.registerComponent('sensor3', {
    init: function () {
      this.el.addEventListener('markerFound', () => {

         

   

        // resetto le impostazioni iniziali, immagine invisibile e modello 3d iniziale
      // var immagine = document.querySelector('#immagineprova3')
      // immagine.setAttribute('scale', '0.002 0.002 0.002')
      // var element = document.querySelector('#entity3')
      // element.setAttribute('gltf-model',"https://raw.githubusercontent.com/nicolocarpignoli/location-based-ar-tutorial/master/static-places/assets/articuno/scene.gltf")
// devi mettere la stampante su github e copiare il link per incollarlo qui sopra

  
        fetch("https://kdmg.dii.univpm.it/iot/mobile/ar/example/query.php?sid=3")
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            id_device= data.sid;
            //console.log(data.sid);
            type_device= data.type;
            name_device= data.name;
            room_device= data.room;
            time_device= data.timestamp;
            status_device= data.status;
            queue_device= data.queue;
            message_device= data.message;
            ink_level_device= data.ink_level;    
            console.log(message_device)
            
            document.getElementById("myDevice").innerHTML = id_device;
            document.getElementById("myType").innerHTML = type_device;          
            document.getElementById("myName").innerHTML = name_device;
            document.getElementById("myRoom").innerHTML = room_device;
            document.getElementById("myTime").innerHTML = time_device;
            document.getElementById("myMeasure").innerHTML = status_device;
            document.getElementById("myMeasure2").innerHTML = queue_device;
            document.getElementById("myMeasure3").innerHTML = message_device;
            document.getElementById("myInkLevel").innerHTML = ink_level_device;

            //document.getElementById("myDevicesA").innerHTML = devices;
  
          });

          document.getElementById("measure").innerHTML = "status";
          document.getElementById("measure2").innerHTML = "queue";
          document.getElementById("measure3").innerHTML = "message";
          document.getElementById("InkLevel").innerHTML = "ink level";



  
    
       
      })

      
       /* AFRAME.registerComponent('clicker3', {
    init: function() { 

        //const el = document.getElementById("marker1");        
        this.el.addEventListener('click', e => {
          var element = document.querySelector('#entity3')
          var immagine = document.querySelector('#immagineprova3')
          
          if (ink_level_device > 100){
            element.removeAttribute('gltf-model');
            //immagine.parentNode.appendChild(immagine); //questo elimina l'oggetto --> provo a instanziare tutti gli oggetti e li rimuovo poi
            immagine.setAttribute('scale', '2 2 2')          
          }     
           
        

    })
  }
}); */

this.el.addEventListener('markerLost', () => {

        var element = document.querySelector('#entity3')
        element.setAttribute('animation-mixer',"clip:Static Pose") //resetto con l'animazione iniziale
        //var immagine = document.querySelector('#immagineprova2')
  
          // resetto il modello 3d iniziale
          //element.setAttribute('gltf-model',"https://raw.githubusercontent.com/Bbbgl/ARsupport.github.io/main/ARsupport/assets/devices/print/annotated_print/scene.gltf")
         // immagine.setAttribute('scale', '0.002 0.002 0.002')
        
  
        // id_device = 0;
        // type_device = 0;
        // name_device = 0;
        // room_device = 0;
        // time_device = 0;
        // measure_device = 0;
        // uom_device = 0;
        // value_device = 0;
        document.getElementById("myDevice").innerHTML = "N/A";
        document.getElementById("myType").innerHTML = "N/A";
        document.getElementById("myName").innerHTML = "N/A";
        document.getElementById("myRoom").innerHTML = "N/A";
        document.getElementById("myTime").innerHTML = "N/A";
        document.getElementById("myMeasure").innerHTML = "N/A";
        document.getElementById("myMeasure2").innerHTML = "N/A";
        document.getElementById("myMeasure3").innerHTML = "N/A";
        document.getElementById("myInkLevel").innerHTML = "N/A";

      })
  
  
    }
  });

 