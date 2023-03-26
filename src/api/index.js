import axios from "axios";
import config from "../config";
class ApiService {
  api;
  static singleton;
  authToken;
  constructor() {
    this.api = axios.create({
      baseURL: config.serverDomain,
    });
    this.authToken = "";
  }

  static getInstance() {
    if (this.singleton) {
      return this.singleton;
    } else {
      this.singleton = new ApiService();
      return this.singleton;
    }
  }

  async getFiles() {
    const data = await this.api.get("/files/data");
    console.log("getFiles", data);
    return data?.data;
  }
}

export default ApiService;
