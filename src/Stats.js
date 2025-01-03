export default function Stats({items}){
    if (items.length === 0) return <p className='stats'><em>Start adding some items to your list 🚀</em></p>
    let packedItemsNumber = items.filter(item => item.packed).length
    let totalItems = items.length
    let percentage = (packedItemsNumber / totalItems) * 100

    return(
        <footer className='stats'> 
                { percentage === 100 ? 
                <em>You are ready to go! ✈️</em>  :
                <em>💼 You have {totalItems} items on your list, and you already packed {packedItemsNumber} ({percentage}%) </em>
                }
        </footer>
    )
}