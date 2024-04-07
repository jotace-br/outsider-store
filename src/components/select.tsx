interface SelectProps {
  label: string;
  options: { label: string; value: string }[];
  value: string;
  onFilterChange: (value: string) => void;
}

export function Select({ label, options, value, onFilterChange }: SelectProps) {
  return (
    <div className='w-full md:w-1/3 px-2 mb-4 md:mb-0'>
      <label className='block text-sm mb-1'>{label}</label>
      <div className='relative'>
        <select
          value={value}
          onChange={(e) => onFilterChange(e.target.value)}
          className='border border-gray-300 rounded-md appearance-none py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500'
        >
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <span className='absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center'>
          <svg
            fill='none'
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            className='w-4 h-4'
            viewBox='0 0 24 24'
          >
            <path d='M6 9l6 6 6-6'></path>
          </svg>
        </span>
      </div>
    </div>
  );
}
