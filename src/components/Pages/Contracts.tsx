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

// type ContractDataType = ContractData[];

export default function Contracts() {

  return (
    <div className="contract-container">
      <div className="contract-layout">
        <div className="contract-header">
          <div className="contract-heading">Contract</div>
        </div>
        <div className="contract-table-container">
          <table className="contract-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Experience</th>
                <th>Type</th>
                <th>Upload Date</th>
                <th>Days Left</th>
                <th>Policy Number</th>
                <th>Code #</th>
              </tr>
            </thead>
            <tbody>
              {contractData.map((entry: ContractData, idx: number) => (
                <tr key={idx}>
                  <td>{entry.fullName}</td>
                  <td>{entry.experience}</td>
                  <td>{entry.contractType}</td>
                  <td>{entry.uploadDate}</td>
                  <td>{entry.timeFrame}</td>
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
