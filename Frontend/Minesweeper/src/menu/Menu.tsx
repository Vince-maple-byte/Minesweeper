import React from 'react';
import { Link } from 'react-router-dom';

export default function Menu() {
    let name: string = "xxl";
    
    return (
        <div className='bg-grey h-screen w-screen flex flex-col items-center justify-center'>
            <div className='bg-blue-300 text-white border border-white border-solid rounded mb-14 py-8 px-16'>
                <h1 className={`text-${name}`}>Minesweeper</h1>
            </div>
            <div className='flex flex-row w-screen justify-evenly'>
                <Link className='game--select' to={`/game`}>Easy</Link>
                <Link className='game--select' to={`/game`}>Medium</Link>
                <Link className='game--select' to={`/game`}>Hard</Link>
            </div>
        </div>
    )
}