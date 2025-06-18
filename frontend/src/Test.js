import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Test() {
    const [test, setTest] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/getAllUser')
            .then(response => setTest(response.data))
            .catch(error => console.log(error));
    }, []);

    return (
        <div>
            <h2>
                {test.map(user => <li key={user.userId}>{user.userName}</li>)}
            </h2>
        </div>
    )
}

export default Test;