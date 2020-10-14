import * as React from 'react'
import Rotation from 'react-rotation'

const size = 24
const sku = '8053672996104'
const name = 'versace-v_rock-eyewear-tortoise'

function getImgNumber(index: number): string {
  const pageNr = index + 1
  if (String(pageNr).length === 1) {
    return `0${pageNr}`
  }

  return String(pageNr)
}

function getImgUrl(index: number) {
  return `${sku}-360-${getImgNumber(index)}-${name}.jpg`
}

export const Image360Viewer: React.FC = () => {
  const images = Array.from({ length: size }).map((_, i) => getImgUrl(i))

  return (
    <Rotation className="image-360-viewer" cycle={true} reverse={true}>
      {images.map((path) => (
        <img key={path} src={`/images/${path}`} alt={path.replace('_', ' ')} />
      ))}
    </Rotation>
  )
}

export default Image360Viewer
