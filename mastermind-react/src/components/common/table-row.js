import TableData from "./table-data";

export default function TableRow({rowkey,value,fields}) {
    return (
        <tr key={rowkey}>
            {
                fields.map( (field,field_index) =>
                    (<TableData cellkey={field_index} value={value[field]} />)
                )
            }
        </tr>
    );
}