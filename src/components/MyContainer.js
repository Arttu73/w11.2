import MyList from './MyList'
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

function MyContainer() {

    const { t } = useTranslation();

    const [items, setItems] = useState([
        { id: "1", text: "This is an item", clicked: false },
        { id: "2", text: "Also this", clicked: false },
    ]);
    const [text, setText] = useState('')

    const updateItem = (id) => {
        setItems(prevItems => 
            prevItems.map(item => 
                item.id === id ? { ...item, clicked: !item.clicked } : item
            )
        );    
    }  
    
    const onClick = () => {
        const newItem = {
            id: (items.length + 1).toString(),
            text: text.trim(),
            clicked: false
        };
        setItems([...items, newItem]);
        setText('');
    };

    return (
        <div>
            <div>{t('This is the front page')}</div>
            <MyList
                header="This is my list."
                items={items}
                updateItem={updateItem}
            />
            <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter new item text"
            />
            <button onClick={onClick}></button>
        </div>
    );
}

export default MyContainer;