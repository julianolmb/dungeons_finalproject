import axios from "axios";
const url = "http://localhost:3001";

export class ApiClient {
  constructor(tokenProvider,logoutHandler){
    this.tokenProvider = tokenProvider;
    this.logoutHandler = logoutHandler;
  }


  authenticatedCall(method,url,data){
    return axios({
      method,
      url,
      headers: {
        authorization: "weliketoplaydungeonsanddragons"
      },
      data,
    }).catch((error) => {
    console.log(error);
    }
    );
  }

  apiCall(method, url, data) {
    return axios({
      method,
      url,
      data,
    }).catch((error) => {
      throw error;
    });
  }

  getQuotes() {
    return this.authenticatedCall("get", url + "/quotes");
  }

  getRecipes() {
    return this.authenticatedCall("get", url + "/recipes");
  }

  getTales() {
    return this.authenticatedCall("get", url + "/tales");
  }
}
