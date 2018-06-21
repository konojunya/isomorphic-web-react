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
    return this.http.get("/users");
  }
}

export default new Client();
