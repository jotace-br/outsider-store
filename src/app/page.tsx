'use client';
import { fetchData } from '@/api/fetch-data';
import Filter from '@/components/filter';
import { Product } from '@/components/product';
import {
  filterByColor,
  filterByMaxPrice,
  filterByName,
  filterBySize,
} from '@/helpers/filters';
import { useState } from 'react';
import useSWR from 'swr';

export default function Home() {
  const {
    data: products,
    error,
    isLoading,
  } = useSWR('fetchDataProducts', () => fetchData());

  const [filters, setFilters] = useState({
    name: '',
    maxPrice: '500',
    size: '',
    color: '',
  });

  const handleFilterChange = (key: string, value: string) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [key]: value,
    }));
  };

  const filteredProducts = (products || []).filter((product) => {
    return (
      filterByName(product, filters.name) &&
      filterByMaxPrice(product, filters.maxPrice) &&
      filterBySize(product, filters.size) &&
      filterByColor(product, filters.color)
    );
  });

  if (isLoading) {
    return null;
  }

  if (error) {
    return <div>Erro ao carregar os produtos</div>;
  }

  return (
    <>
      <Filter filters={filters} onFilterChange={handleFilterChange} />

      <section id='/#produtos' className='text-gray-600 body-font'>
        <div className='container px-5 py-8 mx-auto'>
          <div className='flex flex-wrap -m-4'>
            {filteredProducts.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
