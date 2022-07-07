import React from 'react'

export default function Guess({word , guess, isGuessed}) {
  return (
    <div className="grid grid-cols-5 gap-1 mt-2"> 
        {new Array(5).fill(0).map((_, i) => {
            const bgColor = !isGuessed 
            ?'bg-black'
            : guess[i] === word[i]
            ? 'bg-green-400' 
            : word.includes(guess[i]) 
            ? 'bg-yellow-400'
            : 'bg-black'
            return(      
                <div className={`h-10 w-10 border border-gray-200 ${bgColor} text-white flex justify-center items-center uppercase font-bold`}>{guess[i]}</div>
            )
            })}

    </div>
  )
}