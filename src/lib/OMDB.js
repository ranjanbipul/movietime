import Request from './request';

export default class OMDB{  
  static HOST = "//www.omdbapi.com";
  
  static API_ID = "tt3896198";
  
  static API_KEY = "940d60f2";
  
  static movies(search){
    return Request.get(this.HOST,{
      i: this.API_ID,
      apikey: this.API_KEY,
      s: search,
      page: 1
    }).then(json => json.Search);
  }
}