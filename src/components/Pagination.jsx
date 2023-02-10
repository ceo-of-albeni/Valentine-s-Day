import Pagination from 'react-bootstrap/Pagination';
import "../styles/cards.css"

function AdvancedExample() {
  return (
    <div>
      <Pagination className='mt-3'>
        <Pagination.First />
        <Pagination.Prev />
        <Pagination.Item active>{1}</Pagination.Item>

        <Pagination.Item>{2}</Pagination.Item>
        <Pagination.Ellipsis />
        <Pagination.Item>{9}</Pagination.Item>
        <Pagination.Item>{10}</Pagination.Item>

        <Pagination.Next />
        <Pagination.Last />
      </Pagination>
    </div>
  );
}

export default AdvancedExample;