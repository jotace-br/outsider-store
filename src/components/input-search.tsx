interface InputSearchProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

export function InputSearch({ label, value, onChange }: InputSearchProps) {
  return (
    <div className='w-full md:w-1/3 px-2 mb-4 md:mb-0'>
      <label className='block text-sm mb-1'>{label}</label>
      <input
        type='text'
        placeholder='Digite alguma coisa...'
        value={value}
        autoComplete='off'
        onChange={(e) => onChange(e.target.value)}
        className='border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500'
      />
    </div>
  );
}
