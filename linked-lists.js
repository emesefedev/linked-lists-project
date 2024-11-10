function linkedList () {
    let _head = null
    let _tail = null
    
    let _size = 0

    const append = (value) => {
        const newNode = node(value)
        if (_size === 0) {
            _head = newNode
            _tail = newNode
        } else if (_size === 1) {
            _head.updateNextNode(newNode)
            _tail = newNode
        } else {
            _tail.updateNextNode(newNode)
            _tail = newNode
        }

        _size++
    }

    const prepend = (value) => {
        const prevHead = _head
        _head = node(value, prevHead)

        _size++
    }

    const at = (index) => {
        if (index <0 || index >= size) return "Error! Index out of bounds"

        let i = 0
        let node = _head
        while (i < index) {
            node = node.next()
            i++
        }

        return node
    }

    const pop = () => {


        _size--
    }

    const contains = (value) => {

    }

    const find = (value) => {

    }

    const toString = () => {
        console.log(nodeToString(_head))
    }

    const nodeToString = (node) => {
        if (node.next() === null) {
            return `( ${node.value()} ) -> null`
        }
        return `( ${node.value()} ) -> ${nodeToString(node.next())}`
    }

    const size = () => _size
    const head = () => _head
    const tail = () => _tail

    return {toString, append, prepend, size, head, tail, at}
}

function node (val = null, nextNode = null) {

    let _value = val
    let _nextNode = nextNode

    const updateValue = (newValue) => {
        _value = newValue
    }

    const updateNextNode = (newNext) => {
        _nextNode = newNext
    }

    const value = () => _value
    const next = () => _nextNode

    return {value, next, updateValue, updateNextNode}  
}

const link = linkedList()
link.append("9")
link.prepend("7")
link.prepend("3")
console.log(link.at(3).value())
link.toString()