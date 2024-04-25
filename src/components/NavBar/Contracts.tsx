import contractData from "../../data/contractData"
import './Contracts.css'

type ContractData = {
  fullName: string;
  experience: number;
  contractType: string;
  uploadDate: string;
  timeFrame: number;
  policyNumber: string;
  codeNumber: number;
};

export default function Contracts() {

  function dateFormatter(dateStr: string) {
    const date = new Date(dateStr);

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    return `${months[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}`;
  }

  function typeColor(type: string) {
    const styleObj = {
      backgroundColor: '',
    }
    const alphaVal = 0.5

    switch(type) {
      case 'A':
        styleObj.backgroundColor = `rgb(66, 215, 245, ${alphaVal})`
        break
      case 'B':
        styleObj.backgroundColor = `rgb(66, 245, 111, ${alphaVal})`
        break
      case 'C':
        styleObj.backgroundColor = `rgb(245, 197, 66, ${alphaVal})`
        break
      case 'D':
        styleObj.backgroundColor = `rgb(164, 66, 245, ${alphaVal})`
        break
      default:
        styleObj.backgroundColor = ''
        break
    }

    return styleObj
  }
  
  return (
    <div className="contract-container">
      <div className="contract-layout">
        <div className="contract-header">
          Available Contracts List
        </div>
        <div className="contract-table-container">
          <table className="contract-table">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Experience</th>
                <th>Type</th>
                <th className='table-entry-center'>Upload Date</th>
                <th>Days Left</th>
                <th>Policy Number</th>
                <th>Code #</th>
              </tr>
            </thead>
            <tbody>
              {contractData.map((entry: ContractData, idx: number) => (
                  <tr key={idx}>
                    <td>{idx + 1}</td>
                    <td>{entry.fullName}</td>
                    <td className='table-entry-center'>{entry.experience}</td>
                    <td className='table-entry-center' style={typeColor(entry.contractType)}>{entry.contractType}</td>
                    <td className='table-entry-center'>{dateFormatter(entry.uploadDate)}</td>
                    <td className='table-entry-center'>{entry.timeFrame}</td>
                    <td>{entry.policyNumber}</td>
                    <td>{entry.codeNumber}</td>
                  </tr>
                ))}
              </tbody>
          </table>
        </div>
      </div>
    </div>
    

  )
}



// export default function Contracts() {

//   return (
//     <div className="contract-container">
//       <div className="contract-layout">
//         <div className="contract-header">
//           <div className="contract-heading">Contract</div>
//           <ul className="contract-properties">
//             <li>Name</li>
//             <li>Experience</li>
//             <li>Type</li>
//             <li>Upload Date</li>
//             <li>Remaining Days</li>
//             <li>Policy Number</li>
//             <li>Code #</li>
//           </ul>
//         </div>
//         <ul className="contract-list">
//           {contractData.map((entry: ContractData) => (
//             <li className="contract-entry" id={String(entry.codeNumber)}>
//               {entry.fullName}
//               {entry.experience}
//               {entry.contractType}
//               {entry.uploadDate}
//               {entry.timeFrame}
//               {entry.policyNumber}
//               {entry.codeNumber}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>

//   )
// }
