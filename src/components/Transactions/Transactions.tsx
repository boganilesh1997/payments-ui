import { ChangeEvent, useState } from "react";
import { getAllPayments } from "../../data/DataFunctions";
import PaymentTableRow from "../PaymentTableRow/PaymentTableRow";

const Transaction = ():JSX.Element => {

  const payments = getAllPayments();

  const countries : string[] = Array.from(new Set(payments.map(payment=> payment.country)))

  const [selectedContry, setSelectedcontry ]  = useState<string>("default") 
  

  const contryChange  = (event : ChangeEvent<HTMLSelectElement>) => 
  {
    event.target.options.selectedIndex == 0 ? setSelectedcontry("default") :
    setSelectedcontry(countries[event.target.options.selectedIndex-1])
    
  }

    return(
    <div>
        <div className="transactionContrySelector">
          Select country : <select id ="contrySelector" onChange= {contryChange} >
          <option value="default">All</option>     
            {
              countries.map(c => <option key={c} id={c}>{c}</option>)
            }
            
          </select>

        </div>
        <table className="transactionTable">
        <thead>
          <tr>
          <th>Id</th>
          <th>OrderID</th>
          <th>Date</th>
          <th>country</th>
          <th>Currency</th>
          <th>amount</th>
        </tr>
        </thead>
        <tbody>
          {
            payments.filter(c => selectedContry == 'default' || c.country == selectedContry ).map(payment => <PaymentTableRow key = {payment.id} {...payment} />)
          }
        </tbody>
       
        </table>
    </div>
    )

}

export default Transaction;