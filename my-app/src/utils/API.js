import axios from "axios";
// const BASEURL = "https://randomuser.me/api?results=200&nat=us";

// export default {
//     search: function(query) {
//         return axios.get(BASEURL + query);
//     }
// };

export default {
    getRandomUsers: function() {
        return axios.get("https://randomuser.me/api?results=200&nat=us")
    }
};