// let search = document.getElementById("search1")
// let counteryInformation = document.getElementById("counteryInformation")


// function getandappend(data){
//     for (let i of data){
        
//         let dataInfoContainer = document.createElement("div")
//         dataInfoContainer.classList.add("m-3","bg-dark","d-flex","justify-content-between","f-row","p-3")
//         counteryInformation.appendChild(dataInfoContainer)
        

//         let flegcontainer = document.createElement("div")
//         flegcontainer.classList.add("flegcontainer")
//         dataInfoContainer.appendChild(flegcontainer)

//         let flagimg = document.createElement("img")
//         flagimg.style.height = "50px"
//         flagimg.src = i.flag
//         flegcontainer.appendChild(flagimg)

//         let populationcontainer = document.createElement("div")
//         populationcontainer.style.padding = "10px"
//         dataInfoContainer.appendChild(populationcontainer)

//         let counteryname = document.createElement("h1")
//         counteryname.textContent = i.name 
//         counteryname.style.fontSize = "20px"
//         counteryname.style.color ="#FFFF"
//         counteryname.style.fontWeight = "bold"

//         populationcontainer.appendChild(counteryname)

//         let population = document.createElement("p")
//         population.textContent = i.population
//         population.style.fontSize = "20px"
//        population.style.color ="#FFFF"
//         population.style.fontWeight = "bold"
//         populationcontainer.appendChild(population)



        
        

//     }
//     alert("function hello")
// }





// search.addEventListener("keydown",function(event){
//     if (event.key === "Enter"){
//         let searchvalue = search.value 
//         let finalsearchValue = searchvalue[0].toUpperCase()+searchvalue.sclice(1)
//         console.log(finalsearchValue)
//         alert("Enter")

//         let url = "https://apis.ccbp.in/countries-data"
//         fetch(url)
//         .then(function(response){
//             return response.json()
//         })
//         .then(function(data){
//             // for (let i of data){
                
        
//             //     let dataInfoContainer = document.createElement("div")
//             //     dataInfoContainer.classList.add("m-3","bg-dark","d-flex","justify-content-between","f-row","p-3")
//             //     counteryInformation.appendChild(dataInfoContainer)
                
        
//             //     let flegcontainer = document.createElement("div")
//             //     flegcontainer.classList.add("flegcontainer")
//             //     dataInfoContainer.appendChild(flegcontainer)
        
//             //     let flagimg = document.createElement("img")
//             //     flagimg.style.height = "50px"
//             //     flagimg.src = i.flag
//             //     flegcontainer.appendChild(flagimg)
        
//             //     let populationcontainer = document.createElement("div")
//             //     populationcontainer.style.padding = "10px"
//             //     dataInfoContainer.appendChild(populationcontainer)
        
//             //     let counteryname = document.createElement("h1")
//             //     counteryname.textContent = i.name 
//             //     counteryname.style.fontSize = "20px"
//             //     counteryname.style.color ="#FFFF"
//             //     counteryname.style.fontWeight = "bold"
        
//             //     populationcontainer.appendChild(counteryname)
        
//             //     let population = document.createElement("p")
//             //     population.textContent = i.population
//             //     population.style.fontSize = "20px"
//             //    population.style.color ="#FFFF"
//             //     population.style.fontWeight = "bold"
//             //     populationcontainer.appendChild(population)
        
        
        
                
                
        
//             // }
//             getandappend(data)
//         })
       
//     }
// })
// getandappend(data)
// alert("hello")

