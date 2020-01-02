import axios from 'axios'


const state = {
    logsList:[]
}

const mutations = {
    setLogsList(state,data){
        state.logsList=data;
    }
}

const actions = {
    async findPageLogs(context,data){
        await axios({
            method:'get',
            url:'http://localhost:8888/FireDataDisplay?pageNum=1&pageSize=1000'
        }).then((res)=>{
            console.log(res.data.data.list)
            context.commit('setLogsList',res.data.data.list)
        })
    }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

