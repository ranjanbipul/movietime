class Request {
  
  static get(url,params) {
    return this.xhr(url, params, 'GET');
  }

  static put(url, params) {
    return this.xhr(url, params, 'PUT')
  }

  static post(url, params) {
    return this.xhr(url, params, 'POST')
  }

  static upload(url, params,verb='POST') {
    return this.xhr(url, params, verb,true)
  }

  static delete(url, params) {
    return this.xhr(url, params, 'DELETE')
  }


  static xhr(url, params, verb,multipart=false) {
    let options = {};
    if(verb==="GET"){
      let query = Object.entries(params).map(([key, val]) => `${key}=${val}`).join('&');
      url=url+"?"+query;
    }
    else{
      options = Object.assign({ method: verb}, params ? { body: JSON.stringify(params) } : null );
    }
    // options.headers = {
    //   'Accept': 'application/json',
    //   'Content-Type': 'application/json'
    // };
    return fetch(url, options).then( resp => {
      if (resp.ok) {
        let json = resp.json();
        return json
      }
      throw resp;
    },resp=>{
      console.error(resp)
      throw resp;
    });
  }
}

export default Request;
