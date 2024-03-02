// events run in sequence, js is sequencially run language
// invoke on activity.
// don't write .onClick="/*code*/" events in html, when project scale problems occur
// eventListeners give ablitiy of propogation

//attachEvent()
//jQuery - on

document.getElementById('').addEventListener('click', function(e){
// e(event) is object (get events, property)
// -> event - browser and environment
// -> view(event) (jaha click kra us time per width height kya thi)
// -> timeStamp(event) kya time pr click hua
// * more events 
// -> type, defaultPrevented
// -> target
// -> toElement, srcElement, currentTarget
// -> clientX, clientY
// -> altkey, ctrlKey, shiftKey, keyCode



},false)// sometimes can't done without false
// true krdo ya false new difference
/* event(propogation) false, true -> 
    -> two context 1) event bubbling

                   2) event capturing - 

*/

// 1) event bubbling
/*  ->mostly used, ( false )
    -> bubbling up bottom to top
    -> bottom element to top
    -> (img first show then div)
*/
 
document.getElementById('images').addEventListener('click', function(e){
    console.log("clicked inside the ul")
}, false) // default value is also false we can remove it also

document.getElementById('owl').addEventListener('click', function(e){
    console.log("owl clicked")
    e.stopPropagation();
    // event will bubble and don't go to the top element
}, false)


// 2) event capturing
/*  ( true ) 3rd parameter
    -> capturing mode top to bottom
    -> top element to bottom
    -> (div first show then img)
*/
 
document.getElementById('images').addEventListener('click', function(e){
console.log("clicked inside the ul")
}, true);

document.getElementById('owl').addEventListener('click', function(e){
console.log("owl clicked")
}, true);

// depends upon the use case which is important at a time

document.getElementById('google').addEventListener('click', function(e){
    console.log("google clicked")
    e.preventDefault() // prevent the default activity
    e.stopPropagation();
}) 

// e.target.parentNode - select the parent of the element
/* 
    example => what to remove the list item in which there is a img
    so target is img that is why we are using .parentNode
*/
// e.target.tagName - select the tagName

document.querySelector('#images').addEventListener('click', function(e){
    console.log(e.target.parentNode); // 
    /* but selecting the li will remove the li not with image 
        then use tagName */

    if(e.target.tagName === 'IMG'){
        let removeIt = e.target.parentNode 
    }
    //       or
    // removeIt.parentNode.removeChild(removeIt)
})