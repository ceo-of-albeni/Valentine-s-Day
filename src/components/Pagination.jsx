import Pagination from "react-bootstrap/Pagination";
import "../styles/cards.css";

function AdvancedExample({ page, count, setPage }) {
  let active = page;
  let items = [];
  for (let number = 1; number <= count; number++) {
    items.push(
      <Pagination.Item
        onClick={() => setPage(number)}
        key={number}
        active={number === active}>
        {number}
      </Pagination.Item>
    );
  }
  return (
    <div>
      <div>
        <Pagination>{items}</Pagination>
      </div>
    </div>
  );
}

export default AdvancedExample;
