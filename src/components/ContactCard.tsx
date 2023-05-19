import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ContactCard({ contact }) {
  return (
    <div key={contact.id} className='grid gap-8 place-content-center w-72 h-80 bg-white/30 dark:bg-white/5 shadow p-8 backdrop-blur-3xl rounded-xl'>
      <FontAwesomeIcon 
        icon={contact.icon} 
        width={56} height={56}
        className='bg-sky-500 mx-auto p-4 rounded-xl shadow text-white' 
      />
      
      <span className='font-bold text-xl text-center h-16'>
        {contact.title}
      </span>

      <p className='text-sm text-center'>
        {contact.info}
      </p>
    </div>
  );
}