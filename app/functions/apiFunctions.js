const BASE_URL = 'http://localhost/project_management';
var result;

export function POST(endPoint, postedData){
    let url = BASE_URL + endPoint;
    var formData = new FormData();
    for(var i = 0; i < postedData.length; i++){
        formData.append("'" + postedData[i].key + "'", postedData[i].value);
    }

    result = fetch(url, {
            method: 'post',
            body: formData
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
    var appendThis;
    for(var i = 0; i < getData.length; i++){

        if(i === 0){
            appendThis = "?" + getData[i].key + "=" + getData[i].value;
        }else{
            appendThis = "&" + getData[i].key + "=" + getData[i].value;
        }

        url = url + appendThis;
    }
    console.log(url);
    result = fetch(url).then(function(response){

            return response.json();

        }).then(function(parsedData){

            return parsedData;
            
        }).catch(function(){

            return false; 

        });

    return result;
}
