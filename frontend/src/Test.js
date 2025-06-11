import React, { useEffect, useState } from 'react';

function Test() {
    const [test, setTest] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/api/testing')
        .then(response => response.json())
        .then(data => setTest(data))
        .catch(error => console.error('womp womp'))
    }, []);

    return (
        <div>
            <h2>
                {test}
            </h2>
        </div>
    )
}

export default Test;