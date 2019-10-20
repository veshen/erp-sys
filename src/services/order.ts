import request from '@/utils/request';
import { markUrl } from '@/utils/utils'
export interface QuertOrderParamsType {

}

export async function queryOrderList(params: QuertOrderParamsType) {
  return request(markUrl('/op/order/query',params));
}
