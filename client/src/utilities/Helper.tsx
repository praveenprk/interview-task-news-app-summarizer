import React from 'react'

const Source: React.FC = () => {
  return <span className='italic font-medium'>Source: {' '}</span>;
}

const Summary: React.FC = () => {
  return <span className='font-semibold'>Summary:{' '}</span>;
}

const PublishedAt: React.FC = () => {
  return <span className='italic font-medium'>Published On:{' '}</span>;
}

export { Source, Summary, PublishedAt }