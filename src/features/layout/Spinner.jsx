import Spinner from "react-bootstrap/Spinner";
import { useSelector } from "react-redux";
import { selectFiles } from "../../store/files";

function SpinnerLoading() {
  const { isLoading } = useSelector(selectFiles);
  return isLoading ? (
    <div className="vw-100 vh-100 d-flex  flex-row justify-content-center align-items-center position-absolute z-10 top-0 start-0">
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  ) : null;
}

export default SpinnerLoading;
