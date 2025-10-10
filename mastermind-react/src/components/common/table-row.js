import TableData from "./table-data";

export default function TableRow({rowKey,value,fields}) {
    return (
        <tr key={rowKey}>
            {
                fields.map( (field,field_index) =>
                    (<TableData key={field_index} cellkey={field_index} value={value[field]} />)
                )
            }
        </tr>
    );
}