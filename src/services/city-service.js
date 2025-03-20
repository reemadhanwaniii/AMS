const { CityRepository } = require('../repository/index');


class CityService {
    // constructor() {
    //     this.cityRepository = new CityRepository();
    // }

    static cityRepository = new CityRepository();

    async createCity(data) {
        try {
            const city = await CityService.cityRepository.createCity(data);
            return city;
        } catch (error) {
            console.log("Something went wrong in service layer");
            throw {error};
        }
    }

    async deleteCity(cityId) {
        try {
           const response =  await CityService.cityRepository.deleteCity(cityId);
           return response;
        } catch (error) {
            console.log("Something went wrong in service layer");
            throw {error};
        }
    }

    async updateCity(cityId,data) {
        try {
            const city = await CityService.cityRepository.updateCity(cityId,data);
            return city;
        } catch (error) {
            console.log("Something went wrong in service layer");
            throw {error};
        }
    }

    async getCity(cityId) {
        try {
           const city = await CityService.cityRepository.getCity(cityId);
           return city; 
        } catch (error) {
            console.log("Something went wrong in service layer");
            throw {error};
        }
    }

    async getAllCities(filter) {
        try {
            const cities = await CityService.cityRepository.getAllCities({name: filter.name});
            return cities;
        } catch (error) {
            console.log("Something went wrong in service layer");
            throw {error};
        }
    }

    async createBulkCities(data) {
        try {
            const cities = await CityService.cityRepository.createBulkCity(data);
            return cities;
        } catch (error) {
            console.log("Something went wrong in service layer");
            throw {error};
        }
    }

    async getAllAirports(cityId) {
        try {
            const airports = await CityService.cityRepository.getAllAirports(cityId);
            return airports;
        } catch (error) {
            console.log("Something went wrong in service layer");
            throw {error};
        }
    }
}


module.exports = CityService;