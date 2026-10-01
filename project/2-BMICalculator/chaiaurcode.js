

const button = document.querySelector('button');

button.addEventListener('click', (e)=>{
    e.preventDefault()
    getHeightandWeght()

})


function getHeightandWeght(){
    var height = Number(document.getElementById('height').value)
    var weight = Number(document.getElementById('weight').value)
    console.log(typeof(height))
    console.log(weight)


    let bmi = (weight) / ( (height / 100) );
console.log(bmi)
    

    var result = document.getElementById('results')
// console.log(result)
    result.innerHTML = Math.floor(bmi)
    
}