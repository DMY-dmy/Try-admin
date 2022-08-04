import {handleGet,handlePost,handleDelete} from '@/utils/http-model';
// import host from '@/utils/host';
/**
 * 获取商品列表
 */
export const getPruData = () => {
    return handleGet("/get")
}
// 删除数据
export const delPruData = () => {
    return handleDelete("/delete")
}

// 增加数据
export const addPruData = () => {
    return handlePost("/add")
}