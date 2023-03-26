import { useEffect } from "react";
import FilesTable from "./filesTable";
import {useDispatch, useSelector} from 'react-redux'
import { getFiles, selectFiles } from "../../store/files";

function FilesList() {
    const dispatch = useDispatch()
    const {isLoading, files} = useSelector(selectFiles)
    useEffect(() => {
        dispatch(getFiles())    
    }, [])

  return (
    <div>
      <div>
        Title
      </div>
      <FilesTable items={files} />
    </div>
  );
}

export default FilesList;
