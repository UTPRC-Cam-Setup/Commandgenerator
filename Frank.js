class camera {
    camera(cameraname,x,y,z){
       return ":fly | :to "+ x + "," + y + "," + z + " | :camera " + cameraname + " | "
    }
}
function createcommand() {
    var cameraname = document.getElementById("camera").value;
    var X = document.getElementById("X").value;
    var Y = document.getElementById("Y").value;
    var Z = document.getElementById("Z").value;
    document.getElementById("output").value = (":fly | :to "+ X + "," + Y + "," + Z + " | :camera " + cameraname + " | ")
}
