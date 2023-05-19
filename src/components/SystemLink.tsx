import Image from 'next/image';

export default function SystemLink({ system }) {
  return (
    <div key={system.id} className='w-24 h-24 rounded-full text-white grid place-content-center overflow-hidden transition-all duration-200 hover:scale-105 group relative'>
      <Image
        src={system.thumbnail}
        width={100} height={100}
        alt={system.title}
        className='absolute z-0 w-full h-auto saturate-50 dark:brightness-75'
      />
      
      <span className='group-hover:bg-black/80 w-24 h-24 text-white invisible group-hover:visible grid place-content-center text-sm z-10 shadow transition-all duration-200'>
        {system.title}
      </span>
    </div>
  );
}