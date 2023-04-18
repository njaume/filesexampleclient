import { useEffect, useMemo, useState } from "react";
import FilesTable from "./FilesTable";
import { useDispatch, useSelector } from "react-redux";
import { getFiles, selectFiles } from "../../store/files";
import Input from "../../components/Input";
import useDebounce from "../../hooks/useDebounce";

function FilesList() {
  const [inputValue, setValue] = useState("");
  const dispatch = useDispatch();
  const debouncedValue = useDebounce(inputValue, 500);
  const { files } = useSelector(selectFiles);

  useEffect(() => {
    dispatch(getFiles(debouncedValue));
  }, [debouncedValue]);

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const FilesTableMemoized = useMemo(() => {
    return <FilesTable items={files} />;
  }, [files]);
  return (
    <div>
      <Input onChange={handleInputChange} label={"Search"} />
      {FilesTableMemoized}
    </div>
  );
}

export default FilesList;
