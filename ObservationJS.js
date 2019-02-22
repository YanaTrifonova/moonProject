// window.onload = function() {
//     var dragItem = document.getElementById("apollo");
//     var dropLoc = document.getElementById("moon");
//     dragItem.ondragstart = function (evt) {
//         evt.dataTransfer.setData('key', evt.target.id);
//     };
//
//     dropLoc.ondragover = function (evt) {
//         evt.preventDefault();
//     };
//
//     dropLoc.ondrop = function (evt) {
//         var dropItem = evt.dataTransfer.getData('key');
//         evt.preventDefault();
//         var myElement = document.getElementById(dropItem);
//         var myNewElement = document.createElement('img');
//         myNewElement.src = myElement.src;
//         dropLoc.appendChild(myNewElement);
//     }
//
// }

window.onload = function () {
    let currentDroppable = null;

    apollo.onmousedown = function (event) {

        let shiftX = event.clientX - apollo.getBoundingClientRect().left;
        let shiftY = event.clientY - apollo.getBoundingClientRect().top;

        apollo.style.position = 'absolute';
        apollo.style.zIndex = 1000;
        document.body.append(apollo);

        moveAt(event.pageX, event.pageY);

        function moveAt(pageX, pageY) {
            apollo.style.left = pageX - shiftX + 'px';
            apollo.style.top = pageY - shiftY + 'px';
        }

        function onMouseMove(event) {
            moveAt(event.pageX, event.pageY);

            apollo.hidden = true;
            let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
            apollo.hidden = false;

            if (!elemBelow) return;

            let droppableBelow = elemBelow.closest('.sizeMoon');
            if (currentDroppable !== droppableBelow) {
                if (currentDroppable) { // null when we were not over a droppable before this event
                    leaveDroppable(currentDroppable);
                }
                currentDroppable = droppableBelow;
                if (currentDroppable) { // null if we're not coming over a droppable now
                    // (maybe just left the droppable)
                    enterDroppable(currentDroppable);
                }
            }
        }

        document.addEventListener('mousemove', onMouseMove);

        apollo.onmouseup = function () {
            document.removeEventListener('mousemove', onMouseMove);
            apollo.onmouseup = null;
        };

    };
    var secretHint = document.getElementById("hint");

    function enterDroppable(elem) {
        // elem.style.background = 'pink';

        secretHint.style.display = "block";
    }

    function leaveDroppable(elem) {
        secretHint.style.display = "none";
    }

    apollo.ondragstart = function () {
        return false;
    };


}
