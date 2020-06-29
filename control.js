document.getElementById("validation").addEventListener("submit", function(e){
 //   alert('envoi');
e.preventDefault();
console.log("validation");
var Nom= document.getElementById("Nom");
var Nom_manquant= document.getElementById("Nom_manquant");
//alert(Nom);
var Prenom= document.getElementById("Prenom");
var CNI= document.getElementById("CNI");
var Adresse= document.getElementById("Adresse");
var Email= document.getElementById("Email");
var Profession= document.getElementById("Profession");
var Telephone= document.getElementById("Telephone");
var Nom_employeur= document.getElementById("Nom_employeur");
var Adresse_employeur= document.getElementById("Adresse_employeur");
//var Nom= document.getElementById("Nom").value;
//var Nom= document.getElementById("Nom").value;



if(Nom.value==""){
    document.getElementById("Nom").style.backgroundColor="red";
    Nom_manquant.textContent="le nom est obligatoire";
    Nom_manquant.style.color="red";
    
    return false;
}
if(Prenom.value==""){
    alert(' remplir ce champs!');
    document.getElementById("Prenom").style.backgroundColor="red";
    return false;
}
if(CNI.value==""){
    alert(' remplir ce champs!');
    document.getElementById("CNI").style.backgroundColor="red";
    return false;
}
if(Adresse.value==""){
    alert('remplir ce champs!');
    document.getElementById("Adresse").style.backgroundColor="red";
    return false;
}
if(Email.value==""){
    alert('remplir ce champs');
    document.getElementById("Email").style.backgroundColor="red";
    return false;
}
if(Profession.value==""){
    alert('remplir ce champs');
    document.getElementById("Profession").style.backgroundColor="red";
    return false;
}
if(Telephone.value==""){
    alert(' remplir ce champs');
    document.getElementById("Telephone").style.backgroundColor="red";
    return false;
}
if(Nom_employeur.value==""){
    alert('remplir ce champs');
    document.getElementById("Nom_employeur").style.backgroundColor="red";
    return false;
}
if(Adresse_employeur.value==""){
    alert('remplir ce champs');
    document.getElementById("Adresse_employeur").style.backgroundColor="red";
    return false;
}
else('formilaire envoyé!')
});

function abdou(e){
    document.getElementById("ouve").style.display="none";
    document.getElementById("info").style.display="none";
    document.getElementById("compte").style.display="none";
    document.getElementById("types").style.display="none";
}
var client_salarie= document.getElementById("salarie")
client_salarie.addEventListener("click",(event)=>{
    event.preventDefault()
    document.getElementById("ouve").style.display="block";
});
    var client_non_salarie= document.getElementById("non_salarie")
    client_non_salarie.addEventListener("click",(event)=>{
        event.preventDefault()
        document.getElementById("ouve").style.display="block";
    
});
var client_moral= document.getElementById("moral")
client_moral.addEventListener("click",(event)=>{
    event.preventDefault()
    document.getElementById("ouve").style.display="block";
});
var nouveau= document.getElementById("Nouveau");
nouveau.addEventListener('click',emma);
function emma(e){
e.preventDefault(); 
document.getElementById("info").style.display="";
}
var client_moral= document.getElementById("moral")
client_moral.addEventListener("click",(event)=>{
    event.preventDefault()
    document.getElementById("ouve").style.display="block";
});
var valider= document.getElementById("valider");
valider.addEventListener('click',afficher);
function afficher(e){
e.preventDefault(); 
document.getElementById("compte").style.display="";
}
const selectElement= document.getElementById("type de comptes");
selectElement.addEventListener('change',event=>{
    event.preventDefault();
    document.getElementById("compte").style.display=""; 
});
var existant= document.getElementById("existan");
existant.addEventListener('click',ouvrir);
function ouvrir(e){
e.preventDefault(); 
document.getElementById("ouve").style.display="none";
}
//var valider= document.getElementById("valider");
//valider.addEventListener('change',afficher);
//function afficher(e){
//e.preventDefault(); 
//document.getElementById("compte").style.display=""