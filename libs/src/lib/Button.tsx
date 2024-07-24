import { useAtomValue } from 'jotai'
import React from 'react'
import { countAtom } from './index'
const Button = ({ title }: { title: string }) => {
  const value = useAtomValue(countAtom)
  return (
    <div>{title} - atom -value -{value} </div>
  )
}

export default Button
