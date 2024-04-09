interface CaroseImageProductListProps {
  images: string[]
}

const CaroseImageProductList: React.FC<CaroseImageProductListProps> = ({ images }) => {
  return (
    <div>
      {images.map((image, index) => (
        <img key={index} src={image} alt={`Slide ${index + 1}`} />
      ))}
    </div>
  )
}

export default CaroseImageProductList
