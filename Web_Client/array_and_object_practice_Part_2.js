/* Lab: write the code requested by lines marked //TODO
You should NOT modify any of the code that's here already. Add the code requested.   */

console.log('Lab. Please write the code requested at the //TODO markers.')

/* a. Use this JavaScript object. This represents the current position of the International Space Station
at 1pm on January 12th 2018, fetched from http://api.open-notify.org/iss-now.json.
 */

let iss_location = {
    "timestamp": 1515784140,
    "iss_position":
        {
            "latitude": "49.2167",
            "longitude": "100.5363"
        },
    "message": "success"
}

// TODO Extract the latitude value, and log it to the console.
let latitudeValue= iss_location.iss_position.latitude
console.log('The latitude value is '+latitudeValue)
// TODO Extract the longitude value, and log it to the console.
let longitudeValue= iss_location.iss_position.longitude
console.log('The longitude value is '+longitudeValue)


/* b. Use this JavaScript object of exchange rates relative to Euros.
The properties are currency symbols, the values are the exchange rates.
Data source: http://fixer.io/
* */


let rates = {
    "AUD": 1.5417,
    "BGN": 1.9558,
    "BRL": 3.8959,
    "CAD": 1.5194
}

// TODO write code to add a new property for Swiss Francs. Symbol is CHF, value is 1.1787.

rates.swissFrancs=1.1787// add swiss francs to rates object
console.log(rates)

// TODO if you had 100 Euros, write code to get the exchange rate from the object, then calculate
//      the equivalent value in Australian Dollars (AUD)
let AusDollar=rates.AUD// get  Australian Dollars (AUD)
let euro=100 // euro value
let EuroToAUD=AusDollar*euro// calculate exchange rate
console.log(EuroToAUD.toFixed(2)+' AUD')// print in console
// TODO write code to identify the currency symbol that has the highest exchange rate compared to Euros.

//    In other words, identify the property with the largest value. the answer is BRL (Brazilian Real) at 3.8959 BRL to 1 Euro.

for (let x=0; x>rates.length; x++){
   let value =rates[x]
    if (value>=euro){
        console.log(value)
    }
}

/* c. Use this JavaScript array of objects of cat owners, and their cats. Source, moderncat.com
 */

let cats_and_owners = [
    { name: "Bill Clinton", cat: "Socks" },
    { name: "Gary Oldman", cat: "Soymilk" },
    { name: "Katy Perry", cat: "Kitty Purry" },
    { name: "Snoop Dogg", cat: "Miles Davis" }
]

// TODO print Gary Oldman's cat's name
console.log(cats_and_owners[1].cat)//get the first value from the list and print the cat name or value
// TODO Taylor Swift's cat is called 'Meredith'. Write code to add this data to the array.


cats_and_owners.push({name:"Swift's",cat:"Meredith"})

console.log(cats_and_owners)
// TODO write a loop to print each cat owner, and their cat's name, one per line. Use the forEach style.

cats_and_owners.forEach(function (name){
    console.log(name)
})



/* d. Use the following JSON object, describing the Nobel Prize winners in 2017.
Source http://api.nobelprize.org/v1/prize.json?year=2017
* */









let nobel_prize_winners_2017 = {
    "prizes":[
        {
            "year":"2017",
            "category":"physics",
            "laureates":[
                {
                    "id":"941",
                    "firstname":"Rainer",
                    "surname":"Weiss",
                    "motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
                    "share":"2"
                },
                {
                    "id":"942",
                    "firstname":"Barry C.",
                    "surname":"Barish",
                    "motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
                    "share":"4"
                },
                {
                    "id":"943",
                    "firstname":"Kip S.",
                    "surname":"Thorne",
                    "motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
                    "share":"4"
                }
            ]
        },
        {
            "year":"2017",
            "category":"chemistry",
            "laureates":[
                {
                    "id":"944",
                    "firstname":"Jacques",
                    "surname":"Dubochet",
                    "motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
                    "share":"3"
                },
                {
                    "id":"945",
                    "firstname":"Joachim",
                    "surname":"Frank",
                    "motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
                    "share":"3"
                },
                {
                    "id":"946",
                    "firstname":"Richard",
                    "surname":"Henderson",
                    "motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
                    "share":"3"
                }
            ]
        },
        {
            "year":"2017",
            "category":"medicine",
            "laureates":[
                {
                    "id":"938",
                    "firstname":"Jeffrey C.",
                    "surname":"Hall",
                    "motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
                    "share":"3"
                },
                {
                    "id":"939",
                    "firstname":"Michael",
                    "surname":"Rosbash",
                    "motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
                    "share":"3"
                },
                {
                    "id":"940",
                    "firstname":"Michael W.",
                    "surname":"Young",
                    "motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
                    "share":"3"
                }
            ]
        },
        {
            "year":"2017",
            "category":"literature",
            "laureates":[
                {
                    "id":"947",
                    "firstname":"Kazuo",
                    "surname":"Ishiguro",
                    "motivation":"\"who, in novels of great emotional force, has uncovered the abyss beneath our illusory sense of connection with the world\"",
                    "share":"1"
                }
            ]
        },
        {
            "year":"2017",
            "category":"peace",
            "laureates":[
                {
                    "id":"948",
                    "firstname":"International Campaign to Abolish Nuclear Weapons (ICAN)",
                    "motivation":"\"for its work to draw attention to the catastrophic humanitarian consequences of any use of nuclear weapons and for its ground-breaking efforts to achieve a treaty-based prohibition of such weapons\"",
                    "share":"1",
                    "surname":""
                }
            ]
        },
        {
            "year":"2017",
            "category":"economics",
            "laureates":[
                {
                    "id":"949",
                    "firstname":"Richard H.",
                    "surname":"Thaler",
                    "motivation":"\"for his contributions to behavioural economics\"",
                    "share":"1"
                }
            ]
        }
    ]
}
// TODO print the full name of the Literature Nobel laureate.
let prizesList=nobel_prize_winners_2017.prizes// get prize winner list



let literaturePrize=prizesList[3].laureates// get literature winner category
let  winnerFirstName=literaturePrize[0].firstname// get the first name of the winner
let  winnerLastName=literaturePrize[0].surname// get the last name of the winner
let fullName=`${winnerFirstName} ${winnerLastName}`// concatenate  string
console.log(fullName)

// TODO print the ids of each of the Physics Nobel laureates. Your code should still work without modification if a laureate was added, or removed.

let idList=[]// assign a list
let  physicsID=prizesList[0].laureates// get physics category
console.log(physicsID)
physicsID.forEach(function (idValue){// for each id value add to a list
    idList.push(idValue.id)
})
console.log(idList)
// TODO write code to print the names of all of the prize categories (So your output would start physics, chemistry, medicine... ).
let prizeCategoryList=[]// assign a list
console.log(prizesList)

prizesList.forEach(function (category){// for each value category add category from the list
    prizeCategoryList.push(category.category)
})
console.log(prizeCategoryList)
// TODO write code to print the total number of prize categories
numberOfCategory=prizeCategoryList.length// number of category by list length
console.log('Total number of prize in 2017 is '+numberOfCategory+ '.')

// TODO write code to count the total number of laureates from 2017.
//   have a good look at how the JSON is structured, and think about what loop(s) you'll need to write.
let laureatesLists =[]
prizesList.forEach(function (laureateList){// for each value laureates  add to laureatesList

    //laureatesList.forEach()
    laureatesLists.push(laureateList.laureates)
})


let winnerCount=0
/*laureatesLists.forEach(function (winnerName){
    winnerNames.push(winnerName.id)
    winnerCount++
})*/
prizesList.forEach(function (laureateList){
    laureateList.laureates.forEach(function (laureatesName){
        winnerCount++
    })
})

let text = 'kittens'
let indexOfZ = text.indexOf('z')
console.log(indexOfZ)





//let  numberOfLaureate=laureatesLists.length
//console.log(laureatesLists)
console.log('There are '+ winnerCount + ' number of laureate in 2017 nobel prize.')

