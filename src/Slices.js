import React from 'react'

import TextBlock from './TextBlock'

export default function Slices ({ slices, ...props }) {
  return slices.map((slice, index) => {
    switch (slice.slice_type) {
      case 'texto':
        return <TextBlock key={index} {...slice} />

      default:
        return null
    }
  })
}
