import React from 'react'
import Card from '../../components/Card/Card'
import PropTypes from 'prop-types'
// import profile from '../../assets/profile.png'

const Freelance = () => {
  return (
    <div>
      <h1>Freelances 👩‍💻👨‍💻👩‍💻</h1>
      {freelanceProfiles.map((profile, index) => (
        <Card
          key={`${profile.name}-${index}`}
          label={profile.jobTitle}
          picture={profile.picture}
          title={profile.name}
        />
      ))}
    </div>
  )
}

Card.propType = {
    label: PropTypes.string,
    tilte: PropTypes.string.isRequired,
    picture: PropTypes.picture,
}

export default Freelance

const freelanceProfiles = [
  {
    name: 'Jane Doe',
    jobTitle: 'Devops',
    // picture: profile,
  },
  {
    name: 'John Doe',
    jobTitle: 'Developpeur frontend',
    // picture: profile,
  },
  {
    name: 'Jeanne Biche',
    jobTitle: 'Développeuse Fullstack',
    // picture: profile,
  },
]
