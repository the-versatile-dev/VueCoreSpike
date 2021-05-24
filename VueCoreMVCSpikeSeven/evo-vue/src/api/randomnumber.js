import axios from "axios";

const ROOT_URL = 'https://www.random.org/integers/?num=1&min=1&max=20&col=1&base=10&format=plain&rnd=new';

export default {
    randomNumber() {
        axios.get(ROOT_URL)
            .then((response) => {
                console.log("api data : " + response.data);
                return response.data;
            });
    }
}