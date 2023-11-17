import config from "../config.js";
import { Client, ID , Databases , Query , Storage } from "appwrite";

export class Service {
    client = new Client();
    databases;
    storage;

    constructor(){
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.storage = new Storage(this.client);
    }
};

const service = new Service();

export default service;