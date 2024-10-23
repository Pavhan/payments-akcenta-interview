import { CURRENCY, PAYMENT_STATUSES, PAYMENT_TYPES } from "@data/constants";
import Select from "@components/Select/select";

interface IFilteringProps {
  onChange: React.Dispatch<React.SetStateAction<string>>;
}

export default function Filtering({ onChange }: IFilteringProps) {
  const handleFilteringChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
   onChange(e.target.value)
  }

  return (
    <>
    <strong className="block mb-2">Filter by:</strong>
    <div className="flex mb-4 gap-3 bg-gray-100 p-4 rounded-lg flex-wrap">
      <div>
        <strong className="block mb-2">Currency</strong>
        <Select onChange={handleFilteringChange}>
          {Object.keys(CURRENCY).map((key) => <option key={key} value={key}>{key}</option>)}
        </Select>
      </div>
      <div>
        <strong className="block mb-2">Type</strong>
        <Select onChange={handleFilteringChange}>
          {Object.entries(PAYMENT_TYPES).map(([key,value]) => <option key={key} value={value}>{value}</option>)}
        </Select>
      </div>
      <div>
        <strong className="block mb-2">Status</strong>
        <Select onChange={handleFilteringChange}>
          {Object.entries(PAYMENT_STATUSES).map(([key,value]) => <option key={key} value={value}>{value}</option>)}
        </Select>
      </div>
    </div> 
    </>
  )
}