import{
    getPruData,
    delPruData,
    addPruData
}from   '../../api/product.js';

export default {
    state:{
        disappear:false
    },
    mutations:{

    },
    actions:{
        getPruData(store,params){
            return getPruData(params);
        },
        delPruData(store,params){
            return delPruData(params);
        },
        addPruData(store,params){
            return addPruData(params);
        }
        
    }
}