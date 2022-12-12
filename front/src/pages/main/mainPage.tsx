import React, { useState } from 'react'
import { getTest } from 'api/mainApi'

function MainPage() {
    // =============== TEST CODE ===============
    const [test, setTest] = useState('')
    getTest('').then((result) => {
        setTest(result.data.msg)
    })
    // =========================================

    return (
        <div>
            <p>MainPage</p>
            <p>{test}</p>
        </div>
    )
}

export default MainPage
