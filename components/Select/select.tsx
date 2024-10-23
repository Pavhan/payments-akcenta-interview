import { ChevronDownIcon } from "@heroicons/react/24/outline";

interface SelectProps {
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  children: React.ReactNode;
  value?: string | number;
}

const Select: React.FC<SelectProps> = ({ onChange, value, children }) => {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={onChange}
        className="w-36 px-3 py-2 text-gray-700 appearance-none bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
      >
        {children}
      </select>
      <ChevronDownIcon className="size-4 text-gray-500 absolute top-1/2 right-3 -translate-y-1/2" />
    </div>
  );
};

export default Select;