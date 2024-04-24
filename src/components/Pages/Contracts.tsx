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
      <ul className="contract-list">
        {contractData.map((entry: ContractData) => (
          <li className="contract-entry" id={String(entry.codeNumber)}>
            {entry.fullName}
            {entry.experience}
            {entry.contractType}
            {entry.uploadDate}
            {entry.timeFrame}
            {entry.policyNumber}
            {entry.codeNumber}
          </li>
        ))}
      </ul>
    </div>
  )
}
