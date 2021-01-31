import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import { WiDaySunny, WiSnowflakeCold } from 'weather-icons-react'

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter'
  } else {
    return lat > 0 ? 'winter' : 'summer'
  }
}
const SeasonDisplay = (props) => {
  const season = getSeason(props.latitude, new Date().getMonth())
  const text = season === 'winter' ? 'Burr, it is chilly' : 'Lets hit the beach'
  const icon = season === 'winter' ? <WiSnowflakeCold size={124} color='#000' /> : <WiDaySunny size={124} color='#000' />
  return (
    <div>
      {icon}
      <h1>{text}</h1>
      {icon}
    </div>
  )
}

export default SeasonDisplay
