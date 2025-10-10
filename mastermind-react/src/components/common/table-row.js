import TableData from "./table-data";

export default function TableRow({key,value,fields}) {
    return (
        <tr key={key}>
            {
                fields.map( (field,field_index) =>
                    (<TableData key={field_index} value={value[field]} />)
                )
            }
        </tr>
    );
}