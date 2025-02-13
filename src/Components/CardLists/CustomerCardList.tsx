import { CustomerCardListProps } from "../../types/interfaces"
import CustomerCard from "../Cards/CustomerCard"

function CustomerCardList({customers} :CustomerCardListProps) {
  return (
    <div className="grid grid-cols-2 gap-4">
        {customers.map((customer) => (
            <CustomerCard 
                opinion={customer.opinion} 
                fullName={customer.fullName}
                imagen={customer.imagen}
                formato={customer.formato}
            />
        ))}
    </div>
  )
}

export default CustomerCardList