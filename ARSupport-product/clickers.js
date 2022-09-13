
 AFRAME.registerComponent("clicker", {
    init: function () {
        var element = document.querySelector('#disk')

        const btn = document.querySelector("#button")
        btn.addEventListener("click", e => {
            if(code_device=="A"){
                // ci metterò un innerHTML per un bottone 
                document.getElementById("myInstruction").innerHTML = "Insert that disk as shown";
                element.setAttribute("gltf-model","https://raw.githubusercontent.com/Bbbgl/ARsupport.github.io/main/ARsupport/assets/devices/disk1/plate_red.glb")
                element.setAttribute("scale","3 3 3")
            }

            if(code_device=="B"){
                            // ci metterò un innerHTML per un bottone 
                             document.getElementById("myInstruction").innerHTML = "Insert that disk as shown";
                             element.setAttribute("gltf-model","https://raw.githubusercontent.com/Bbbgl/ARsupport.github.io/main/ARsupport/assets/devices/disk1/plate_yellow.glb")
                            element.setAttribute("scale","3 3 3")
                     }

            
        })
    }
})






// AFRAME.registerComponent('clicker', {
//     init: function () {

//         //const el = document.getElementById("marker1");        
//         this.el.addEventListener('click', e => {
//             var element = document.querySelector('#disk')

//             if(code_device=="A"){
//                 // ci metterò un innerHTML per un bottone 
//                 document.getElementById("myInstruction").innerHTML = "Insert that disk as shown";
//                 element.setAttribute("gltf-model","https://raw.githubusercontent.com/Bbbgl/ARsupport.github.io/main/ARsupport/assets/devices/disk1/plate_red.glb")
//                 element.setAttribute("scale","3 3 3")
//         }

//         if(code_device=="B"){
//             // ci metterò un innerHTML per un bottone 
//             document.getElementById("myInstruction").innerHTML = "Insert that disk as shown";
//             element.setAttribute("gltf-model","https://raw.githubusercontent.com/Bbbgl/ARsupport.github.io/main/ARsupport/assets/devices/disk1/blue_roll.glb")
//             element.setAttribute("scale","3 3 3")
//     }
            
            
//         })
//     }
// }); 