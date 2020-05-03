import React from 'react';
import ListInfoItem from './ListInfoItem';
import TagItem from './TagItem';

const ImageCard = ({ image }) => {
  const tags = image.tags.split(', ');

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src={image.webformatURL} alt="" className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2">
          Photo by {image.user}
        </div>
        <ul>
          <ListInfoItem label={'Views'} value={image.views} />
          <ListInfoItem label={'Downloads'} value={image.downloads} />
          <ListInfoItem label={'Likes'} value={image.likes} />
        </ul>
      </div>
      <div className="px-6 py-4">
        {tags.map((tag, index) => (
          <TagItem key={index} tag={tag} />
        ))}
      </div>
    </div>
  )
};

export default ImageCard;
