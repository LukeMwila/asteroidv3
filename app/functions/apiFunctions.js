const BASE_URL = 'http://localhost:3000/api/';
var result;

export function POST(endPoint, postedData){
    let url = BASE_URL + endPoint;

    result = fetch(url, {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(postedData)
        }).then(function(response){

            return response.json();

        }).then(function(parsedData){

            return parsedData;
            
        }).catch(function(){

            return false; 

        });

    return result;
}

export function GET(endPoint, getData){
    let url = BASE_URL + endPoint;

    url += getData.map((data) => {
        return '/' + data.value;
    });

    result = fetch(url).then(function(response){

            return response.json();

        }).then(function(parsedData){

            return parsedData;
            
        }).catch(function(){

            return false; 

        });

    return result;
}
