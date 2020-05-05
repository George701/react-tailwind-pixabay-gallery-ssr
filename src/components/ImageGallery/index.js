import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ImageCard from '../ImageCard';
import ImageSearch from '../ImageSearch';
import { fetchImages } from '../../actions/images';

const ImageGallery = ({ fetchImages, images, isLoading }) => {
  const [term, setTerm] = useState('');

  useEffect(() => {
    fetchImages(term);
  }, [fetchImages]);


  return (
    <div className="container mx-auto">
      <ImageSearch searchText={(text) => setTerm(text)} />
      {!isLoading && images.length === 0 && <h1 className="text-5xl text-center mx-auto mt-32">No Images Found</h1>}
      {isLoading ? <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1> : <div className="grid grid-cols-3 gap-4">
        {images.map(image => (
          <ImageCard key={image.id} image={image} />
        ))}
      </div>}
    </div>
  )
}

ImageGallery.propTypes = {
  fetchImages: PropTypes.func.isRequired,
  images: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  images: state.images,
  isLoading: state.isLoading
});

export default connect(mapStateToProps, { fetchImages })(ImageGallery);
