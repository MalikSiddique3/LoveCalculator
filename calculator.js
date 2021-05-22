
function LovePercentage(){
    
    var MN = document.getElementById("MN").value ;
    var FN = document.getElementById("FN").value ;
    var R = document.getElementById("R").value ;
    
    if(MN === "" || FN === ""){
        
        window.alert("Please enter the name of love birds");
        return;
       
       
       }
    
    //calculations;
    if(MN.charAt(0) === 's' || MN.charAt(0) === 'S' || MN.charAt(0) === 'A' || MN.charAt(0) === 'a' || MN.charAt(0) === 'c' || MN.charAt(0) === 'C' || MN.charAt(0) === 'e' || MN.charAt(0) === 'E' || MN.charAt(0) === 'g' || MN.charAt(0) === 'G')  {
       var percent = 100;
       
       }
    else if (MN.charAt(0) === 'b' || MN.charAt(0) === 'B' || MN.charAt(0) === 'd' || MN.charAt(0) === 'D' || MN.charAt(0) === 'f' || MN.charAt(0) === 'F' || MN.charAt(0) === 'h' || MN.charAt(0) === 'H' || MN.charAt(0) === 'j' || MN.charAt(0) === 'J')  {
       var percent = 89.3;
    
       }
    else if(MN.charAt(0) === 'i' || MN.charAt(0) === 'I' || MN.charAt(0) === 'k' || MN.charAt(0) === 'K' || MN.charAt(0) === 'm' || MN.charAt(0) === 'M' || MN.charAt(0) === 'o' || MN.charAt(0) === 'O' || MN.charAt(0) === 'q' || MN.charAt(0) === 'Q')  {
       var percent = 77.4;
    }
     else if(MN.charAt(0) === 'l' || MN.charAt(0) === 'L' || MN.charAt(0) === 'n' || MN.charAt(0) === 'N' || MN.charAt(0) === 'p' || MN.charAt(0) === 'P' || MN.charAt(0) === 'r' || MN.charAt(0) === 'R' || MN.charAt(0) === 't' || MN.charAt(0) === 'T')  {
       var percent = 83.9;
    }
     else if(MN.charAt(0) === 'u' || MN.charAt(0) === 'U' || MN.charAt(0) === 'w' || MN.charAt(0) === 'W' || MN.charAt(0) === 'y' || MN.charAt(0) === 'Y' || MN.charAt(0) === 'z' || MN.charAt(0) === 'Z' || MN.charAt(0) === 'v' || MN.charAt(0) === 'V')  {
       var percent = 61.7;
    }
        
        
    document.getElementById("pcent").style.display = "block";
    document.getElementById("percent").innerHTML = percent;
}




















document.getElementById("pcent").style.display = "none";
document.getElementById("calculate").onclick = function() { LovePercentage() ;};