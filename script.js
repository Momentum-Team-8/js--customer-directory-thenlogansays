
//const photo = document.getElementById('photo')
//const firstName = document.getElementById('firstname');
//const lastName = document.getElementById('lastname');
//const email = document.getElementById('email')
//const streetNumber = document.getElementById('streetnumber')
//const streetName = document.getElementById('streetname')
//const city = document.getElementById('city')
//const state = document.getElementById('state')
//const birthDate = document.getElementById('dob')
//const registrationDate = document.getElementById('registrationdate')
//let firstName = customers.name.first
//let lastName = customers.name.last

let customer = customers[0]

const insertionPoint = document.getElementById('output')
function nameToAbbr (stateName) {
    const idx = usStates.findIndex(function (state) {
      return state.name === stateName.toUpperCase()
    })
  
    if (idx === -1) {
      return null
    }
  
    return usStates[idx].abbreviation
}

// const customerCard = document.createElement('div')

// customerCard.classList.add('customer-card')
// insertionPoint.appendChild(customerCard)
// console.log(customerCard)
// let firstName = customer.name.first
// let lastName = customer.name.last
// const fullName = firstName + ' ' + lastName
// customerCard.innerHTML = `<h2>${fullName}</h2>`

// const customerImage = document.createElement('img')
// customerImage.src = customer.picture.medium
// console.log('customer image', customerImage)
// customerCard.appendChild(customerImage )

// const customerEmail = document.createElement('div')
// customerEmail.innerText = customer.email
// console.log(customerEmail)
// customerCard.appendChild(customerEmail)




for (let customer of customers) {
    const customerCard = document.createElement('div')
    customerCard.classList.add('customer-card')
    insertionPoint.appendChild(customerCard)
    //console.log(customerCard)

    let firstName = customer.name.first
    let lastName = customer.name.last
    const fullName = firstName + ' ' + lastName
    customerCard.innerHTML = `<h2>${fullName}</h2>`

    const customerImage = document.createElement('img')
    customerImage.src = customer.picture.medium
    console.log('customer image', customerImage)
    customerCard.appendChild(customerImage )

    const customerEmail = document.createElement('div')
    customerEmail.innerText = customer.email
    console.log(customerEmail)
    customerCard.appendChild(customerEmail)

    const streetAddress = document.createElement('div')
    let streetNumber = customer.location.street.number
    let streetName = customer.location.street.name
    let fullStreetName = streetNumber + ' ' + streetName
    streetAddress.innerText = fullStreetName
    customerCard.appendChild(streetAddress)

    const cityStateZip = document.createElement('div')
    let city = customer.location.city
    let state = nameToAbbr(customer.location.state)
    let zip = customer.location.postcode
    cityStateZip.innerHTML = city + ',' + ' ' + state + ' ' + zip
    customerCard.appendChild(cityStateZip)
    

}
