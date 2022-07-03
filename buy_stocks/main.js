let delta =  86400000;  // mseconds in the whole day 
let t = Date.now();            	
let today = new Date(t).toISOString().split('T')[0];
let yesterday = new Date(t - delta).toISOString().split('T')[0];
let twodaysago = new Date(t - delta*2).toISOString().split('T')[0];

// This script was generated and reflects raw data. It is recommended to change this code to your required logic
load.initialize("Initialize", async function () {
});

load.action("Action", async function () {
            	
	
    const host_0 = load.config.user.args['host']; //`advantageonlinebanking.com`;
    const protocol = load.config.user.args['protocol'];

    let userKey= load.params.key; 

    load.WebRequest.defaults.returnBody = false;
    load.WebRequest.defaults.headers = {
        "accept-encoding": "gzip, deflate, br",
        "accept-language": "en-US,en;q=0.9",
        "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"99\", \"Google Chrome\";v=\"99\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.82 Safari/537.36"
    };

    const webRequest1 = new load.WebRequest({
        id: 1,
        url: `${protocol}://${host_0}/`,
        method: "GET",
        headers: {
            "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "sec-fetch-dest": "document",
            "sec-fetch-mode": "navigate",
            "sec-fetch-site": "none",
            "sec-fetch-user": "?1",
            "upgrade-insecure-requests": "1"
        },
    });

    const webResponse1 = await webRequest1.send(); 

    const webRequest2 = new load.WebRequest({
        id: 2,
        url: `${protocol}://${host_0}/api/currencies?`,
        method: "GET",
        headers: {
            "accept": "application/json, text/plain, */*",
            "content-type": "application/json",
            "referer": `${protocol}://${host_0}/`,
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin"
        },
    });
    const webResponse2 = await webRequest2.send();

    const webRequest3 = new load.WebRequest({
        id: 3,
        url: `${protocol}://${host_0}/api/stocks/products?`,
        method: "GET",
        headers: {
            "accept": "application/json, text/plain, */*",
            "content-type": "application/json",
            "referer": `${protocol}://${host_0}/`,
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin"
        },
    });
    const webResponse3 = await webRequest3.send();

    const webRequest4 = new load.WebRequest({
        id: 4,
        url: `${protocol}://${host_0}/api/currency`,
        method: "GET",
        headers: {
            "accept": "application/json, text/plain, */*",
            "content-type": "application/json",
            "referer": `${protocol}://${host_0}/`,
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin"
        },
        queryString: {
           	"from": `${twodaysago}`,
            "to": `${yesterday}`            	
        },
    });
    const webResponse4 = await webRequest4.send();

    const webRequest5 = new load.WebRequest({
        id: 5,
        url: `${protocol}://${host_0}/api/management/bank?`,
        method: "GET",
        headers: {
            "accept": "application/json, text/plain, */*",
            "content-type": "application/json",
            "referer": `${protocol}://${host_0}/`,
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin"
        },
    });
    const webResponse5 = await webRequest5.send();

    const webRequest6 = new load.WebRequest({
        id: 6,
        url: `${protocol}://${host_0}/api/stocks/products/BABA`,
        method: "GET",
        headers: {
            "accept": "application/json, text/plain, */*",
            "content-type": "application/json",
            "referer": `${protocol}://${host_0}/`,
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin"
        },
        queryString: {
            "duration": "6",
            "period": "month"
        },
    });
    const webResponse6 = await webRequest6.send();

    const webRequest7 = new load.WebRequest({
        id: 7,
        url: `${protocol}://${host_0}/api/stocks/products/NVDA`,
        method: "GET",
        headers: {
            "accept": "application/json, text/plain, */*",
            "content-type": "application/json",
            "referer": `${protocol}://${host_0}/`,
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin"
        },
        queryString: {
            "duration": "6",
            "period": "month"
        },
    });
    const webResponse7 = await webRequest7.send();

    const webRequest8 = new load.WebRequest({
        id: 8,
        url: `${protocol}://${host_0}/api/stocks/products/AAPL`,
        method: "GET",
        headers: {
            "accept": "application/json, text/plain, */*",
            "content-type": "application/json",
            "referer": `${protocol}://${host_0}/`,
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin"
        },
        queryString: {
            "duration": "6",
            "period": "month"
        },
    });
    const webResponse8 = await webRequest8.send();

    let newUser = false;
    
    const transaction1 = new load.Transaction("Login");

    transaction1.start();

    const webRequest9 = new load.WebRequest({
        id: 9,
        url: `${protocol}://${host_0}/api/users/login`,
        method: "POST",
        headers: {
            "accept": "application/json, text/plain, */*",
            "content-type": "application/json",
            "origin": `${protocol}://${host_0}`,
            "referer": `${protocol}://${host_0}/`,
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin"
        },
        body: {
            "username": `test${userKey}`,
            "password": "W3lcome1"
        },
        extractors: [
            // Source='Rule' Original value="eyJhbGciOiJIUzI1NiJ9.eyJmaXJzdE5hbWUiOiJ0ZXN0IiwibGFzdE5hbWUiOiI5OTk5Iiwic3ViIjoidGVzdDk5OTkiLCJyb2...
            new load.JsonPathExtractor("token","$.token"), 
        ],        
        handleHTTPError: (webResponse) => {
			if (webResponse.status === 404){
        		// user doesn't exists, need to register it.
        		newUser =  true;
				return false; 
			}
        }
    });
    const webResponse9 = await webRequest9.send();

    
    if (newUser) {
        
		    const transaction2 = new load.Transaction("Registration");
		
		    transaction2.start();
		
		    const webRequest10 = new load.WebRequest({
		        id: 10,
		        url: `${protocol}://${host_0}/api/users`,
		        method: "POST",
		        headers: {
		            "accept": "application/json, text/plain, */*",
		            "content-type": "application/json",
		            "origin": `${protocol}://${host_0}`,
		            "referer": `${protocol}://${host_0}/`,
		            "sec-fetch-dest": "empty",
		            "sec-fetch-mode": "cors",
		            "sec-fetch-site": "same-origin"
		        },
		        body: {
		            "firstName": "test",
		            "lastName": `${userKey}`,
		            "email": `test${userKey}@my.org`,
		            "username": `test${userKey}`,
		            "password": "W3lcome1",
		            "confirmPass": "W3lcome1",
		            "createAccountInAOS": false
		        },
		    });
		    const webResponse10 = await webRequest10.send();
		
		    
		    load.sleep(5);
		    
		    const webRequest11 = new load.WebRequest({
		        id: 11,
		        url: `${protocol}://${host_0}/api/users/login`,
		        method: "POST",
		        headers: {
		            "accept": "application/json, text/plain, */*",
		            "content-type": "application/json",
		            "origin": `${protocol}://${host_0}`,
		            "referer": `${protocol}://${host_0}/`,
		            "sec-fetch-dest": "empty",
		            "sec-fetch-mode": "cors",
		            "sec-fetch-site": "same-origin"
		        },
		        body: {
		            "username": `test${userKey}`,
		            "password": "W3lcome1"
		        },
		        extractors: [
		            // Source='Rule' Original value="eyJhbGciOiJIUzI1NiJ9.eyJmaXJzdE5hbWUiOiJ0ZXN0IiwibGFzdE5hbWUiOiI5OTk5Iiwic3ViIjoidGVzdDk5OTkiLCJyb2...
		            new load.JsonPathExtractor("token","$.token"), 
		        ],
		    });
		    const webResponse11 = await webRequest11.send();
		    
			transaction2.stop();
    
    }
    
    const webRequest12 = new load.WebRequest({
        id: 12,
        url: `${protocol}://${host_0}/api/accounts?`,
        method: "GET",
        headers: {
            "accept": "application/json, text/plain, */*",
            "authorization": `Bearer ${load.extractors['token']}`,
            "content-type": "application/json",
            "referer": `${protocol}://${host_0}/dashboard`,
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin"
        },
        extractors: [
            // Source='Record scan' Original value="AB87ADVB991648030179761"
            new load.JsonPathExtractor("iban",'$.data[?(@.name=="Current USD")].iban'),             
            // Source='Record scan' Original value=439391.28
            new load.JsonPathExtractor("balance",'.data[?(@.name=="Current USD")].balance'), 
        ],
    });
    const webResponse12 = await webRequest12.send();

    const webRequest13 = new load.WebRequest({
        id: 13,
        url: `${protocol}://${host_0}/api/accounts/dashboard?`,
        method: "GET",
        headers: {
            "accept": "application/json, text/plain, */*",
            "authorization": `Bearer ${load.extractors['token']}`,
            "content-type": "application/json",
            "referer": `${protocol}://${host_0}/dashboard`,
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin"
        },
    });
    const webResponse13 = await webRequest13.send();

    const webRequest14 = new load.WebRequest({
        id: 14,
        url: `${protocol}://${host_0}/api/cards?`,
        method: "GET",
        headers: {
            "accept": "application/json, text/plain, */*",
            "authorization": `Bearer ${load.extractors['token']}`,
            "content-type": "application/json",
            "referer": `${protocol}://${host_0}/dashboard`,
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin"
        },
    });
    const webResponse14 = await webRequest14.send();

    const webRequest15 = new load.WebRequest({
        id: 15,
        url: `${protocol}://${host_0}/api/cards/dashboard?`,
        method: "GET",
        headers: {
            "accept": "application/json, text/plain, */*",
            "authorization": `Bearer ${load.extractors['token']}`,
            "content-type": "application/json",
            "referer": `${protocol}://${host_0}/dashboard`,
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin"
        },
    });
    const webResponse15 = await webRequest15.send();

    const webRequest16 = new load.WebRequest({
        id: 16,
        url: `${protocol}://${host_0}/api/stocks/portfolio/summary?`,
        method: "GET",
        headers: {
            "accept": "application/json, text/plain, */*",
            "authorization": `Bearer ${load.extractors['token']}`,
            "content-type": "application/json",
            "referer": `${protocol}://${host_0}/dashboard`,
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin"
        },
    });
    const webResponse16 = await webRequest16.send();

    const webRequest17 = new load.WebRequest({
        id: 17,
        url: `${protocol}://${host_0}/api/forecasts/3?`,
        method: "GET",
        headers: {
            "accept": "application/json, text/plain, */*",
            "authorization": `Bearer ${load.extractors['token']}`,
            "content-type": "application/json",
            "referer": `${protocol}://${host_0}/dashboard`,
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin"
        },
    });
    const webResponse17 = await webRequest17.send();

    const webRequest18 = new load.WebRequest({
        id: 18,
        url: `${protocol}://${host_0}/api/forecasts/expense/last-month?`,
        method: "GET",
        headers: {
            "accept": "application/json, text/plain, */*",
            "authorization": `Bearer ${load.extractors['token']}`,
            "content-type": "application/json",
            "referer": `${protocol}://${host_0}/dashboard`,
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin"
        },
    });
    const webResponse18 = await webRequest18.send();

    const webRequest19 = new load.WebRequest({
        id: 19,
        url: `${protocol}://${host_0}/api/currency`,
        method: "GET",
        headers: {
            "accept": "application/json, text/plain, */*",
            "authorization": `Bearer ${load.extractors['token']}`,
            "content-type": "application/json",
            "referer": `${protocol}://${host_0}/dashboard`,
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin"
        },
        queryString: {
           	"from": `${twodaysago}`,
            "to": `${yesterday}`            	
        },
    });
    const webResponse19 = await webRequest19.send();

    transaction1.stop();
    

    const transaction3 = new load.Transaction("Go to Accounts");

    transaction3.start();

    const webRequest20 = new load.WebRequest({
        id: 20,
        url: `${protocol}://${host_0}/api/currency`,
        method: "GET",
        headers: {
            "accept": "application/json, text/plain, */*",
            "authorization": `Bearer ${load.extractors['token']}`,
            "content-type": "application/json",
            "referer": `${protocol}://${host_0}/accounts`,
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin"
        },
        queryString: {
           	"from": `${twodaysago}`,
            "to": `${yesterday}`            	
        },
    });
    const webResponse20 = await webRequest20.send();

    const webRequest21 = new load.WebRequest({
        id: 21,
        url: `${protocol}://${host_0}/api/management/demo?`,
        method: "GET",
        headers: {
            "accept": "application/json, text/plain, */*",
            "authorization": `Bearer ${load.extractors['token']}`,
            "content-type": "application/json",
            "referer": `${protocol}://${host_0}/accounts`,
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin"
        },
    });
    const webResponse21 = await webRequest21.send();

    const webRequest22 = new load.WebRequest({
        id: 22,
        url: `${protocol}://${host_0}/api/accounts?`,
        method: "GET",
        headers: {
            "accept": "application/json, text/plain, */*",
            "authorization": `Bearer ${load.extractors['token']}`,
            "content-type": "application/json",
            "referer": `${protocol}://${host_0}/accounts`,
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin"
        },
    });
    const webResponse22 = await webRequest22.send();

    transaction3.stop();

    const transaction4 = new load.Transaction("Go to Current USD account");

    transaction4.start();

    const webRequest23 = new load.WebRequest({
        id: 23,
        url: `${protocol}://${host_0}/api/management/demo?`,
        method: "GET",
        headers: {
            "accept": "application/json, text/plain, */*",
            "authorization": `Bearer ${load.extractors['token']}`,
            "content-type": "application/json",
            "referer": `${protocol}://${host_0}/accounts/transactions`,
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin"
        },
    });
    const webResponse23 = await webRequest23.send();

    const webRequest24 = new load.WebRequest({
        id: 24,
        url: `${protocol}://${host_0}/api/cards?`,
        method: "GET",
        headers: {
            "accept": "application/json, text/plain, */*",
            "authorization": `Bearer ${load.extractors['token']}`,
            "content-type": "application/json",
            "referer": `${protocol}://${host_0}/accounts/transactions`,
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin"
        },
    });
    const webResponse24 = await webRequest24.send();

    const webRequest25 = new load.WebRequest({
        id: 25,
        url: `${protocol}://${host_0}/api/accounts?`,
        method: "GET",
        headers: {
            "accept": "application/json, text/plain, */*",
            "authorization": `Bearer ${load.extractors['token']}`,
            "content-type": "application/json",
            "referer": `${protocol}://${host_0}/accounts/transactions`,
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin"
        },
    });
    const webResponse25 = await webRequest25.send();

    const webRequest26 = new load.WebRequest({
        id: 26,
        url: `${protocol}://${host_0}/api/currency`,
        method: "GET",
        headers: {
            "accept": "application/json, text/plain, */*",
            "authorization": `Bearer ${load.extractors['token']}`,
            "content-type": "application/json",
            "referer": `${protocol}://${host_0}/accounts/transactions`,
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin"
        },
        queryString: {
           	"from": `${twodaysago}`,
            "to": `${yesterday}`            	
        },
    });
    const webResponse26 = await webRequest26.send();

    const webRequest27 = new load.WebRequest({
        id: 27,
        url: `${protocol}://${host_0}/api/accounts/${load.extractors['iban']}/transactions`,
        method: "GET",
        headers: {
            "accept": "application/json, text/plain, */*",
            "authorization": `Bearer ${load.extractors['token']}`,
            "content-type": "application/json",
            "referer": `${protocol}://${host_0}/accounts/transactions`,
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin"
        },
        queryString: {
            "from": `${today}`, //"2022-02-23",
            "iban": `${load.extractors['iban']}`,
            "to": `${today}`, //"2022-03-23",
            "transaction_type": "all"
        },
    });
    const webResponse27 = await webRequest27.send();

    transaction4.stop();

    const transaction5 = new load.Transaction("New transfer");

    transaction5.start();

    const webRequest28 = new load.WebRequest({
        id: 28,
        url: `${protocol}://${host_0}/api/currency`,
        method: "GET",
        headers: {
            "accept": "application/json, text/plain, */*",
            "authorization": `Bearer ${load.extractors['token']}`,
            "content-type": "application/json",
            "referer": `${protocol}://${host_0}/new-transfer`,
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin"
        },
        queryString: {
           	"from": `${twodaysago}`,
            "to": `${yesterday}`            	        	
        },
    });
    const webResponse28 = await webRequest28.send();

    const webRequest29 = new load.WebRequest({
        id: 29,
        url: `${protocol}://${host_0}/api/users/merchants?`,
        method: "GET",
        headers: {
            "accept": "application/json, text/plain, */*",
            "authorization": `Bearer ${load.extractors['token']}`,
            "content-type": "application/json",
            "referer": `${protocol}://${host_0}/new-transfer`,
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin"
        },
        extractors: [
            new load.JsonPathExtractor("ids","[*].id", true), 
            new load.JsonPathExtractor("bankBics","[*].bankBic", true), 
            new load.JsonPathExtractor("_ibans","[*].iban", true), 
            new load.JsonPathExtractor("names","[*].name", true), 
            new load.JsonPathExtractor("bankNames","[*].bankName", true), 
        ],
    });
    const webResponse29 = await webRequest29.send();
    
    let randomIndex = Math.floor(Math.random() * webResponse29.extractors['ids'].length);
    let _id = webResponse29.extractors['ids'][randomIndex];    
    let _bankBic = webResponse29.extractors['bankBics'][randomIndex];    
    let _iban = webResponse29.extractors['_ibans'][randomIndex];    
    let _name = webResponse29.extractors['names'][randomIndex];    
    let _bankName = webResponse29.extractors['bankNames'][randomIndex];    
        
	let sum = Math.floor(Math.random() * 500) + 100;
	
    const webRequest30 = new load.WebRequest({
        id: 30,
        url: `${protocol}://${host_0}/api/accounts?`,
        method: "GET",
        headers: {
            "accept": "application/json, text/plain, */*",
            "authorization": `Bearer ${load.extractors['token']}`,
            "content-type": "application/json",
            "referer": `${protocol}://${host_0}/new-transfer`,
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin"
        },
    });
    const webResponse30 = await webRequest30.send();

//    const webRequest31 = new load.WebRequest({
//        id: 31,
//        url: `${protocol}://${host_0}/api/accounts/${load.extractors['iban']}/previous-recipients?`,
//        method: "GET",
//        headers: {
//            "accept": "application/json, text/plain, */*",
//            "authorization": `Bearer ${load.extractors['token']}`,
//            "content-type": "application/json",
//            "referer": `${protocol}://${host_0}/new-transfer`,
//            "sec-fetch-dest": "empty",
//            "sec-fetch-mode": "cors",
//            "sec-fetch-site": "same-origin"
//        },
//    });
//    const webResponse31 = await webRequest31.send();

    const webRequest32 = new load.WebRequest({
        id: 32,
        url: `${protocol}://${host_0}/api/accounts/${load.extractors['iban']}/transactions`,
        method: "POST",
        headers: {
            "accept": "application/json, text/plain, */*",
            "authorization": `Bearer ${load.extractors['token']}`,
            "content-type": "application/json",
            "origin": `${protocol}://${host_0}`,
            "referer": `${protocol}://${host_0}/new-transfer`,
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin"
        },
        body: {
            "fillType": "3",
            "previousMerchants": `${_id}`,
            "recipient": { 
                "company_id": `${_id}`,
                "name": `${_name}`,
                "iban": `${_iban}`,
                "bic": `${_bankBic}`,
                "bankName": `${_bankName}`,
            },
            "amount": sum,
            "currencyCode": "USD",
            "description": load.utils.uuid(),
            "transaction_type": "Utilities",
            "iban": `${load.extractors['iban']}`,
            "balance": `${load.extractors['balance']}`, //439391.28,
            "previousTransactions": ""
        },
    	extractors: [
             new load.JsonPathExtractor("transaction","$") 
       	]
    });

    
    const webResponse32 = await webRequest32.send();

    let lastTransactionReference = load.extractors.transaction.reference;
    let lastTransactionId = load.extractors.transaction.id;
    
    const webRequest33 = new load.WebRequest({
        id: 33,
        url: `${protocol}://${host_0}/api/currency`,
        method: "GET",
        headers: {
            "accept": "application/json, text/plain, */*",
            "authorization": `Bearer ${load.extractors['token']}`,
            "content-type": "application/json",
            "referer": `${protocol}://${host_0}/accounts`,
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin"
        },
        queryString: {
           	"from": `${twodaysago}`,
            "to": `${yesterday}`                 	
        },
    });
    const webResponse33 = await webRequest33.send();

    const webRequest34 = new load.WebRequest({
        id: 34,
        url: `${protocol}://${host_0}/api/management/demo?`,
        method: "GET",
        headers: {
            "accept": "application/json, text/plain, */*",
            "authorization": `Bearer ${load.extractors['token']}`,
            "content-type": "application/json",
            "referer": `${protocol}://${host_0}/accounts`,
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin"
        },
    });
    const webResponse34 = await webRequest34.send();

    const webRequest35 = new load.WebRequest({
        id: 35,
        url: `${protocol}://${host_0}/api/accounts?`,
        method: "GET",
        headers: {
            "accept": "application/json, text/plain, */*",
            "authorization": `Bearer ${load.extractors['token']}`,
            "content-type": "application/json",
            "referer": `${protocol}://${host_0}/accounts`,
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin"
        },
        extractors: [
            new load.JsonPathExtractor("balance",".data[0].balance"), 
        ],
    });
    const webResponse35 = await webRequest35.send();

    transaction5.stop();

    load.log(`New balance: [${webResponse35.extractors['balance']}]`);
    

    const transaction6 = new load.Transaction("Dashboard");

    transaction6.start();

    const webRequest36 = new load.WebRequest({
        id: 36,
        url: `${protocol}://${host_0}/api/accounts?`,
        method: "GET",
        headers: {
            "accept": "application/json, text/plain, */*",
            "authorization": `Bearer ${load.extractors['token']}`,
            "content-type": "application/json",
            "referer": `${protocol}://${host_0}/dashboard`,
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin"
        },
    });
    const webResponse36 = await webRequest36.send();

    const webRequest37 = new load.WebRequest({
        id: 37,
        url: `${protocol}://${host_0}/api/cards?`,
        method: "GET",
        headers: {
            "accept": "application/json, text/plain, */*",
            "authorization": `Bearer ${load.extractors['token']}`,
            "content-type": "application/json",
            "referer": `${protocol}://${host_0}/dashboard`,
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin"
        },
    });
    const webResponse37 = await webRequest37.send();

    const webRequest38 = new load.WebRequest({
        id: 38,
        url: `${protocol}://${host_0}/api/cards/dashboard?`,
        method: "GET",
        headers: {
            "accept": "application/json, text/plain, */*",
            "authorization": `Bearer ${load.extractors['token']}`,
            "content-type": "application/json",
            "referer": `${protocol}://${host_0}/dashboard`,
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin"
        },
    });
    const webResponse38 = await webRequest38.send();

    const webRequest39 = new load.WebRequest({
        id: 39,
        url: `${protocol}://${host_0}/api/accounts/dashboard?`,
        method: "GET",
        headers: {
            "accept": "application/json, text/plain, */*",
            "authorization": `Bearer ${load.extractors['token']}`,
            "content-type": "application/json",
            "referer": `${protocol}://${host_0}/dashboard`,
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin"
        },
    });
    const webResponse39 = await webRequest39.send();

    const webRequest40 = new load.WebRequest({
        id: 40,
        url: `${protocol}://${host_0}/api/stocks/portfolio/summary?`,
        method: "GET",
        headers: {
            "accept": "application/json, text/plain, */*",
            "authorization": `Bearer ${load.extractors['token']}`,
            "content-type": "application/json",
            "referer": `${protocol}://${host_0}/dashboard`,
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin"
        },
    });
    const webResponse40 = await webRequest40.send();

    const webRequest41 = new load.WebRequest({
        id: 41,
        url: `${protocol}://${host_0}/api/forecasts/3?`,
        method: "GET",
        headers: {
            "accept": "application/json, text/plain, */*",
            "authorization": `Bearer ${load.extractors['token']}`,
            "content-type": "application/json",
            "referer": `${protocol}://${host_0}/dashboard`,
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin"
        },
    });
    const webResponse41 = await webRequest41.send();

    const webRequest42 = new load.WebRequest({
        id: 42,
        url: `${protocol}://${host_0}/api/forecasts/expense/last-month?`,
        method: "GET",
        headers: {
            "accept": "application/json, text/plain, */*",
            "authorization": `Bearer ${load.extractors['token']}`,
            "content-type": "application/json",
            "referer": `${protocol}://${host_0}/dashboard`,
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin"
        },
    });
    const webResponse42 = await webRequest42.send();

    const webRequest43 = new load.WebRequest({
        id: 43,
        url: `${protocol}://${host_0}/api/currency`,
        method: "GET",
        headers: {
            "accept": "application/json, text/plain, */*",
            "authorization": `Bearer ${load.extractors['token']}`,
            "content-type": "application/json",
            "referer": `${protocol}://${host_0}/dashboard`,
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin"
        },
        queryString: {
           	"from": `${twodaysago}`,
            "to": `${yesterday}`            	         	
        },
    });
    const webResponse43 = await webRequest43.send();

    transaction6.stop();

    const transaction7 = new load.Transaction("View all transactions");

    transaction7.start();

    const webRequest44 = new load.WebRequest({
        id: 44,
        url: `${protocol}://${host_0}/api/accounts?`,
        method: "GET",
        headers: {
            "accept": "application/json, text/plain, */*",
            "authorization": `Bearer ${load.extractors['token']}`,
            "content-type": "application/json",
            "referer": `${protocol}://${host_0}/accounts/transactions`,
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin"
        },
    });
    const webResponse44 = await webRequest44.send();

    const webRequest45 = new load.WebRequest({
        id: 45,
        url: `${protocol}://${host_0}/api/cards?`,
        method: "GET",
        headers: {
            "accept": "application/json, text/plain, */*",
            "authorization": `Bearer ${load.extractors['token']}`,
            "content-type": "application/json",
            "referer": `${protocol}://${host_0}/accounts/transactions`,
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin"
        },
    });
    const webResponse45 = await webRequest45.send();

    const webRequest46 = new load.WebRequest({
        id: 46,
        url: `${protocol}://${host_0}/api/currency`,
        method: "GET",
        headers: {
            "accept": "application/json, text/plain, */*",
            "authorization": `Bearer ${load.extractors['token']}`,
            "content-type": "application/json",
            "referer": `${protocol}://${host_0}/accounts/transactions`,
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin"
        },
        queryString: {
           	"from": `${twodaysago}`,
            "to": `${yesterday}`            	         	
        },
    });
    const webResponse46 = await webRequest46.send();

    const webRequest47 = new load.WebRequest({
        id: 47,
        url: `${protocol}://${host_0}/api/management/demo?`,
        method: "GET",
        headers: {
            "accept": "application/json, text/plain, */*",
            "authorization": `Bearer ${load.extractors['token']}`,
            "content-type": "application/json",
            "referer": `${protocol}://${host_0}/accounts/transactions`,
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin"
        },
    });
    const webResponse47 = await webRequest47.send();

    const webRequest48 = new load.WebRequest({
        id: 48,
        url: `${protocol}://${host_0}/api/accounts/${load.extractors['iban']}/transactions`,
        method: "GET",
        headers: {
            "accept": "application/json, text/plain, */*",
            "authorization": `Bearer ${load.extractors['token']}`,
            "content-type": "application/json",
            "referer": `${protocol}://${host_0}/accounts/transactions`,
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin"
        },
        queryString: {
            "from": `${today}`,
            "iban": `${load.extractors['iban']}`,
            "to": `${today}`,
            "transaction_type": "all"
        },
        extractors:[
   			new load.JsonPathExtractor("checkLast",`.data[?(@.id==${lastTransactionId})].reference`),         	
   			new load.JsonPathExtractor("checkReference",`.data[*].reference`, true),         	   			
			new load.JsonPathExtractor("checkId",`.data[*].id`, true),         	   			   			
        ]
    });
    const webResponse48 = await webRequest48.send();

       
    transaction7.stop();

    

    load.log(`${lastTransactionReference}  - ${load.extractors.checkLast}`);
    
// ----------------------------------------

    const T20 = new load.Transaction("Stocks");

    T20.start();

    const webRequest218 = new load.WebRequest({
        id: 218,
        url: `${protocol}://${host_0}/api/currency`,
        method: "GET",
        headers: {
            "accept": "application/json, text/plain, */*",
            "authorization": `Bearer ${load.extractors['token']}`,
            "content-type": "application/json",
            "referer": `${protocol}://${host_0}/stocks`,
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin"
        },
        queryString: {
          	"from": `${twodaysago}`,
            "to": `${yesterday}`                 	
        },
    });
    const webResponse218 = await webRequest218.send();

    const webRequest219 = new load.WebRequest({
        id: 219,
        url: `${protocol}://${host_0}/api/stocks/watchlist?`,
        method: "GET",
        headers: {
            "accept": "application/json, text/plain, */*",
            "authorization": `Bearer ${load.extractors['token']}`,
            "content-type": "application/json",
            "referer": `${protocol}://${host_0}/stocks`,
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin"
        },
     	extractors:[
   			new load.JsonPathExtractor("products",`$.products[*].abbreviation`, true)         	
        ]        
    });
    const webResponse219 = await webRequest219.send();
    
    
    let randomStockIndex = Math.floor(Math.random() * webResponse219.extractors['products'].length);
    let stock = webResponse219.extractors['products'][randomStockIndex];    

	load.log(`${stock}`);
    
    const webRequest220 = new load.WebRequest({
        id: 220,
        url: `${protocol}://${host_0}/api/stocks/notinwatchlist?`,
        method: "GET",
        headers: {
            "accept": "application/json, text/plain, */*",
            "authorization": `Bearer ${load.extractors['token']}`,
            "content-type": "application/json",
            "referer": `${protocol}://${host_0}/stocks`,
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin"
        },
    });
    const webResponse220 = await webRequest220.send();

    const webRequest221 = new load.WebRequest({
        id: 221,
        url: `${protocol}://${host_0}/api/stocks/watchlist/prices`,
        method: "GET",
        headers: {
            "accept": "application/json, text/plain, */*",
            "authorization": `Bearer ${load.extractors['token']}`,
            "content-type": "application/json",
            "referer": `${protocol}://${host_0}/stocks`,
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin"
        },
        queryString: {
            "period": "week"
        },
    });
    const webResponse221 = await webRequest221.send();

    const webRequest222 = new load.WebRequest({
        id: 222,
        url: `${protocol}://${host_0}/api/stocks/portfolio/summary?`,
        method: "GET",
        headers: {
            "accept": "application/json, text/plain, */*",
            "authorization": `Bearer ${load.extractors['token']}`,
            "content-type": "application/json",
            "referer": `${protocol}://${host_0}/stocks`,
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin"
        },
    });
    const webResponse222 = await webRequest222.send();

    const webRequest223 = new load.WebRequest({
        id: 223,
        url: `${protocol}://${host_0}/api/stocks/portfolio/week?`,
        method: "GET",
        headers: {
            "accept": "application/json, text/plain, */*",
            "authorization": `Bearer ${load.extractors['token']}`,
            "content-type": "application/json",
            "referer": `${protocol}://${host_0}/stocks`,
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin"
        },
    });
    const webResponse223 = await webRequest223.send();

    const webRequest224 = new load.WebRequest({
        id: 224,
        url: `${protocol}://${host_0}/api/stocks/portfolio?`,
        method: "GET",
        headers: {
            "accept": "application/json, text/plain, */*",
            "authorization": `Bearer ${load.extractors['token']}`,
            "content-type": "application/json",
            "referer": `${protocol}://${host_0}/stocks`,
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin"
        },
    });
    const webResponse224 = await webRequest224.send();

    const webRequest225 = new load.WebRequest({
        id: 225,
        url: `${protocol}://${host_0}/api/stocks/portfolio/prices`,
        method: "GET",
        headers: {
            "accept": "application/json, text/plain, */*",
            "authorization": `Bearer ${load.extractors['token']}`,
            "content-type": "application/json",
            "referer": `${protocol}://${host_0}/stocks`,
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin"
        },
        queryString: {
            "numberofstocks": "3",
            "period": "week"
        },
    });
    const webResponse225 = await webRequest225.send();

    T20.stop();

// ----------------------------------------
    
    const T21 = new load.Transaction("Open stock");

    T21.start();

    const webRequest226 = new load.WebRequest({
        id: 226,
        url: `${protocol}://${host_0}/api/currency`,
        method: "GET",
        headers: {
            "accept": "application/json, text/plain, */*",
            "authorization": `Bearer ${load.extractors['token']}`,
            "content-type": "application/json",
            "referer": `${protocol}://${host_0}/stocks/`,
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin"
        },
        queryString: {
          	"from": `${twodaysago}`,
            "to": `${yesterday}`                 },
    });
    const webResponse226 = await webRequest226.send();

    const webRequest227 = new load.WebRequest({
        id: 227,
        url: `${protocol}://${host_0}/api/stocks/portfolio?`,
        method: "GET",
        headers: {
            "accept": "application/json, text/plain, */*",
            "authorization": `Bearer ${load.extractors['token']}`,
            "content-type": "application/json",
            "referer": `${protocol}://${host_0}/stocks/`,
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin"
        },
    });
    const webResponse227 = await webRequest227.send();

    const webRequest228 = new load.WebRequest({
        id: 228,
        url: `${protocol}://${host_0}/api/stocks/products/${stock}`, // M
        method: "GET",
        headers: {
            "accept": "application/json, text/plain, */*",
            "authorization": `Bearer ${webResponse9.extractors['token']}`,
            "content-type": "application/json",
            "referer": `${protocol}://${host_0}/stocks/`,
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin"
        },
        queryString: {
            "duration": "1",
            "period": "week"
        },
    	extractors: [
             new load.JsonPathExtractor("stockInfo","$"),
             new load.JsonPathExtractor("buyPrice","$.currentPrice.buyValue"),             
       	]
        
    });
    const webResponse228 = await webRequest228.send();

    load.log(load.extractors['stockInfo']);
    
    T21.stop();    
//-----------------------------------------    

	let amount = load.extractors['buyPrice'] * 2;
	
	load.log(`Buy 2 stock shares for: [${amount}] USD`);

    const T22 = new load.Transaction("Buy");

    T22.start();

    const webRequest230 = new load.WebRequest({
        id: 230,
        url: `${protocol}://${host_0}/api/stocks/portfolio/buy`,
        method: "POST",
        headers: {
            "accept": "application/json, text/plain, */*",
            "authorization": `Bearer ${load.extractors['token']}`,
            "content-type": "application/json",
            "origin": `${protocol}://${host_0}`,
            "referer": `${protocol}://${host_0}/stocks/M`,
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin"
        },
        body: {
            "stockAbr": `${stock}`, 
            "fromAccount": `${load.extractors['iban']}`,
            "balance": `${load.extractors['balance']}`, 
            "amount": -amount, 
            "currencyCode": "USD"
        },
    });
    const webResponse230 = await webRequest230.send();

    
    T22.stop();
    
    load.log(webResponse230.status);
    
//-----------------------------------------


  	const T23 = new load.Transaction("My Portfolio");


  	T23.start();
  	
    const webRequest235 = new load.WebRequest({
        id: 235,
        url: `${protocol}://${host_0}/api/stocks/portfolio/summary?`,
        method: "GET",
        headers: {
            "accept": "application/json, text/plain, */*",
            "authorization": `Bearer ${load.extractors['token']}`,
            "content-type": "application/json",
            "referer": `${protocol}://${host_0}/stocks`,
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin"
        },
    });
    const webResponse235 = await webRequest235.send();

    const webRequest236 = new load.WebRequest({
        id: 236,
        url: `${protocol}://${host_0}/api/stocks/portfolio/week?`,
        method: "GET",
        headers: {
            "accept": "application/json, text/plain, */*",
            "authorization": `Bearer ${load.extractors['token']}`,
            "content-type": "application/json",
            "referer": `${protocol}://${host_0}/stocks`,
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin"
        },
    });
    const webResponse236 = await webRequest236.send();

    const webRequest237 = new load.WebRequest({
        id: 237,
        url: `${protocol}://${host_0}/api/stocks/portfolio?`,
        method: "GET",
        headers: {
            "accept": "application/json, text/plain, */*",
            "authorization": `Bearer ${load.extractors['token']}`,
            "content-type": "application/json",
            "referer": `${protocol}://${host_0}/stocks`,
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin"
        },
        extractors: [
        	 new load.JsonPathExtractor("portfolio","$.reports[*]", true),
        	 new load.JsonPathExtractor("items","$.reports[*].abbreviation", true),
        	 new load.JsonPathExtractor("values","$.reports[*].value", true)
        ]
    });
    const webResponse237 = await webRequest237.send();

    T23.stop();

    load.log(load.extractors['portfolio'].length);
    
    
    if (load.extractors['portfolio'].length > 0) {
    
    	let stockAbr = load.extractors['items'][0];
    	let saleValue = load.extractors['values'][0];
    	
//-----------------------------------------

    const T24 = new load.Transaction("Sell");

    T24.start();

    const webRequest239 = new load.WebRequest({
        id: 239,
        url: `${protocol}://${host_0}/api/accounts?`,
        method: "GET",
        headers: {
            "accept": "application/json, text/plain, */*",
            "authorization": `Bearer ${load.extractors['token']}`,
            "content-type": "application/json",
            "referer": `${protocol}://${host_0}/stocks`,
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin"
        },
        extractors: [
            // Source='Record scan' Original value="AB87ADVB991648030179761"
            new load.JsonPathExtractor("iban",'$.data[?(@.name=="Current USD")].iban'),             
            // Source='Record scan' Original value=439391.28
            new load.JsonPathExtractor("balance",'.data[?(@.name=="Current USD")].balance'), 
        ],
    });
    const webResponse239 = await webRequest239.send();

    const webRequest240 = new load.WebRequest({
        id: 240,
        url: `${protocol}://${host_0}/api/stocks/portfolio/sell`,
        method: "POST",
        headers: {
            "accept": "application/json, text/plain, */*",
            "authorization": `Bearer ${load.extractors['token']}`,
            "content-type": "application/json",
            "origin": `${protocol}://${host_0}`,
            "referer": `${protocol}://${host_0}/stocks`,
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin"
        },
        body: {
            "stockAbr": `${stockAbr}`,
            "fromAccount": `${load.extractors['iban']}`,
            "balance": `${load.extractors['balance']}`, 
            "amount": `${saleValue}`, 
            "currencyCode": "USD"
        },
    });
    const webResponse240 = await webRequest240.send();


	T24.stop();
	
	}
    
//-----------------------------------------

	const T25 = new load.Transaction("Today transactions");

    T25.start();

   const webRequest241 = new load.WebRequest({
        id: 241,
        url: `${protocol}://${host_0}/api/accounts/${load.extractors['iban']}/transactions`,
        method: "GET",
        headers: {
            "accept": "application/json, text/plain, */*",
            "authorization": `Bearer ${load.extractors['token']}`,
            "content-type": "application/json",
            "referer": `${protocol}://${host_0}/accounts/transactions`,
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin"
        },
        queryString: {
            "from": `${today}`, 
            "iban": `${load.extractors['iban']}`,
            "to": `${today}`, 
            "transaction_type": "all"
        },
        extractors: [
            new load.JsonPathExtractor("stockTransactions",'$.data[?(@.recipient=="Stocks trading")]',true),             
        ],
    });
    const webResponse241 = await webRequest241.send();

	T25.stop();
	
	load.extractors['stockTransactions'].forEach((transaction) => {
    	load.log(`Transaction: [${transaction.id}] Type: [${transaction.transaction_type}] Reference: [${transaction.reference}] [credit: ${transaction.credit}, debit: ${transaction.debit}] [Details: ${transaction.details}]`);
	});
	
//-----------------------------------------

	const transaction8 = new load.Transaction("Logout");

    transaction8.start();

    const webRequest49 = new load.WebRequest({
        id: 49,
        url: `${protocol}://${host_0}/api/currencies?`,
        method: "GET",
        headers: {
            "accept": "application/json, text/plain, */*",
            "content-type": "application/json",
            "referer": `${protocol}://${host_0}/`,
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin"
        },
    });
    const webResponse49 = await webRequest49.send();

    const webRequest50 = new load.WebRequest({
        id: 50,
        url: `${protocol}://${host_0}/api/stocks/products?`,
        method: "GET",
        headers: {
            "accept": "application/json, text/plain, */*",
            "content-type": "application/json",
            "referer": `${protocol}://${host_0}/`,
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin"
        },
    });
    const webResponse50 = await webRequest50.send();

    const webRequest51 = new load.WebRequest({
        id: 51,
        url: `${protocol}://${host_0}/api/stocks/products/BABA`,
        method: "GET",
        headers: {
            "accept": "application/json, text/plain, */*",
            "content-type": "application/json",
            "referer": `${protocol}://${host_0}/`,
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin"
        },
        queryString: {
            "duration": "6",
            "period": "month"
        },
    });
    const webResponse51 = await webRequest51.send();

    const webRequest52 = new load.WebRequest({
        id: 52,
        url: `${protocol}://${host_0}/api/stocks/products/NVDA`,
        method: "GET",
        headers: {
            "accept": "application/json, text/plain, */*",
            "content-type": "application/json",
            "referer": `${protocol}://${host_0}/`,
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin"
        },
        queryString: {
            "duration": "6",
            "period": "month"
        },
    });
    const webResponse52 = await webRequest52.send();

    const webRequest53 = new load.WebRequest({
        id: 53,
        url: `${protocol}://${host_0}/api/stocks/products/AAPL`,
        method: "GET",
        headers: {
            "accept": "application/json, text/plain, */*",
            "content-type": "application/json",
            "referer": `${protocol}://${host_0}/`,
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin"
        },
        queryString: {
            "duration": "6",
            "period": "month"
        },
    });
    const webResponse53 = await webRequest53.send();

    const webRequest54 = new load.WebRequest({
        id: 54,
        url: `${protocol}://${host_0}/api/currency`,
        method: "GET",
        headers: {
            "accept": "application/json, text/plain, */*",
            "content-type": "application/json",
            "referer": `${protocol}://${host_0}/`,
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin"
        },
        queryString: {
           	"from": `${twodaysago}`,
            "to": `${yesterday}`            	
        },
    });
    const webResponse54 = await webRequest54.send();

    transaction8.stop();

});

load.finalize("Finalize", async function () {
});
