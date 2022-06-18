
 AFRAME.registerComponent("clicker", {
    init: function () {
        var element = document.querySelector('#engine')
        const btn1 = document.querySelector("#button1")
        const btn2 = document.querySelector("#button2")
        const btn3 = document.querySelector("#button3")
        const btn4 = document.querySelector("#button4")
        const btn5 = document.querySelector("#button5")
        const btn6 = document.querySelector("#button6")
 
        btn1.addEventListener("click", e => {
                            
            element.setAttribute("gltf-model","https://raw.githubusercontent.com/Bbbgl/ARsupport.github.io/main/ARsupport/assets/devices/animated_engine/crankshaft.glb")     
            element.setAttribute("scale","250 250 250") 
        })

        btn2.addEventListener("click", e => {
                            
            element.setAttribute("gltf-model","https://raw.githubusercontent.com/Bbbgl/ARsupport.github.io/main/ARsupport/assets/devices/animated_engine/piston.glb")   
            element.setAttribute("scale","150 150 150")    
        })
        btn3.addEventListener("click", e => {
                            
            element.setAttribute("gltf-model","https://raw.githubusercontent.com/Bbbgl/ARsupport.github.io/main/ARsupport/assets/devices/animated_engine/chain.glb") 
            element.setAttribute("scale","150 150 150")      
        })
        btn4.addEventListener("click", e => {
                            
            element.setAttribute("gltf-model","https://raw.githubusercontent.com/Bbbgl/ARsupport.github.io/main/ARsupport/assets/devices/animated_engine/throttleBody.glb")
            element.setAttribute("scale","1.5 1.5 1.5")       
        })
        btn5.addEventListener("click", e => {
                            
            element.setAttribute("gltf-model","https://raw.githubusercontent.com/Bbbgl/ARsupport.github.io/main/ARsupport/assets/devices/animated_engine/cylinders.glb") 
            element.setAttribute("scale","1.5 1.5 1.5")      
        })
        btn6.addEventListener("click", e => {
                            
            element.setAttribute("gltf-model","https://raw.githubusercontent.com/Bbbgl/ARsupport.github.io/main/ARsupport/assets/devices/animated_engine/scene.gltf") 
            element.setAttribute("scale","250 250 250")      
        })
    }
})
            


