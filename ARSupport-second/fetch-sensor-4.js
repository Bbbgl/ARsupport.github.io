AFRAME.registerComponent('sensor', {
  init: function () {
    this.el.addEventListener('markerFound', () => {

       

 

     

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
         
          document.getElementById("myTime").innerHTML = time_device;
          document.getElementById("myMeasure").innerHTML = code_device;
          
          //document.getElementById("myDevicesA").innerHTML = devices;

        });

        




  
     
    })

    
   

this.el.addEventListener('markerLost', () => {

      var element = document.querySelector('#disk')
      
      element.setAttribute("gltf-model","https://raw.githubusercontent.com/Bbbgl/ARsupport.github.io/main/ARsupport/assets/devices/disk1/plate_white.glb")
  element.setAttribute("scale","244 244 244")
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
     
      document.getElementById("myTime").innerHTML = "N/A";
      document.getElementById("myMeasure").innerHTML = "N/A";
      document.getElementById("myInstruction").innerHTML = "N/A"


    })


  }
});



 
