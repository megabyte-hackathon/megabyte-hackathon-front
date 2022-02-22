import axios from "axios";

function Api(url) {
  axios
    .get(url)
    .then((Response) => {
      console.log(Response.data);
    })
    .catch((Error) => {
      console.log(Error);
    });
}

export default Api;
