import React from 'react'

const ColorSeparator = ({bgColor, text,color}:ColorSeperatorProps) => {
  return (
    <div className={`${bgColor?bgColor:'bg-[#1975FF] flex justify-center items-center'} border-y-[3px] border-black w-full h-[80px]`}>
        <div className={`text-[2rem] ${color?color:'text-[#fff]'}`}>{text}</div>
    </div>
  )
}

export default ColorSeparator