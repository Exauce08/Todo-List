var addToDoButton = document.getElementById('addToDo');
var toDoContainer = document.getElementById('toDoContainer');
var inputField = document.getElementById('inputField');

addToDoButton.onclick = function(){
    // verification si l'input n'est pas vide
    if(inputField.value != ""){
        // s'il n'est pas vide  on crée un paragraphe
        var paragraph = document.createElement('p');
    }

    //valorisé ce paragraphe ave le contenu de l'input
    paragraph.innerText = inputField.value;

    // stylisé le paragraphe
    paragraph.classList.add('paragraphe_style');

    // Inserer le paragraph dans l'element toDoContainer
    toDoContainer.appendChild(paragraph);

    //vidé l'input quand le paragraphe est ajouté
    inputField.value= "";

    // barré le paragraphe quon on clique dessus
    paragraph.addEventListener('click',function(){

        paragraph.classList.add('paragraph_click');
    })

    //suprimer la tache quand on double click sur la tache
    paragraph.addEventListener('bdclick',function(){

       toDoContainer.removeChild(paragraph);
    })
}