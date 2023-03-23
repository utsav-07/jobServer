import { resposeData } from "../Data/data.js";



const getAllData = async(req ,  res) =>{
    try{

        const allData = await JSON.stringify(resposeData);
        res.status(200).json(allData);
        
    }catch(error){
        res.status(500).json({message : error.messgae});
    }
}

export {getAllData};