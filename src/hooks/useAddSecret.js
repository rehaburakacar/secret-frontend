import qs from 'qs'
import axios from 'axios'
export default function useAddSecret(props){
    const options = {
        method: 'post',
        headers: {'content-type': 'application/x-www-form-urlencoded'},
        data: qs.stringify(props),
        url: 'https://api-my-secret-server.herokuapp.com/secret'
    };
    function handleSubmit(event){
        event.preventDefault()
        axios(options).then(function (res) {
            if (res.status === 200) {
                alert("Added Successfully!")
            }
        }).catch(function (error) {
            alert("Invalid input!")
        });
    }

    return {
        handleSubmit
    }
}