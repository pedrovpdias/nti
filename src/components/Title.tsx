import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

export default function Title({ title }) {
  return (
    <h1 className='font-semibold text-lg text-sky-500 flex gap-2 items-center'>
      <FontAwesomeIcon icon={faChevronRight} width={12} height={12} /> {title}
    </h1>
  );
}