AFRAME.registerComponent('sensor', {
  init: function () {
    this.el.addEventListener('markerFound', () => {

       

 

      // resetto le impostazioni iniziali, immagine invisibile e modello 3d iniziale
    // var immagine = document.querySelector('#immagineprova3')
    // immagine.setAttribute('scale', '0.002 0.002 0.002')
    // var element = document.querySelector('#entity3')
    // element.setAttribute('gltf-model',"https://raw.githubusercontent.com/nicolocarpignoli/location-based-ar-tutorial/master/static-places/assets/articuno/scene.gltf")
// devi mettere la stampante su github e copiare il link per incollarlo qui sopra


      fetch("https://kdmg.dii.univpm.it/iot/mobile/ar/example/query.php?sid=4")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          id_device= data.sid;
          //console.log(data.sid);
          type_device= data.type;
          name_device= data.name;
          room_device= data.room;
          time_device= data.timestamp;
          code_device=data.code;
          
          document.getElementById("myDevice").innerHTML = id_device;
          document.getElementById("myType").innerHTML = type_device;          
          document.getElementById("myName").innerHTML = name_device;
          document.getElementById("myRoom").innerHTML = room_device;
          document.getElementById("myTime").innerHTML = time_device;
          document.getElementById("myMeasure").innerHTML = code_device;
          
          //document.getElementById("myDevicesA").innerHTML = devices;

        });

        




  
     
    })

    
   

this.el.addEventListener('markerLost', () => {

      var element = document.querySelector('#disk')
      element.setAttribute("scale","4 4 4")
      element.setAttribute("gltf-model","https://raw.githubusercontent.com/Bbbgl/ARsupport.github.io/main/ARsupport/assets/devices/disk1/plate_white.glb")
      //element.setAttribute('animation-mixer',"clip:Static Pose") //resetto con l'animazione iniziale
      //var immagine = document.querySelector('#immagineprova2')

       

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
      document.getElementById("myInstruction").innerHTML = "N/A"


    })


  }
});



 
