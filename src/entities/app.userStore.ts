import { defineStore } from 'pinia'
import { checkUser } from "~/src/entities/checkUsers";
import { UserStoreState, IUserData} from "~/src/entities/eventTypes";

export const useUserStore = defineStore('app', {
  state: (): UserStoreState => {
    return {
      isLoading: true,
      userResponse: {
        success: false,
      },
      userData: {
        email: '',
        password: ''
      },
    }
  },
  getters: {},
  actions: {
    async login(payload: IUserData) {
      this.userResponse = await checkUser(payload);
      this.userData = payload;
    },
  }
})
