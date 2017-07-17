// stack
import Stack from '../mwx/stack'

export default {
  update() {
    const vm = Stack.page()
    const data = vm.data
    const description = data.description
    const products = data.products
    const id = data.group.id
    const typeId = data.type_id
    const image = data.image
    let arr = []
    const len = image.length
    let i
    for (i = 0; i < len; i += 1) {
      const item = image[i]
      if (item) {
        arr.push(item)
      }
    }

    if (!arr.length) {
      arr = ''
    }

    arr = arr.toString()

    const obj = {
      id,
      description,
      products,
      image: arr,
      type_id: typeId,
    }

    return obj
  },
}