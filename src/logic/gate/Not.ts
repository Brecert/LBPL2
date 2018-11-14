import Range from "../../util/Range";
import Gate from "../Gate";

export default class Not extends Gate {
  constructor() {
    super()
    this.properties.inputs = { value: 1, range: 1 }
  }

  updateOutput() {
  	if(this.input == 0) {
  		this.output = 100
  	} else {
    	this.output = -this.input
    }
  }
}
