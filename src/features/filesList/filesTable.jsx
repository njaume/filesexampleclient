import { useMemo } from "react";
import Table from "../../components/Table";
import { FILES_TABLE_HEADS } from "../../constants";

function FilesTable({ items }) {
  const nItems = useMemo(() => {
    const itemsArray = [];
    items?.forEach((item) => {
      item?.lines?.forEach((line) => {
        itemsArray.push({
          key: `fileLine_${line.file}${line.hex}`,
          cols: [item?.file, line?.text, line?.number, line?.hex],
        });
      });
    });
    return itemsArray;
  }, [items]);

  return <Table head={FILES_TABLE_HEADS} items={nItems} />;
}

export default FilesTable;
