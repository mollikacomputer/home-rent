const { useState, useEffect } = require("react")

const serviceData = [
   
]

const useService = () =>{
    const [services, setServices] = useState([]);
    useEffect( () =>{
        fetch(serviceData)
        .then(res => res.json())
        .then(data => setServices(data))
    } ,[])
    return [services, setServices];
}

export default useService;