const { City,Airport } = require('../models/index');
const { Op } = require('sequelize');

class CityRepository {
    async createCity({ name }) {   //destructured object
        try{
            const city = await City.create({
                 name
            });
            return city;
        }catch(error) {
            console.log("Something went wrong in City Repository");
            throw {error};
        }
    }

    async deleteCity(cityId) {
        try {
            await City.destroy({
                where: {
                    id: cityId
                }
            });
            return true;
        } catch (error) {
            console.log("Something went wrong in City Repository");
            throw {error};
        }
    }

    async updateCity(cityId,data) {
        try {
            // const city = await City.update(data, {
            //     where: {
            //         id: cityId
            //     }
            // });

            // return city;
            const city = await City.findByPk(cityId);
            city.name = data.name;
            await city.save();
            return city;
        } catch (error) {
            console.log("Something went wrong in City Repository");
            throw {error}
        }
    }

    async getCity(cityId) {
        try {
            const city = await City.findByPk(cityId);
            return city;
        } catch (error) {
            console.log("Something went wrong in City Repository");
            throw {error}
        }
    }

    async getAllCities(filter) {  //filter can be empty
        try {

            if(filter.name) {
                const cities = await City.findAll({
                    where: {
                        name: {
                            [Op.startsWith] : filter.name
                        }
                    }
                });
                return cities;
            }
            const cities = await City.findAll();
            return cities;
        } catch (error) {
            console.log("Something went wrong in City Repository");
            throw {error}
        }
    }

    async createBulkCity(obj) {  //array of data looks like [{},{},{}]
        try {
            const cities = await City.bulkCreate(obj);
            return cities;
        } catch (error) {
            console.log("Something went wrong in City Repository");
            throw {error};
        }
    }

    async getAllAirports(cityId) {
        try {
            const airports = await City.findByPk(cityId,{
                include: [{
                    model: Airport,
                }]
            });
            return airports;
        } catch (error) {
            console.log("Something went wrong in City Repository layer");
            throw {error};
        }
    }
}


module.exports = CityRepository;