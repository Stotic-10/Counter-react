import { useState, useEffect } from 'react';

function Counter() {
    
    const [count, setCount] = useState(() => {
        const savedCount = localStorage.getItem('count');
        return savedCount !== null ? parseInt(savedCount, 10) : 0;
    });

    useEffect(() => {
        localStorage.setItem('count', count);
    }, [count]);

    const handleCounterP = () => {
        setCount((c) => c - 1);
    };

    const handleCounterN = () => {
        setCount((c) => c + 1);
    };

    const handleReset = () => {
        setCount(0);
    };

    return (
        <>
            <div style={{ marginLeft: '45%', marginTop: '20%' }}>
                <h2 style={{ marginLeft: '1%' }}>Counter React App</h2>
                <h1 style={{ color: 'black', paddingLeft: '70px' }}>{count}</h1>

                <button
                    style={{
                        color: 'white',
                        fontSize: 'large',
                        backgroundColor: 'black',
                        marginRight: '3%',
                    }}
                    onClick={handleCounterP}
                >
                    Prev
                </button>
                <button
                    style={{
                        color: 'white',
                        fontSize: 'large',
                        backgroundColor: 'green',
                        marginRight: '3%',
                    }}
                    onClick={handleCounterN}
                >
                    Next
                </button>
                <button
                    style={{
                        color: 'white',
                        fontSize: 'large',
                        backgroundColor: 'red',
                    }}
                    onClick={handleReset}
                >
                    Reset
                </button>
            </div>
        </>
    );
}

export default Counter;
