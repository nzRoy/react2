import React, { useState } from 'react';

const Latte = (props) =>
{
    const [list, setList] = useState([ 
        {
            id: 1,
            name: 'john', 
            gender: 'm'
        } ,
        {
            id: 2,
            name: 'mary', 
            gender: 'f'
        }        
    ]);

    const newData = {
        id: 3,
        name: 'jin', 
        gender: 'm'

    };

    const upData =
    {
        id: 1,
        name: 'jill', 
        gender: 'f'

    };    

    const add = () => setList(list.concat(newData));
    const updata = () => 
    {
        let updateData = [...list];
        updateData[0].name = 'kill';

        setList(updateData);
        
        /*

        let updateData = setList.map((data, index) =>
        {
            if(index == updata.id)
            {
                //return {...data, data.name: updata.name };
            }
        });
        */

    }

    return (
        <div>
            <h1>라떼는 맛있다.</h1>
            {list.map((data, index) => (
                <li key={index}>{data.name} {data.gender}</li>
            ))}
            <button onClick={add}>push</button>
            <button onClick={updata}>update</button>
        </div>

    );
}

export default Latte;