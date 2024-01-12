var dropper;
DefineDragableBoxes();
DefineDropperBox();

function DropperDragOver(event) { event.preventDefault() }

function DropperDrop(event) {

    var boxSender = document.getElementById(event.dataTransfer.getData("text/plain"));
    dropper.innerHTML = boxSender.innerHTML;
    boxSender.innerHTML=''
    dropper.classList.remove("dropper");
    boxSender.classList.add("dropper"); 
    DefineDropperBox()
}

function DefineDragableBoxes() {
    var boxes = document.querySelectorAll(".box")
    boxes.forEach(box => {
        box.addEventListener('dragstart', (event) => {
            event.dataTransfer.setData('text/plain', box.id)
        })
    })
}

function DefineDropperBox(){
    if(dropper!=null){
        dropper.removeEventListener('drop', DropperDragOver);
        dropper.removeEventListener('drop', DropperDrop);
    }
    dropper = document.querySelector(".dropper")
    dropper.addEventListener('dragover', DropperDragOver)
    dropper.addEventListener('drop', DropperDrop)
} 