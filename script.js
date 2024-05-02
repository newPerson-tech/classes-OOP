// Class for Residents

class Resident {
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
    }

    // Giving info about resident
    getInfo() {
        return `Name: ${this.name}, Gender: ${this.gender}`;
    }
}

// Class for apartment
class Apartment {
    constructor() {
        this.residents = [];
    }

    // Method to add a resident
    addResident(person) {
        if (person instanceof Resident) {
            this.residents.push(person);
        } else {
            console.error("Only residents can be added");
        }
    }

    // Getting info about residents
    getResidents() {
        return this.residents.map((resident) => resident.getInfo()).join(", ");
    }
}

// Class for House
class House {
    constructor(maxApartments) {
        this.apartments = [];
        this.maxApartments = maxApartments;
    }

    // Method to add aapartment to a house
    addApartment(apartment) {
        if (apartment instanceof Apartment) {
            if (this.apartments.length < this.maxApartments) {
                this.apartments.push(apartment);
            } else {
                console.error("Maximum number of apartments in this house exceeded");
            }
        } else {
            console.error("Only apartments can be added");
        }
    }

    // Getting info about all apartments in a house
    getApartments() {
        return this.apartments.map((apartment, index) => {
            return `Apartment ${index + 1}: ${apartment.getResidents()}`;
        }).join("\n");
    }
}


const resident1 = new Resident("John", "male");
const resident2 = new Resident("Jenny", "female");
const resident3 = new Resident("Richard", "male");


const apartment1 = new Apartment();
const apartment2 = new Apartment();


apartment1.addResident(resident1);
apartment1.addResident(resident2);
apartment2.addResident(resident3);


const house = new House(2);

house.addApartment(apartment1);
house.addApartment(apartment2);

console.log(house.getApartments());