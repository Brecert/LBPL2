import RootNode from './RootNode'

// interface NodeList {
// 	[key:number]: RootNode
// }

export default class Chip extends RootNode {
	nodeList: any

	constructor() {
		super()
		this.nodeList = []
	}

	findNode(node: number | string) {
		return this.nodeList[node]
	}

	walkNodes() {
		for(let id in this.nodeList) {
			let node: RootNode = this.nodeList[id]
			node.updateConnections()
			node.updateOutput()
			for(let connection of node.connections) {
				let foundNode = this.findNode(connection.id)
				if(foundNode != undefined) {
					foundNode.inputs[connection.input] = node.outputs[connection.output]
				}	else {
					throw `Invalid Connection for node ${connection.id}`
				}
			}
		}
	}

	addNode(node: RootNode) {
		// let last = Object.keys(this.nodeList).length
		return this.nodeList.push(node)
	}
}