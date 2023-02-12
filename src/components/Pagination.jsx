import Pagination from "react-bootstrap/Pagination";
import "../styles/cards.css";

function AdvancedExample({ page, count, setPage }) {
  let active = page;
  let items = [];
  for (let number = 1; number <= count; number++) {
    items.push(
      <Pagination.Item
        id="pagination"
        onClick={() => setPage(number)}
        key={number}
        active={number === active}>
        {number}
      </Pagination.Item>
    );
  }

  function prev() {
    if (active > 1) {
      setPage(--active);
    }
  }

  function next() {
    if (active < items.length) {
      setPage(++active);
    }
  }
  return (
    <div>
      <div>
        <Pagination className="pag_container">
          <button id="pagination" onClick={() => prev()}>
            <i className="fa-solid fa-caret-left"></i>
          </button>
          {items}
          <button id="pagination" onClick={() => next()}>
            <i className="fa-solid fa-caret-right"></i>
          </button>
        </Pagination>
      </div>
    </div>
  );
}

export default AdvancedExample;
