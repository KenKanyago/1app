import React from 'react'

export default function Card({title, text, color}) {
  return (
    <div>
                <h4 className={`text-xl font-semibold mb-2"`}>{title}</h4>
                <p className={`text-2xl font-bold text-${color}`}>{text}</p>
            </div>
  )
}
