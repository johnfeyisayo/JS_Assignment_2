function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
    this.fullAddress = function(){
        console.log(street + city + zipCode);
    }
    console.log(this)
}

const address1 = new Address('Yaba', 'Lagos', 100001)
const address2 = new Address('Agbara', 'Ogun', 120021)

function areEqual (address1, address2) {
    if (address1.key === address2.key) {
        console.log('True')
    }
    else
    console.log('False')
}
 areEqual(address1, address2)

 function areSame (address1, address2) {
    if (address1 === address2) {
        console.log('True')
    }
    else
    console.log('False')
 }

 areSame (address1, address2)
