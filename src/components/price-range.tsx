interface PriceRangeProps {
  value: string;
  onChange: (value: string) => void;
  min: number;
  max: number;
}

export function PriceRange({ value, onChange, min, max }: PriceRangeProps) {
  return (
    <div className='relative mb-6 px-2 mt-2 w-full'>
      <input
        id='price'
        type='range'
        value={value}
        min={min}
        max={max}
        onChange={(e) => onChange(e.target.value)}
        className='w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer'
      />
      <span className='text-sm text-gray-500 absolute start-0 -bottom-6'>
        Min (R${min})
      </span>
      <span className='text-sm text-gray-500 absolute start-1/3 -translate-x-1/2 -bottom-6 hidden sm:block'>
        R${max * 0.5}
      </span>
      <span className='text-sm text-gray-500 absolute start-2/3 -translate-x-1/2 -bottom-6 hidden sm:block'>
        R${max * 0.75}
      </span>
      <span className='text-sm text-gray-500 absolute end-0 -bottom-6'>
        Max (R${max})
      </span>
    </div>
  );
}
