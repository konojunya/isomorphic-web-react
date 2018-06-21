import axios, { AxiosInstance } from "axios";
import config from "../config";

/**
 * HTTPのクライアント
 */
class Client {
  private http: AxiosInstance;

  constructor() {
    this.http = axios.create({
      baseURL: config.API_BASE_URL,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }

  public getUsers() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(this.http.get("/users"));
      }, 1000 * 5)
    })
  }
}

export default new Client();
