import './Pagination.scss'
import { MdOutlineArrowBackIos } from 'react-icons/md'
import { MdOutlineArrowForwardIos } from 'react-icons/md'
import { QueryConfig } from '../../Pages/ProductDetail/ProductDetail'
import { Link, createSearchParams } from 'react-router-dom'
interface Props {
  queryConfig: QueryConfig
  pageSize: number
}
const RANGE = 2

const Pagination = ({ queryConfig, pageSize }: Props) => {
  const page = Number(queryConfig.page)
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
          <Link
            to={{
              pathname: '/',
              search: createSearchParams({
                ...queryConfig,
                page: pageNumber.toString()
              }).toString()
            }}
            className={`${pageNumber === page ? 'active' : 'noActive'} button`}
            key={index}
          >
            {pageNumber}
          </Link>
        )
      })
  }
  return (
    <>
      <div className='pagination-container'>
        {page === 1 ? (
          <MdOutlineArrowBackIos style={{ cursor: 'not-allowed' }} />
        ) : (
          <Link
            to={{
              pathname: '/',
              search: createSearchParams({
                ...queryConfig,
                page: (page - 1).toString()
              }).toString()
            }}
            className='button'
          >
            <MdOutlineArrowBackIos />
          </Link>
        )}
        {renderPagination()}
        {page === pageSize ? (
          <MdOutlineArrowForwardIos style={{ cursor: 'not-allowed' }} />
        ) : (
          <Link
            to={{
              pathname: '/',
              search: createSearchParams({
                ...queryConfig,
                page: (page + 1).toString()
              }).toString()
            }}
            className='button'
          >
            <MdOutlineArrowForwardIos />
          </Link>
        )}
      </div>
    </>
  )
}

export default Pagination
