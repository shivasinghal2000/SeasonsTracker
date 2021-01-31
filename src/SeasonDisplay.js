import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import { WiDaySunny, WiSnowflakeCold } from 'weather-icons-react'
import './SeasonDisplay.css'

const seasonConfig = {
  summer: {
    text: "Let's hit the beach",
    iconName: <WiDaySunny size={264} color='red' />
  },
  winter: {
    text: 'Burr, it is chilly',
    iconName: <WiSnowflakeCold size={264} color='blue' />
  }
}

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter'
  } else {
    return lat > 0 ? 'winter' : 'summer'
  }
}
const SeasonDisplay = (props) => {
  const season = getSeason(props.latitude, new Date().getMonth())
  const { text, iconName } = seasonConfig[season]
  return (
    <div className={`season-display ${season}`}>
      <div className='icon-left'>
        {iconName}
      </div>
      <h1>{text}</h1>
      <div className='icon-right'>
        {iconName}
      </div>
    </div>
  )
}

export default SeasonDisplay
