function check1(){
    let phyTotal = Number(document.getElementById("phy1").value);
    let phyObtained = Number(document.getElementById("phy2").value);
    let physicsNumberOfPercentage =  (phyObtained / phyTotal) * 100;
    document.getElementById("phytotal").innerText = phyTotal;
    document.getElementById("phyobtained").innerText = phyObtained;
    document.getElementById("Phyper").innerText = physicsNumberOfPercentage + "%";
   if (physicsNumberOfPercentage>=33){
    document.getElementById("Physicsgrade").innerText = "PASS"
   }
   else{
    document.getElementById("Physicsgrade").innerText = "FAIL"
   }
    let chemTotal = Number(document.getElementById("chem1").value);
    let chemObtained = Number(document.getElementById("chem2").value);
    let chemistryNumberOfPercentage =  (chemObtained / chemTotal) * 100;
    document.getElementById("chytotal").innerText = chemTotal;
    document.getElementById("chyobtain").innerText = chemObtained;
    document.getElementById("chemper").innerText = chemistryNumberOfPercentage + "%";
   if (chemistryNumberOfPercentage>=33){
    document.getElementById("chemgrade").innerText = "PASS"
   }
   else{
    document.getElementById("chemgrade").innerText = "FAIL"
   }
    let mathTotal = Number(document.getElementById("math1").value);
    let mathObtained = Number(document.getElementById("math2").value);
    let mathNumberOfPercentage =  (mathObtained / mathTotal) * 100;
    document.getElementById("mattotal").innerText = mathTotal;
    document.getElementById("matobtained").innerText = mathObtained;
    document.getElementById("mathper").innerText = mathNumberOfPercentage + "%";
   if (mathNumberOfPercentage>=33){
    document.getElementById("mathgrade").innerText = "PASS"
   }
   else{
    document.getElementById("mathgrade").innerText = "FAIL"
   }
   let totalNumberOfAllSubject = phyTotal + chemTotal + mathTotal;
   let obtainedNumberOfAllSubject = phyObtained + chemObtained + mathObtained;
   let totalPercentageOfAllSubject =  (obtainedNumberOfAllSubject / totalNumberOfAllSubject) * 100;
   document.getElementById("totalallmark").innerText =  totalNumberOfAllSubject;
   document.getElementById("totalallsecured").innerText = obtainedNumberOfAllSubject;
   document.getElementById("totalallpercentage").innerText = totalPercentageOfAllSubject + "%";
   if(totalPercentageOfAllSubject>=80){
        document.getElementById("totalgrade").innerText = "A+";
}
   else if (totalPercentageOfAllSubject>=70){
        document.getElementById("totalgrade").innerText = "A";
}
  else  if (totalPercentageOfAllSubject>=60){
        document.getElementById("totalgrade").innerText = "B"
}
  else  if (totalPercentageOfAllSubject>=50){
        document.getElementById("totalgrade").innerText = "C"
}
  else  if (totalPercentageOfAllSubject>=40){
        document.getElementById("totalgrade").innerText = "D"
}
  else  if (totalPercentageOfAllSubject>=33){
        document.getElementById("totalgrade").innerText = "E"
}
  else{
        document.getElementById("totalgrade").innerText = "FAIL"
}
}



