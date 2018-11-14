import RootNode from './RootNode'

export default class Gate extends RootNode {
  constructor() {
    super();
    this.properties.inputs = { value: 1, range: 1 };
    this.properties.outputs = { value: 1, range: 1 };
  }
}
