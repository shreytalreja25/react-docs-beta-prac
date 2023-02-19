import { useState } from "react"

export default function Feedbackform() {
    
    const[score,setScore] = useState("10");
    const[comment,setComment] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(Number(score) <=5 && comment.length <=10){
            setComment("");
            alert("Please provide a more detailed comment explaining why the experience was less than satisfactory. Appreciate your feedback...")
        }

        else {
                alert("Submitted Successfully")
                setComment("");
                setScore("10");
            }
    }

    return (
        <div className="ControlledForm">
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <h2>Feedback Form</h2>
                    <label>
                        Score :
                    </label>
                    <input
                        type="range"
                        min="0" 
                        max="10" 
                        value={score} 
                        onChange={e => setScore(e.target.value)}
                    />
                </fieldset>
                <fieldset>
                    <label>
                        Valuable Comments :
                    </label>
                    <textarea
                     type="textarea" 
                     value={comment} 
                     onChange={e => setComment(e.target.value)}
                    />
                    <br />
                    <button type="submit">Submit</button>
                </fieldset>
            </form>
        </div>
    )
}