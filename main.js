//comece aqui
nomedosestudantesArray=[];
function submit(){
   var displayEstudanteArray=[];
   for(var j=1; j<= 4;j++){
       var NomedoEstudante = document.getElementById("nameOfTheStudent"+j).value;
       nomedosestudantesArray.push(NomedoEstudante);
   }
   var lengthofStudentArray=nomedosestudantesArray.length;
   for(var x=0;x<lengthofStudentArray;x++){
       displayEstudanteArray.push("<h4>NAME- "+nomedosestudantesArray[x]+"</h4>");
   }
   document.getElementById("displayNameWithCommas").innerHTML=displayEstudanteArray;
   var removeCommas=displayEstudanteArray.join(" ");
   document.getElementById("displayNameWithoutCommas").innerHTML=removeCommas;
   document.getElementById("submitButton").style.display="none";
   document.getElementById("sortButton").style.display="inline-block";
}
function sorting(){
    nomedosestudantesArray.sort();
    var displayestudantesSort=[];
    var lengthofStudentArray=nomedosestudantesArray.length;
   for(var x=0;x<lengthofStudentArray;x++){
       displayestudantesSort.push("<h4>NAME- "+nomedosestudantesArray[x]+"</h4>");
   }
   var removeCommas=displayestudantesSort.join(" ");
   document.getElementById("displayNameWithoutCommas").innerHTML=removeCommas;

}