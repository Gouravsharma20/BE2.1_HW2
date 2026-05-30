

const fs = require("fs")


const dbConnection = require("./db/db.connection")

const hotelModel = require("./model/hotel.Model");



const jsonData = fs.readFileSync("./data/hotelData.json","utf-8")

const hotelsInfo = JSON.parse(jsonData)

const seedData = async()=>{
    try {
        for(const hotelData of hotelsInfo) {
            const newHotel = new hotelModel(hotelData)

            await newHotel.save()
            console.log("data saved successfully")
        }

    } catch (err){
        console.log("Eror seeding data in database ", err)
    }

}

const newHotel = {
  name: "New Hotel",
  category: "Mid-Range",
  location: "123 Main Street, Frazer Town",
  rating: 4.0,
  reviews: [],
  website: "https://hotel-example.com",
  phoneNumber: "+1234567890",
  checkInTime: "2:00 PM",
  checkOutTime: "12:00 PM",
  amenities: ["Laundry", "Room Service"],
  priceRange: "$$ (31-60)",
  reservationsNeeded: true,
  isParkingAvailable: true,
  isWifiAvailable: true,
  isPoolAvailable: false,
  isSpaAvailable: false,
  isRestaurantAvailable: true,
  photos: ["https://example.com/hotel-photo1.jpg", "https://example.com/hotel-photo2.jpg"],
};

async function addHotel(hotels){
    await dbConnection()

    try{
        const newHotel = new hotelModel(hotels)
        const saveHotel = await newHotel.save()
        console.log("new Hotel data saved successfully",saveHotel)
    } catch (err) {
        console.log("Error adding new data",err)
    }
}

dbConnection()

seedData()

addHotel(newHotel)