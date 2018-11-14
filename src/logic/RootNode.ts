import { NON } from './globals'
import { setDefaultValue } from '../util/Array'
import Range from '../util/Range'

export interface InputOutput {
  value: number
  range: number
  name?: ConnectionNames
}

export interface Properties {
  inputs: InputOutput
  outputs: InputOutput
}

export interface Connection {
  id: string | number
  output: number
  input: number
}

export interface ConnectionNames {
  [key:number]: string
}

// generic Node class
export default class RootNode {
  inputs:  number[]
  outputs: number[]
  // properties: Properties
  properties: Properties
  connections: Connection[]

  constructor() {
    // Range or Int
    this.inputs = setDefaultValue([], NON)
    this.outputs = setDefaultValue([], NON)

    // Properties are values that are publically tweakable in the
    // node context menu
    // They must always have a default value
    this.properties = {
      // Inputs: Settable amount of inputs within the inputRange
      // If inputRange is not a range, amount is not settable.
      // Input range is how many inputs can be added to the Node (in properties)
      // It accepts range or an Int, however if it is an int, the input amount will not be shown in properties and the value will remain locked.
      inputs: { value: 0, range: 0 },
      // Same as inputs but outputs
      outputs: { value: 0, range: 0 }
    };

    // An array of nodes that the node is connected to
    this.connections = []
  }

  updateConnections() {
    for (let c of this.connections) {
      // c.inputs = this.outputs
    }
  }

  // update output
  updateOutput() {
    this.outputs = this.inputs
  }

  // Methods to make it easy to get and return input
  // in the future
  // Also make it easier to create middleware.
  set input(values) {
    (this.inputs[0] = values)
  }

  get input() {
    return this.inputs[0];
  }

  set output(values) {
    (this.outputs[0] = values)
  }

  get output() {
    return this.outputs[0];
  }
}
