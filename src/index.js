
//console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', fetchData)
document.addEventListener('DOMContentLoaded', fetchData2)

function fetchData () {
fetch('https://dog.ceo/api/breeds/image/random/4')
.then(response => response.json())
.then(function dataLoop(data) {
    let links = data.message
    links.forEach(image => postImage(image))
})


    function postImage(image) {
        let paragraph = document.createElement('p')
        paragraph.innerHTML = `<img src="${image}">`
        let container = document.getElementById('dog-image-container')
        container.append(paragraph)
}
}

function fetchData2 () {
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(resp => resp.json())
    .then(function data2Loop(data2){
        let breedObj = data2.message
        
        document.getElementById('breed-dropdown').addEventListener('change', function(e){
            let dropdownValue = e.target.value

            function loopThroughObj(obj) {
            if(dropdownValue === 'a') {
                for(let key in obj){
                    if (key[0] === 'a') {
                    let list = document.createElement('li')
                    list.className = 'breed-names-a'
                
                    list.textContent = key

                    let container2 = document.getElementById('dog-breeds')
                    container2.append(list)

                    let removeList = document.getElementsByClassName('breed-names-b')
                    let removeList2 = [...removeList]
                    removeList2.forEach(function(item2){
                        item2.hidden = true
                    })
                    let removeList3 = document.getElementsByClassName('breed-names-c')
                    let removeList4 = [...removeList3]
                    removeList4.forEach(function(item4){
                        item4.hidden = true
                    })
                    let removeList5 = document.getElementsByClassName('breed-names-d')
                    let removeList6 = [...removeList5]
                    removeList6.forEach(function(item6){
                        item6.hidden = true
                    })
                }
            }
            } else if (dropdownValue === 'b') {
                for(let key in obj){
                    if (key[0] === 'b') {
                    let list = document.createElement('li')
                    list.className = 'breed-names-b'
                    
                    list.textContent = key
    
                    let container2 = document.getElementById('dog-breeds')
                    container2.append(list)

                    let removeList = document.getElementsByClassName('breed-names-a')
                    let removeList2 = [...removeList]
                    removeList2.forEach(function(item2){
                        item2.hidden = true
                    })
                    let removeList3 = document.getElementsByClassName('breed-names-c')
                    let removeList4 = [...removeList3]
                    removeList4.forEach(function(item4){
                        item4.hidden = true
                    })
                    let removeList5 = document.getElementsByClassName('breed-names-d')
                    let removeList6 = [...removeList5]
                    removeList6.forEach(function(item6){
                        item6.hidden = true
                    })
                }
            }
            } else if (dropdownValue === 'c') {
                for(let key in obj){
                    if (key[0] === 'c') {
                    let list = document.createElement('li')
                    list.className = 'breed-names-c'
                
                    list.textContent = key

                    let container2 = document.getElementById('dog-breeds')
                    container2.append(list)

                    let removeList = document.getElementsByClassName('breed-names-a')
                    let removeList2 = [...removeList]
                    removeList2.forEach(function(item2){
                        item2.hidden = true
                    })
                    let removeList3 = document.getElementsByClassName('breed-names-b')
                    let removeList4 = [...removeList3]
                    removeList4.forEach(function(item4){
                        item4.hidden = true
                    })
                    let removeList5 = document.getElementsByClassName('breed-names-d')
                    let removeList6 = [...removeList5]
                    removeList6.forEach(function(item6){
                        item6.hidden = true
                    })
                }
            }
            } else if (dropdownValue === 'd') {
                for(let key in obj){
                    if (key[0] === 'd') {
                    let list = document.createElement('li')
                    list.className = 'breed-names-d'
                
                    list.textContent = key

                    let container2 = document.getElementById('dog-breeds')
                    container2.append(list)

                    let removeList = document.getElementsByClassName('breed-names-a')
                    let removeList2 = [...removeList]
                    removeList2.forEach(function(item2){
                        item2.hidden = true
                    })
                    let removeList3 = document.getElementsByClassName('breed-names-b')
                    let removeList4 = [...removeList3]
                    removeList4.forEach(function(item4){
                        item4.hidden = true
                    })
                    let removeList5 = document.getElementsByClassName('breed-names-c')
                    let removeList6 = [...removeList5]
                    removeList6.forEach(function(item6){
                        item6.hidden = true
                    })
                }
            }
        }    
    }
            loopThroughObj(breedObj)

            let listElements = document.getElementsByClassName('breed-names-a')
            let listElements2 = [...listElements]
            listElements2.forEach(function(element) {
                element.addEventListener('click', function (){
                    element.style.color = 'blue'
            })
            })
            let listElements3 = document.getElementsByClassName('breed-names-b')
            let listElements4 = [...listElements3]
            listElements4.forEach(function(element) {
                element.addEventListener('click', function (){
                    element.style.color = 'blue'
            })
            })
            let listElements5 = document.getElementsByClassName('breed-names-c')
            let listElements6 = [...listElements5]
            listElements6.forEach(function(element) {
                element.addEventListener('click', function (){
                    element.style.color = 'blue'
            })
            })
            let listElements7 = document.getElementsByClassName('breed-names-d')
            let listElements8 = [...listElements7]
            listElements8.forEach(function(element) {
                element.addEventListener('click', function (){
                    element.style.color = 'blue'
            })
            })
    })
})
}
