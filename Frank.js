
class camera {
    constructor(cameraname,x,y,z){
        this.x = x;
        this.y = y;
        this.z = z;
        this.cameraname = cameraname; 
    }
    result() {
         return ":to "+ this.x + "," + this.y + "," + this.z + " | :camera " + this.cameraname + " | "
    }
}
sessionStorage.clear()
var cameraname = "*"
sessionStorage.setItem("cameraname",cameraname)
function createcamera() {
cameraname = sessionStorage.getItem("cameraname")
 var workingcam = new camera(document.getElementById("camera").value,document.getElementById("X").value,document.getElementById("Y").value,document.getElementById("Z").value)
sessionStorage.setItem("camera"+ sessionStorage.getItem("cameraname"), workingcam.result())
sessionStorage.setItem("cameraname", cameraname+"*")
}
function createcommand() {
  let chunks = new Array()
   for (let i = 1; i < sessionStorage.length;i++) {
   chunks.push(sessionStorage.getItem("camera" + sessionStorage.getItem("cameraname").slice(i)))
   }
   document.getElementById("output").value = ":fly | " + chunks.toString().replaceAll(" ,"," ") + ":res"

    
   
}
