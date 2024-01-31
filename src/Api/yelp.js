import axios from "axios";
export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization:'Bearer BFHTUTdZanWDBc6GFdI5ceJLaz4fdxpkHEo8jCgqijsT5n1225ruj8nyZ_qE2JPQaGWX4FW1iaBYXWBrqXjEI4b9PN1Wd9UwrTTKRr6C2k8V9WgA3LVnXFdPVxlvZXYx'
    }
})