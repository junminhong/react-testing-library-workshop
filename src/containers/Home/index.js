import React from 'react'
import Button from '../../components/Button'
import useCounter from '../../hooks/useCounter'

const Home = () => {
  const { count, increment }  = useCounter(0)
  return (
    <section className="flex flex-col justify-start border m-2 max-w-[760px]">
      <span>計數計區塊</span>
      <span>目前次數: {count}</span>
      <Button onClick={increment} text="計數器"/>  
    </section>
  )
}

export default Home
