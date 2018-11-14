import RootNode from '../RootNode'
import { Properties } from '../RootNode'
import isActive from '../../util/isActive'


interface PrintProperties extends Properties {
  value: string | undefined
}

export default class Print extends RootNode {
  properties: PrintProperties

  constructor() {
    super()
    this.properties.inputs = { value: 1, range: 1, name: {1: "activate"} }
    this.properties.value = undefined
  }

  updateOutput() {
    if(isActive(this.input)) {
      if(this.properties.value != undefined) {
        console.log(this.properties.value)
      }
    }
  }
}
