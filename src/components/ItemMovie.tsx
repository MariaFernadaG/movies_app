import Image from 'next/image';
import { IMovie } from '@/interfaces/types/Movie';
import { FaStar } from 'react-icons/fa';
import { useState } from 'react';

const ItemMovie = ({
  id,
  title,
  year,
  crew,
  image_url,
  rating,
}: IMovie) => {
  const [hovering, setHovering] = useState(false);

  return (
    <div
      className={`bg-gray-50 dark:bg-transparent border-2 border-gray-200
        h-[670px] max-w-[290px] rounded-2xl p-4 m-4`}
    >
      <div
        className="group relative rounded-2xl overflow-hidden"
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        <div className="space-y-2">
          <Image
            src={image_url || 'https://placehold.co/300x700.svg'}
            alt={title}
            width={240}
            height={360}
            className="object-cover w-full h-[440px] rounded-2xl"
          />
        </div>

        <div className="px-4 py-2 flex flex-col space-y-1 h-full overflow-hidden">
          <h3 className="font-semibold text-accent-foreground text-lg line-clamp-2">
            {title}
          </h3>
          <span className="text-sm text-accent-foreground">
            Year of release: {year}
          </span>
          <span className="line-clamp-2 text-sm text-accent-foreground">
            {crew}
          </span>
        </div>

        <div className="px-4 py-2 flex items-center space-x-2">
          <div className="inline-flex items-center text-gray-500 text-xs py-1 px-2 rounded-full bg-primary">
            <FaStar color="white" size={14} className="mr-1" />
            <span className="text-white">{rating}/10</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemMovie;
