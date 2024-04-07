import { InputSearch } from './input-search';
import { PriceRange } from './price-range';
import { Select } from './select';

interface FilterProps {
  filters: {
    name: string;
    maxPrice: string;
    size: string;
    color: string;
  };
  onFilterChange: (key: string, value: string) => void;
}

const sizeOptions = [
  { label: 'Selecione um tamanho', value: '' },
  { label: 'XPP', value: 'XPP' },
  { label: 'PP', value: 'PP' },
  { label: 'P', value: 'P' },
  { label: 'M', value: 'M' },
  { label: 'G', value: 'G' },
  { label: 'GG', value: 'GG' },
];

const colorOptions = [
  { label: 'Selecione uma cor', value: '' },
  { label: 'Preta', value: 'preta' },
  { label: 'Azul', value: 'azul' },
  { label: 'Cinza', value: 'cinza' },
  { label: 'Branca', value: 'branca' },
  { label: 'Nori Green', value: 'nori green' },
  { label: 'Mescla', value: 'mescla' },
  { label: 'Carmenere', value: 'carmenere' },
  { label: 'Off White', value: 'off white' },
  { label: 'Gray Mint', value: 'gray mint' },
  { label: 'Tobacco', value: 'tobacco' },
  { label: 'Bright Red', value: 'bright' },
  { label: 'Blue Fog', value: 'blue fog' },
];

export default function Filter({ filters, onFilterChange }: FilterProps) {
  return (
    <div className='bg-zinc-50 p-2 rounded-lg'>
      <form className='container px-5 py-2 mx-auto'>
        <div className='flex flex-wrap -mx-2'>
          <InputSearch
            label={'Pesquisar pelo nome do produto'}
            value={filters.name}
            onChange={(value) => onFilterChange('name', value)}
          />
          <Select
            label='Filtrar por tamanho'
            options={sizeOptions}
            value={filters.size}
            onFilterChange={(value) => onFilterChange('size', value)}
          />
          <Select
            label='Filtrar por cor'
            options={colorOptions}
            value={filters.color}
            onFilterChange={(value) => onFilterChange('color', value)}
          />
          <PriceRange
            value={filters.maxPrice}
            onChange={(value) => onFilterChange('maxPrice', value)}
            min={79}
            max={500}
          />
        </div>
      </form>
    </div>
  );
}
