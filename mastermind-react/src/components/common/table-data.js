export default function TableData({key,value}) {
    console.log(value)
    return (
        <td key={key}>{value}</td>
    );
}