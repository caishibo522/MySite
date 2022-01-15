import {getSetting} from "@/api/setting";
import titleControlle from "../utils/titleControlle";
export default {
  namespaced: true,
  state:{
    loading:false,
    data: null,
  },
  mutations: {
    setLoading(state,payload) {
      state.loading = payload;
    },
    setData(state, payload) {
      state.data = payload;
    }
  },
  actions: {
    async fetchSetting(ctx) {
      ctx.commit('setLoading',true)
      const resp = await getSetting();
      ctx.commit('setData',resp);
      ctx.commit('setLoading',false)
      if(resp.siteTitle) {
        titleControlle.setStoreTitle(resp.siteTitle);
      }
    }
  }
}