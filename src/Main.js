import { useEffect, useState } from "react";

function Main() {
    const [hajok, setHajok] = useState([]);
    useEffect(() => {
        fetch('http://127.0.0.1:9000/json')
            .then(response => response.json())
            .then(data => setHajok(data))

    }, [])
    return (
        hajok.map((hajo, index) => (
            <div class="pic">
                <img src={hajo.image} alt="Ship"/>
                    <p>{hajo.description}</p>
            </div>

        ))
    );


}

export default Main;