import Image from 'next/image';
import { IMovie } from '@/interfaces/types/IMovie';
import { FaStar } from 'react-icons/fa';
import { useState } from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '../components/cardComponent';  

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
    <Card className="bg-gray-50 dark:bg-transparent border-2 border-gray-200 rounded-lg transition-all duration-300 w-full">
      <CardHeader className="relative">
        <div
          className="relative"
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
        >
          <Image
            src={image_url ? image_url : `https://placehold.co/300x700.svg`}
            alt={'Movie Poster'}
            width={300}
            height={700}
            className="h-72 w-full object-cover rounded-lg transition-all duration-300 transform hover:scale-105"
          />
        </div>
      </CardHeader>

      <CardContent className="p-4 space-y-4">
        <div className="flex flex-col space-y-2">
          <div className="space-y-1">
            <CardTitle className="font-semibold leading-7 text-lg line-clamp-2 text-accent-foreground">
              {title}
            </CardTitle>
            <CardDescription className="text-sm text-accent-foreground">
              Year of release:&nbsp;{year}
            </CardDescription>
          </div>
          <CardDescription className="line-clamp-2 leading-5 text-sm text-accent-foreground">
            {crew}
          </CardDescription>
          <div className=" py-2 flex items-center space-x-2">
          <div className="inline-flex items-center text-gray-500 text-xs py-1 px-2 rounded-full bg-primary">
            <FaStar color="white" size={14} className="mr-1" />
            <span className="text-white">{rating}/10</span>
          </div>
        </div>
          
          
        </div>
      </CardContent>
    </Card>
  );
};

export default ItemMovie;
