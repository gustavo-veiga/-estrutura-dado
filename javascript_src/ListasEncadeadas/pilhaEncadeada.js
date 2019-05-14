function StackLinked() {

    let ptTopo = null
    let ptInicio = null
    let lenght = 0

    // Construtor de secoes da pilha
    const Section = (value) => {
        return {
            value,
            next: null
        }
    }
    
    const isEmpty = () => {
        if (lenght === 0) {
            return true
        }
        return false
    }

    const pushValue = (value) => {
        if (isEmpty()) {
            ptTopo = Section(value)
            ptInicio = ptTopo
            lenght++
            return ptTopo
        }

        let stackHere = ptInicio
        while (stackHere.next) {
            stackHere = stackHere.next
        }

        stackHere.next = Section(value)
        ptTopo = stackHere
        lenght++

        return ptTopo

    }

    const remove = () => { //Todo add logica de remocao
        if (isEmpty()) {
            return null
        }

        return console.log('Poderia ate remover, mais nao to afim')

    }

    // Interface publica
    return {
        lenght: () => console.log(lenght),
        stackLook: () => console.log(ptInicio),
        topLook: () => console.log(ptTopo.next.value),
        pushValue: (value) => pushValue(value),
        remove: () => remove(),
        isEmpty: () => isEmpty()
    }
    
}

const stack = StackLinked()

stack.pushValue(10)
stack.pushValue(20)
stack.pushValue(30)
stack.pushValue(40)
stack.pushValue(50)

stack.remove()

stack.lenght()
stack.stackLook()
stack.topLook()
