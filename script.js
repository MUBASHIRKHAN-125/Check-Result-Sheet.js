function check1(){
    let phy1 = Number(document.getElementById("phy1").value);
    let phy2 = Number(document.getElementById("phy2").value);
    document.getElementById("phytotal").innerText = phy1;
    document.getElementById("phyobtain").innerText = phy2;
    document.getElementById("per1").innerText = (phy2/phy1)* 100;
    let chem1 = Number(document.getElementById("chem1").value);
    let chem2 = Number(document.getElementById("chem2").value);
      document.getElementById("chytotal").innerText = chem1;
    document.getElementById("chyobtain").innerText = chem2;
    document.getElementById("per2").innerText = (chem2/chem1)* 100;
    let math1 = Number(document.getElementById("math1").value);
    let math2 = Number(document.getElementById("math2").value);
      document.getElementById("mattotal").innerText = math1;
    document.getElementById("matobtain").innerText = math2;
    document.getElementById("per3").innerText = (math2/math1)* 100;
    document.getElementById("totalmark").innerText = phy1 + chem1 + math1;
    document.getElementById("totalsecured").innerText = phy2 + chem2 + math2;
    document.getElementById("totalpercentage").innerText = (phy2 + chem2 + math2) / (phy1 + chem1 + math1) * 100;
    }
    let percentage = 80;
if(percentage>=80){
    document.getElementById("totalgrade").innerText = "A+"
}
else if(percentage>=70){
   document.getElementById("totalgrade").innerText = "B"
}
else if(percentage>=60){
    document.getElementById("totalgrade").innerText = "C"
}


