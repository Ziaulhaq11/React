import React, {useState, useEffect} from 'react';

const Numbers = () => {
    const [numbers, setNumbers] = useState(['one', 'two', 'three'])
    const [letters, setLetters] = useState(['a', 'b', 'c'])

    const addNumber = () => {
        setNumbers([...numbers,'Four'])
    }

    const addLetter = () => {
        setLetters([...letters,'d'])
    }

    useEffect(() => {
        console.log('Use Effect triggered only on numbers')
    }, [numbers, letters]) //If we put blank Array this will trigger once at start. if we dont include it will triggered for all the states

    return (
        <div>
            <h1>Numbers</h1>
            {numbers.map(num => {
                return (
                    <h3>{num}</h3>
                )
            })}
            <button onClick={addNumber}>Add a Number</button>
            <h1>Letters</h1>
            {letters.map(num => {
                return (
                    <h3>{num}</h3>
                )
            })}
            <button onClick={addLetter}>Add a Letter</button>
        </div>
    )
}

export default Numbers;