import { resposeData } from "../Data/data.js";

import axios from 'axios';



const getAllData = async (req, res) => {
    try {

        const allData = (resposeData);
        res.status(200).json(allData);

    } catch (error) {
        res.status(500).json({ message: error.messgae });
    }
}

const getJobData = async (req, res) => {

    console.log(req.query);
    console.log('jdsf');
    // try {

    //     const options = {
    //         method: 'GET',
    //         url: `https://jsearch.p.rapidapi.com/${req.query.endpoint}`,
    //         params: { query: req.query.query, num_pages: req.query.num_pages},
    //         headers: {
    //             'X-RapidAPI-Key': 'd13f52e4efmsh934a2aa599766fbp1c53f9jsnbcfd8578ba8f',
    //             'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    //         }
    //     };

    //     const response  = await axios.request(options);
    //     console.log(response);
    //   //  const str = CircularJSON.stringify(response);
    //     //  console.log(response.data.data);
    //     res.status(200).json(response.data.data);

    // } catch (error) {
    //     console.log(error);
    //     res.status(500).json({ message: error.messgae });
    // }
}

export { getAllData, getJobData };