import React from 'react'

const Pagination = ({ page, setPage, totalItems, limit, setLimit }) => {
  return (
    <>
      <div className="flex md:flex-row flex-col justify-center items-center md:mt-20">
        <div className="join text-center md:mb-0 mb-10">
          <button className="join-item btn" onClick={() => {
            page === 1 ? setPage(1) : setPage(page - 1)
          }} disabled={page === 1}>«</button>
          <button className="join-item btn">Page {page}</button>
          <button className="join-item btn" onClick={() => {
            page === Math.round(totalItems / limit) ? setPage(Math.round(totalItems / limit)) : setPage(page + 1)
          }} disabled={page === Math.round(totalItems / limit)}>»</button>
        </div>
        <select className="select select-success w-full max-w-xs mx-20" value={limit} onChange={e => setLimit(e.target.value)}>
          <option disabled>Select Show The View 1 Page Total Items?</option>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
          <option value={20}>20</option>
        </select>
      </div>
    </>
  )
}

export default Pagination