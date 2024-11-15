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
        
        if (index < 0 || index >= _size) throw Error("Index Out Of Bounds")

        let i = 0
        let node = _head
        while (i < index) {
            node = node.next()
            i++
        }

        return node
    }

    const pop = () => {
        if (_size <= 0) return

        if (_size > 1) {
            _tail = at(_size - 2)
            _tail.updateNextNode(null)
        } else {
            _head = null
            _tail = null
        }
        
        _size--
    }

    const containsAt = (value) => {
        for (let i = 0; i < _size; i++) {
            if (at(i).value() === value) {
                return {contains: true, at: i}
            }
        }
        return {contains: false, at: -1}
    }

    const contains = (value) => {
        return containsAt(value).contains
    }

    const find = (value) => {
        return containsAt(value).at
    }

    const toString = () => {
        if (_size > 0) {
            console.log(nodeToString(_head))
        } else {
            console.log("null")
        }
    }

    const nodeToString = (node) => {
        if (node.next() === null) {
            return `( ${node.value()} ) -> null`
        }
        return `( ${node.value()} ) -> ${nodeToString(node.next())}`
    }

    const insertAt = (value, index) => {
        if (index < 0 || index >= _size) throw Error("Index Out Of Bounds")

        if (index === 0) {
            prepend(value)
        } else {
            const nodeAtIndex = at(index)
            const newNode = node(value, nodeAtIndex)
            at(index - 1).updateNextNode(newNode)
            
            _size++
        }
    }

    const removeAt = (index) => {
        if (_size <= 0) return
        if (index < 0 || index >= _size) throw Error("Index Out Of Bounds")
        
        if (_size > 1) {
            if (index === 0) {
                _head = _head.next()
            } else {
                const nodeToRemove = at(index)
                at(index - 1).updateNextNode(nodeToRemove.next())
            }
            _size--
        } else {
            pop()
        }        
    }

    const size = () => _size
    const head = () => _head
    const tail = () => _tail

    return {toString, append, prepend, size, head, tail, at, pop, contains, find, insertAt, removeAt}
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