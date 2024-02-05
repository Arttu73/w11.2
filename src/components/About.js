import React, { useState, useEffect } from "react";


function About() {

    const [items, setItems] = useState([]);

    useEffect(() => {
        let mounted = true;
        async function doStuff() {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/posts");
                const data = await response.json(); 
                
                if (mounted) {
                    const formattedData = data.map(item => ({ id: item.id, title: item.title }));
                    setItems(formattedData);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        doStuff();

        return () => {
            mounted = false;
        };

    }, []);
   
    return (
        <div>
            <h2>About</h2>
            <ul>
                {someStuff.map(item => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default About;

