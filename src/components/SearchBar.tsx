import React from 'react';

interface Props{
    value: string;
    onChange: (val:string) => void;
}

const SearchBar: React.FC<Props> = ({value, onChange}) =>{
    return (
        <input
            type="text"
            placeholder="Search..."
            value={value}
            onChange={(e)=>onChange(e.target.value)}
            className="w-full h-8"
        >
        </input>
    )
}
export default SearchBar