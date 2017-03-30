import _ from 'lodash'

// mock data
let tags = [
  {
    id: 1,
    text: 'JavaScript'
  },
  {
    id: 2,
    text: 'CSS'
  }
]

const find = () => tags

const findById = id => _.find(tags, { id })

export default { find, findById }
