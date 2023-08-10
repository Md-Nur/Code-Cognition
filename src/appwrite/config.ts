import config from "@/config/config";
import { Client, Account, ID, Databases } from "appwrite";

type createUserAccount = {
  username: string;
  email: string;
  password: string;
};

type loginUserAccount = {
  username: string;
  password: string;
};

const appwriteClient = new Client();

appwriteClient
  .setEndpoint(config.app_write_url)
  .setProject(config.app_write_project_id);

export const account = new Account(appwriteClient);

export class AppwriteService {
  // create a new record of use in appwrite database
  async createUserAccount({ username, email, password }: createUserAccount) {
    try {
      const userAccount = await account.create(
        ID.unique(),
        email,
        password,
        username
      );
      if (userAccount) {
        return this.login({ username, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }
  async login({ username, password }: loginUserAccount) {
    try {
      return await account.createEmailSession(username, password);
    } catch (error) {
      throw error;
    }
  }
  async isLogedIn(): Promise<boolean> {
    try {
      const data = await this.getCurrentUser();
      return Boolean(data);
    } catch (error) {}

    return false;
  }
  async getCurrentUser() {
    try {
      account.get();
    } catch (error) {
      console.log(`Current user error: ${error}`);
    }
  }
  async logout() {
    try {
      return await account.deleteSession("current");
    } catch (error) {
      throw error;
    }
  }
}

const appwriteService = new AppwriteService();
export default appwriteService;
