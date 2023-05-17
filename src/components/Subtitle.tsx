import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

export default function Subtitle({ title }) {
  return (
    <h1 className='text-md font-semibold flex gap-2 items-center'>
      <FontAwesomeIcon icon={faChevronRight} width={8} height={8} /> {title}
    </h1>
  );
}