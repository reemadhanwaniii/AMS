const { CityService } = require('../services/index');
  

const cityService = new CityService();

const create = async (req,res) => {
        try {
            const city = await cityService.createCity(req.body);
            return res.status(201).json({
                data: city,
                success: true,
                message: "Successfully created a city",
                err: {}
            })
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                data: {},
                success: false,
                message: "Not able to create a city",
                err: error
            })
        }
}

//Delete -> /city/:id
const destroy = async (req,res) => {
    try {
            const response = await cityService.deleteCity(req.params.id);
            return res.status(200).json({
                data: response,
                success: true,
                message: "Successfully deleted a city",
                err: {}
            });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to delete a city",
            err: error
        })
    }
}



const update = async (req,res) => {
    try {
        const city = await cityService.updateCity(req.params.id,req.body);
        return res.status(200).json({
            data: city,
            success: true,
            message: "Successfully updated a city",
            err: {}
        }); 
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to update a city",
            err: error
        })
    }
}


//GET -> city/:id
const get = async (req,res) => {
    try {
        const city = await cityService.getCity(req.params.id);
        return res.status(200).json({
            data: city,
            success: true,
            message: "Successfully fetched a city",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to get a city",
            err: error
        })
    }
}


const getAll = async (req,res) => {
    try {
        const cities = await cityService.getAllCities(req.query);
        return res.status(201).json({
            data: cities,
            success: true,
            message: "Successfully fetched all cities",
            err: {}
        })
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to fetch all cities",
            err: error
        });
    }
}


const createBulk = async (req,res) => {
    try {
        const cities = await cityService.createBulkCities(req.body);
        return res.status(201).json({
            data: cities,
            success: true,
            err: {},
            message: "Successfully created all cities"
        })
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to create all cities",
            err: error
        });
    }
}

const getAirports = async (req,res) => {
    try {
        const airports = await cityService.getAllAirports(req.params.id);
        return res.status(200).json({
            data: airports,
            success: true,
            err: {},
            message: 'Successfully fetched all airports belongs to particular city'
        })
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to fetch all airports",
            err: error
        });
    }
}

module.exports = {
    create,
    destroy,
    update,
    get,
    getAll,
    createBulk,
    getAirports
}