import { FaStar } from 'react-icons/fa'

type ProductRatingProps = {
  rating: number
}

const ProductRating: React.FC<ProductRatingProps> = ({ rating }) => {
  return (
    <>
      <div style={{ display: 'flex', gap: '2px' }}>
        <FaStar
          style={{
            clipPath: 'polygon(50% 0%, 100% 38%, 78% 100%, 22% 100%, 0% 38%)',
            fill: rating >= 1 ? 'rgb(255, 206, 61)' : 'transparent',
            stroke: 'black',
            strokeWidth: '20'
          }}
        />
        <FaStar
          style={{
            clipPath: 'polygon(50% 0%, 100% 38%, 78% 100%, 22% 100%, 0% 38%)',
            fill: rating >= 2 ? 'rgb(255, 206, 61)' : 'transparent',
            stroke: 'black',
            strokeWidth: '20'
          }}
        />
        <FaStar
          style={{
            clipPath: 'polygon(50% 0%, 100% 38%, 78% 100%, 22% 100%, 0% 38%)',
            fill: rating >= 3 ? 'rgb(255, 206, 61)' : 'transparent',
            stroke: 'black',
            strokeWidth: '20'
          }}
        />
        <FaStar
          style={{
            clipPath: 'polygon(50% 0%, 100% 38%, 78% 100%, 22% 100%, 0% 38%)',
            fill: rating >= 4 ? 'rgb(255, 206, 61)' : 'transparent',
            stroke: 'black',
            strokeWidth: '20'
          }}
        />
        <FaStar
          style={{
            clipPath: 'polygon(50% 0%, 100% 38%, 78% 100%, 22% 100%, 0% 38%)',
            fill: rating >= 5 ? 'rgb(255, 206, 61)' : 'transparent',
            stroke: 'black',
            strokeWidth: '20'
          }}
        />
      </div>
    </>
  )
}

export default ProductRating
