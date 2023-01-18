// Remember to import the data and Dog class!
import dogs from './data.js'

const mainDiv = document.getElementById('mainDiv')
const nopeBtn = document.getElementById('cross')
const likeBtn = document.getElementById('heart')


function Dog(data){
    Object.assign(this, data)

    this.getDogHtml = function(){
        const { name, avatar, age, bio} = this
        return `<img class="mainImg" src="${avatar}" alt="${name}">
                <div class="cap">
                    <p class="nameDog" >${name}, ${age}</p>
                    <p class="caption">${bio}</p>
                </div>`
    }

    // this.liked = function(){
    //     this.hasBeenSwiped = true
    //     this.hasBeenLiked = true
    // }

    // this.noped = function(){
    //     this.hasBeenSwiped = true
   
    // }
}


let dog = getNewDogHtml()

function getNewDogHtml(){
    const newDogData = dogs.shift()
    return newDogData ? new Dog(newDogData) : false
}

const endMessage = `<div class="end-message">
                <p>Come next time to meet more dogs! ❤️</p>
            </div>`

function render(){
        mainDiv.innerHTML = dog.getDogHtml()
}
let isWaiting = false

nopeBtn.addEventListener('click', function(){
    if(!isWaiting){
        dog = getNewDogHtml()
        document.getElementById('badge-nope').classList.remove("hidden")
        document.getElementById('mainDiv1').classList.add("slide")
        isWaiting = true
        if(dog){
            setTimeout(() => {
                render()
                document.getElementById('badge-nope').classList.add("hidden")
                isWaiting = false
            }, 1500);
        } else {
            setTimeout(() => {
                document.getElementById('badge-nope').classList.add("hidden")
                document.getElementById('mainDiv').innerHTML = endMessage    
                document.querySelector("footer").classList.add("hidden")
            }, 1500);
            
            
        }
    }
})

likeBtn.addEventListener('click', function(){
    if(!isWaiting){
        dog = getNewDogHtml()
        document.getElementById('badge-like').classList.remove("hidden")
        isWaiting = true
        if(dog){
            setTimeout(() => {
                render()
                document.getElementById('badge-like').classList.add("hidden")
                isWaiting = false
            }, 1500);
        } else {
            setTimeout(() => {
                document.getElementById('badge-like').classList.add("hidden")
                document.getElementById('mainDiv').innerHTML = endMessage
                document.querySelector("footer").classList.add("hidden")
            }, 1500);
           

        }
    }
})



    
render()


