
 AFRAME.registerComponent("clicker", {
    init: function () {
        var element = document.querySelector('#disk')

        const btn = document.querySelector("#button")
        btn.addEventListener("click", e => {
            if(code_device=="A"){
                // ci metterò un innerHTML per un bottone 
                document.getElementById("myInstruction").innerHTML = "Insert that disk as shown";
                element.setAttribute("gltf-model","https://raw.githubusercontent.com/Bbbgl/ARsupport.github.io/main/ARsupport/assets/devices/disk1/plate_red.glb")
                element.setAttribute("scale","243 243 243")
            }

            if(code_device=="B"){
                            // ci metterò un innerHTML per un bottone 
                             document.getElementById("myInstruction").innerHTML = "Insert that disk as shown";
                             element.setAttribute("gltf-model","https://raw.githubusercontent.com/Bbbgl/ARsupport.github.io/main/ARsupport/assets/devices/disk1/plate_yellow.glb")
                            element.setAttribute("scale","243 243 243")
                     }

            
        })
    }
})




