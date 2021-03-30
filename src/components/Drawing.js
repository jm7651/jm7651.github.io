import React, { useState, useCallback } from 'react'
import { useTransition, animated } from 'react-spring'
import './Drawing.css'

const pages = [
  ({ style }) => <animated.div style={{ ...style }}>a</animated.div>,
  ({ style }) => <animated.div style={{ ...style}}>B</animated.div>,
  ({ style }) => <animated.div style={{ ...style}}>C</animated.div>,
  ({ style }) => <animated.div style={{ ...style}}>d</animated.div>,
  ({ style }) => <animated.div style={{ ...style}}>e</animated.div>,
  ({ style }) => <animated.div style={{ ...style}}>f</animated.div>,
  ({ style }) => <animated.div style={{ ...style}}>g</animated.div>,
  ({ style }) => <animated.div style={{ ...style}}>h</animated.div>,
  ({ style }) => <animated.div style={{ ...style}}>i</animated.div>,
  ({ style }) => <animated.div style={{ ...style}}>j</animated.div>
]

function Drawing() {
  const [index, set] = useState(0)
  const onClick = useCallback(() => set(state => (state + 1) % 10), [])
  const transitions = useTransition(index, p => p, {
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  })
  return (
    <div className="simple-trans-main" onClick={onClick}>
      {transitions.map(({ item, props, key }) => {
        const Page = pages[item]
        return <Page key={key} style={props} />
      })}
    </div>
  )
}

export default Drawing