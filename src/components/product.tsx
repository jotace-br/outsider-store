import { formatCurrency } from '@/helpers/format-currency';
import { toCamelCase } from '@/helpers/to-camel-case';
import { IShirt } from '@/types/Shirt';
import Image from 'next/image';
import Link from 'next/link';

interface ProductProps {
  product: IShirt;
}

export function Product({ product }: ProductProps) {
  return (
    <div className='lg:w-1/4 md:w-1/2 p-4 w-full hover:scale-105 transition-all'>
      <Link
        href={`product/${product.id}`}
        className='block relative h-auto md:h-56 rounded overflow-hidden'
      >
        <Image
          alt={product.name}
          className='object-cover object-center w-full h-full block'
          src={product.variants[0].image}
          width={400}
          height={300}
          style={{
            width: '100%',
            height: 'auto',
          }}
          quality={100}
          priority
        />
      </Link>
      <div className='mt-4'>
        <h2 className='text-gray-900 title-font text-lg font-medium'>
          {product.name}
        </h2>
        <div className='flex mt-2'>
          <h3 className='text-gray-500 text-xs tracking-widest title-font mb-1'>
            Cores disponíveis:
          </h3>
          <div className='flex ml-2'>
            {product.variants.map((variant) => (
              <div
                key={variant.id}
                className={`w-4 h-4 rounded-full mr-1 ring-1 ring-gray-900`}
                style={{
                  backgroundColor: `var(--color-${toCamelCase(variant.color)})`,
                }}
                title={variant.color}
              ></div>
            ))}
          </div>
        </div>
        <p className='mt-1'>{formatCurrency(product.price)}</p>
      </div>
    </div>
  );
}
