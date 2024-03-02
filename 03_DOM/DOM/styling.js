// innerText -> plain text, style applied, no tag visible
let h1 = document.querySelector('h1').innerText

// innerHTML -> html tags and whole text visible.
let h12 = document.querySelector('h1').innerHTML

// textContent -> plain text, no style applied.
let h13 = document.querySelector('h1').textContent
// console.log(h1)
// console.log(h12)
// console.log(h13)

// we can use forEach on nodeList also 

Array.from(/* nodeLIst */) // we can convert any list to Array 
                          // then apply all array method.

// const parent = document.querySelector('.parent')
//     console.log(parent)
//     console.log(parent.children); // htmlcollection
//     console.log(parent.children[1]);
//     console.log(parent.parentElement)
//     console.log(parent.nextElementSibling)
//     console.log(parent.childNodes) // nodelist

// create Element

const div = document.createElement('div');
// div.className = "main"
// div.id = Math.floor(Math.random() * 10 + 1)
// div.setAttribute("title", "xyz");

// div.innerHTML = "chai aur code" // one way of adding text
// but it overrides the previous value 

// preferable->
// directly creating the text node no need to bring the prev value 
const addText = document.createTextNode("chai aur code")

div.appendChild(addText);

// creating li 
// insert text
// not preferable ->
                    li.innerHTML = `${text}`

// preferable ->
                li.appendChild(document.createTextNode(`text`))
// use in function

// Edit
const secondLang = document.querySelector("li:nth-child(2)")
// secondLang.innerHTML = "Mojo"
const newli = document.createElement(li)
newli.textContent

secondLang.replaceWith(newli)// replace the element 

newli.outerHTML = '<li>TypeScript</li>'

newli.remove()



