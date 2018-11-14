import Chip from './logic/Chip'
import Not from './logic/gate/Not'
import Print from './logic/node/print'


let chip = new Chip()
let n = new Not()
let p = new Print()
p.properties.value = "Hello World!"

chip.addNode(n)
n.connections.push({id: 0, output: 0, input: 0})

chip.addNode(p)
n.connections.push({id: 1, output: 0, input: 0})

chip.walkNodes()
chip.walkNodes()