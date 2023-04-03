/**
 * Get random integer between two numbers, found here: https://stackoverflow.com/a/7228322
 * @param {integer} min - The min number
 * @param {integer} max - The max number
 * @returns {Number} Random number between min and max
 */
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


/**
 * Get an array with listing objects with random color and speed
 * @param {integer} numberOfListings - The number of listings 
 * @returns {array} Array containing the listing objects
 */
function generateListings(numberOfListings) {
    const listings = [];

    const listingType = ['House', 'Apartment', 'Shed', 'Dorm', 'Farm'];
    const listingFacilities = ['Parkering', 'Elevator', 'Altan', 'Have', 'Husdyr'];
    
    for (let i = 0; i < numberOfListings; i++) {
        const listing = {};
        const randomTypeIndex = randomIntFromInterval(0, listingType.length - 1);
        const numberOfFacilities = randomIntFromInterval(1, listingFacilities.length - 1);
        const facilities = [];
        for(let i = 0; i < numberOfFacilities; i++) {
            const randomIndexFacilities = randomIntFromInterval(0, listingFacilities.length - 1);
            const randomFacility = listingFacilities[randomIndexFacilities];
            
            if (!(facilities.includes(randomFacility))) {
                facilities.push(randomFacility);
            }
        }

        listing.type = listingType[randomTypeIndex];
        listing.facilities = facilities;
        listing.price = randomIntFromInterval(1, 10000);
        listing.hasGarden = Boolean(randomIntFromInterval(0, 1));
        listing.size = randomIntFromInterval(12, 1000);
        listing.img = `https://loremflickr.com/200/200/${listing.type}`

        listings.push(listing);
    }

    return listings;
}

generateListings(20);

const newListings = generateListings(37)

// Generate 37 listings
const listSizes = newListings.forEach(list => console.log(list.size))

// Form an array & Listing 37 prices
const pricesList = newListings.map(list => list.price)
console.log('\nList of Prices:')
console.log(pricesList)

// Cheap Listings
const cheapListings = newListings.filter(list => list.price < 4500)
console.log('\nCheap Prices List:')
console.log(cheapListings)

// Expensive Listings
const expensiveListings = []
newListings.forEach(list => {
    if (list.price > 4500) {
        expensiveListings.push(list.price)
    }
})
console.log('\nExpensive Prices List:')
console.log(expensiveListings)

// Parking Listings
const parkingListings = newListings.filter(list => list.facilities.includes('Parkering'))
console.log('\nListings with Parking:')
console.log(parkingListings)

// Cheap farm listings
const listings = generateListings(20);

const filter = {
    type: 'farm',
    facility: 'Have'
};

const filterListings = (listings, filter) => {
    const allKeys = ["type", "facilities", "minPrice", "maxPrice", "hasGarden", "minSize", "maxSize"]
    const filterKeys = Object.keys(filter).filter(element => allKeys.includes(element))

    const filterFunctions = {
        type: listing => listing.type.toLowerCase() === filter.type.toLowerCase(),
        facilities: listing => listing.facilities.every(facility => {
            const listingFacilities = listing.facilities.map(each => each.toLowerCase())
            const filterFacilities = filter.facility.toLowerCase()
            return listingFacilities.includes(filterFacilities)
        }),
        hasGarden: listing => listing.hasGarden.toLowerCase() === filter.hasGarden.toLowerCase(),
        minPrice: listing => listing.price >= filter.minPrice,
        maxPrice: listing => listing.price <= filter.maxPrice,
        minSize: listing => listing.size >= filter.minSize,
        maxSize: listing => listing.size <= filter.maxSize
    }

    filterKeys.forEach(key => {
        listings = listings.filter(filterFunctions[key])
    })

    return listings
}

const cheapFarmListings = filterListings(listings, filter);
console.log(cheapFarmListings)
