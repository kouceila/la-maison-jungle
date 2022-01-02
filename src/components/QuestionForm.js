import { useState } from 'react'

function QuestionForm() {
    const [inputValue, setInputValue] = useState('Posez votre question ici')
    return (
        <div>
            <textarea
                value={inputValue}
                onChange={(e) => {
                    if (!e.target.value.includes("f"))
                        setInputValue(e.target.value)}}
            />
            <button onClick={() => alert(inputValue)}>Alertez moi 🚨</button>

        </div>
    )
}


function handleSubmit(e){
    e.preventDefault()
    alert(e.target['my_input'].value)
}

export default QuestionForm;