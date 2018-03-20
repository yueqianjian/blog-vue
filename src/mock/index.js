const Mock = require('mockjs')
const Random = Mock.Random

let mockData = Mock.mock({
    "photoList|1-10": [
        Random.image('200x100', Random.color())
    ]
})
Mock.mock('mock/photoList', 'post', mockData)