
import ajax from './ajax'
import apiConfig from './apiConfig'

class ApiFunction {
  topics(data){
        return ajax.get(apiConfig.topics,data)
    }
    topicsDtail(id,data){
      return ajax.get(apiConfig.detail+id,data)
    }
}

export default new ApiFunction