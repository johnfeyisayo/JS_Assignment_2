// Constructor function
function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
    this.fullAddress = function(){
        console.log(street + city + zipCode);
    }
    console.log(this)
}

const address = new Address('Yaba', 'Lagos', 100001)