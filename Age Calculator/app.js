

function userage(){








}




function getAgee(){


    const userage = document.getElementById("userage")
console.log(userage.value)
const now =  new Date()

var user = userage.value.slice(0,2)
var user2 = userage.value.slice(3,5)
var user3 = userage.value.slice(6)

const userBirthtime = new Date(userage.value).getTime()
console.log(userBirthtime)

const today = now.getTime()

const totalmill = today - userBirthtime


var useryear =Math.floor(totalmill / (1000 * 60 * 60 *24 *365)) 

var userMonth = Math.floor(totalmill / (1000 * 60 *60 *24 *365/12))

var userdays = Math.floor(totalmill / (1000 * 60 *60 *24 *365/(12 *30)))
console.log(useryear)
console.log(userMonth)
console.log(userdays)






    const agee = document.getElementById("agee")



agee.innerHTML = `<div class="age-calcu">
<h1 class="headd">Your Date Of Birth</h1>


<div class="age-calcu-body">
    <div class="box1">${user}</div>
    
    <div class="box1">${user2}
    </div>
    <div class="box1">${user3}</div>
</div>
<h1 class="headd">Your Age Till Today</h1>

<div class="yourage">
    <div class="box1">${useryear}</div>
    <div class="box1">${userMonth}</div>
    <div class="box1">1${userdays}</div>
</div>

</div>`


}
