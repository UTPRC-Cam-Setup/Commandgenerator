
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
   chunk1 = sessionStorage.getItem("camera*");
   chunk2 = sessionStorage.getItem("camera**")
   chunk3 = sessionStorage.getItem("camera***")
   chunk4 = sessionStorage.getItem("camera****")
   chunk5 = sessionStorage.getItem("camera*****")
   chunk6 = sessionStorage.getItem("camera******")
   chunk7 = sessionStorage.getItem("camera*******")
   chunk8 = sessionStorage.getItem("camera********")
   chunk9 = sessionStorage.getItem("camera*********")
   chunk10 = sessionStorage.getItem("camera*********")
 let chunks = ([chunk1,chunk2,chunk3,chunk4,chunk5,chunk6,chunk7,chunk8,chunk9,chunk10])
  var chunksspliced = chunks.slice(0,document.getElementById("numberofchunks").value) 
    document.getElementById("output").value = ":fly | " + ((chunksspliced.toString()).replaceAll(",:",":")) + " :res"
console.log(((chunksspliced.toString()).replaceAll(",:",":")))
    
   
}
