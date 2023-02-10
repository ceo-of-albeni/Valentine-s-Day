import Pagination from 'react-bootstrap/Pagination';
import "../styles/pagination.css"

function Page() {
  return (
    <div className="Page">
      <Pagination className='mt-3'>
        <Pagination.First />
        <Pagination.Prev />
        <Pagination.Item active>{1}</Pagination.Item>

        <Pagination.Item>{2}</Pagination.Item>
        <Pagination.Ellipsis disabled />
        <Pagination.Item>{9}</Pagination.Item>
        <Pagination.Item>{10}</Pagination.Item>

        <Pagination.Next />
        <Pagination.Last />
      </Pagination>
    </div>
  );
}

export default Page;