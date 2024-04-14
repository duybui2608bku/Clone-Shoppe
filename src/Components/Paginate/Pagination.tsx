import './Pagination.scss'
import { MdOutlineArrowBackIos } from 'react-icons/md'
import { MdOutlineArrowForwardIos } from 'react-icons/md'
interface Props {
  page: number
  setPage: React.Dispatch<React.SetStateAction<number>>
  pageSize: number
}
const RANGE = 2

const Pagination = ({ page, setPage, pageSize }: Props) => {
  const renderPagination = () => {
    let dotAfter = false
    let dotBefore = false
    const renderDotBefor = (index: number) => {
      if (!dotBefore) {
        dotBefore = true
        return <span key={index}>...</span>
      }
      return null
    }

    const renderDotAfter = (index: number) => {
      if (!dotAfter) {
        dotAfter = true
        return <span key={index}>...</span>
      }
      return null
    }
    return Array(pageSize)
      .fill(0)
      .map((_, index) => {
        const pageNumber = index + 1
        if (page <= RANGE * 2 + 1 && pageNumber > page + RANGE && pageNumber < pageSize - RANGE + 1) {
          return renderDotAfter(index)
        } else if (page > RANGE * 2 + 1 && page < pageSize - RANGE * 2) {
          if (pageNumber < page - RANGE && pageNumber > RANGE) {
            return renderDotBefor(index)
          } else if (pageNumber > page + RANGE && pageNumber < pageSize - RANGE + 1) {
            return renderDotAfter(index)
          }
        } else if (page >= pageSize - RANGE * 2 && pageNumber > RANGE && pageNumber < page - RANGE) {
          return renderDotBefor(index)
        }
        return (
          <button
            onClick={() => setPage(pageNumber)}
            className={pageNumber === page ? 'active' : 'noActive'}
            key={index}
          >
            {pageNumber}
          </button>
        )
      })
  }
  return (
    <>
      <div className='pagination-container'>
        <MdOutlineArrowBackIos />
        {renderPagination()}
        <MdOutlineArrowForwardIos />
      </div>
    </>
  )
}

export default Pagination
