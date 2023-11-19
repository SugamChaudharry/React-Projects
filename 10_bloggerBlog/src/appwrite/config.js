import config from "../config.js";
import { Client, ID , Databases , Query , Storage } from "appwrite";

export class Service {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client.setEndpoint(config.appwriteUrl).setProject(config.appwriteProjectId);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }
  async createPost({ title, content, slug, freturedImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug,
        {
          title,
          content,
          freturedImage,
          status,
          userId,
        }
      );
    } catch (error) {
      console.log("Appwrite Service :: createPost :: error", error);
    }
  }
  async updatePost(slug, { title, content, freturedImage, status }) {
    try {
      return await this.databases.updateDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug,
        {
          title,
          content,
          freturedImage,
          status,
        }
      );
    } catch (error) {
      console.log("Appwrite Service :: updatePost :: error", error);
    }
  }
  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug
      );
      return true;
    } catch (error) {
      console.log("Appwrite Service :: deletePost :: error", error);
      return false;
    }
  }
  async getPost(slug) {
    try {
      return await this.databases.getDocument
      (
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug
      );
    } catch (error) {
      console.log("Appwrite Service :: getPost :: error", error);
      return false;
    }
  }
  async getPosts(queries = [Query.equal("status" , "active")]) {
    try {
        await this.databases.listDocuments
    (
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        queries,
    )
        
    } catch (error) {
      console.log("Appwrite Service :: getPosts :: error", error);
      return false;
    }
  }

  // file uplode service

  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        config.appwriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log("Appwrite Service :: uploadFile :: error", error);
      return false;
    }
  }
  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile
      (
        config.appwriteBucketId, 
        fileId
      );
      return true;
    } catch (error) {
      console.log("Appwrite Service :: deleteFile :: error", error);
      return false;
    }
  }
  filepreview(fileId) {
    return this.bucket.getFilePreview(config.appwriteBucketId, fileId);
  }
  downlodeFile(fileId) {
    return this.bucket.getFileDownload(config.appwriteBucketId, fileId);
  }
};

const service = new Service();

export default service;