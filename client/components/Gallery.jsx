import React from 'react';
import Modal from './Modal';
import Photos from './Photos';
import ShowGridModalBox from './ShowGridModalBox';
import SocialMediaBox from './SocialMediaBox';
import GalleryContainer from '../styled/Gallery';

const disableScroll = () => {
  document.body.style['overflow-y'] = 'hidden';
};

const enableScroll = () => {
  document.body.style['overflow-y'] = 'auto';
};

class Gallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      resid: 888,
      restaurantName: '',
      imageUrls: [],
      showModal: false,
      modalView: 'slideshow',
      handleEnter: false,
      handleExit: false,
      currSlide: 0,
    };

    this.getPhotos = this.getPhotos.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.changeView = this.changeView.bind(this);
    this.prevSlide = this.prevSlide.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
  }

  componentDidMount() {
    const resid = window.location.pathname.substring(13);
    this.setState({
      resid,
    }, this.getPhotos);
  }

  getPhotos() {
    ///api/restaurants/:id/photos
    // const { resid } = this.state; wayne commented this line
    let resid = Math.floor(Math.random() * 1000000);
    fetch(`http://localhost:3010/api/restaurants/${resid}/photos`, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(data => (data.json()))
      .then((data) => {
        console.log('data-', data);
        let imgArr = [];
        data.forEach((each) => {
          imgArr.push(each.imgurl);
        });
        this.setState({
          resid: data.resid,
          imageUrls: imgArr,
        });
      });
  }

  openModal(style, index) {
    if (style === 'slideshow') {
      this.setState({
        showModal: true,
        modalView: style,
        handleEnter: true,
        handleExit: false,
        currSlide: index,
      });
    } else {
      this.setState({
        showModal: true,
        modalView: style,
        handleEnter: true,
        handleExit: false,
      });
    }
    disableScroll();
  }

  closeModal() {
    this.setState({
      handleEnter: false,
      handleExit: true,
    }, () => setTimeout(() => {
      this.setState({
        showModal: false,
      });
    }, 300));
    enableScroll();
  }

  changeView(style, index) {
    if (style === 'slideshow') {
      this.setState({
        modalView: 'slideshow',
        currSlide: index,
      });
    } else {
      this.setState({
        modalView: 'grid',
      });
    }
  }

  prevSlide() {
    const { currSlide, imageUrls } = this.state;
    const n = imageUrls.length;
    if (currSlide === 0) {
      this.setState({
        currSlide: n - 1,
      });
    } else {
      const prevSlide = currSlide - 1;
      this.setState({
        currSlide: prevSlide,
      });
    }
  }

  nextSlide() {
    const { currSlide, imageUrls } = this.state;
    const n = imageUrls.length;
    const nextSlide = (currSlide + 1) % (n);
    this.setState({
      currSlide: nextSlide,
    });
  }

  render() {
    const {
      restaurantName, modalView, handleEnter, handleExit, imageUrls, showModal, currSlide,
    } = this.state;
    return (
      <GalleryContainer>
        <Photos images={imageUrls} openModal={this.openModal} />
        {showModal && (
          <Modal
            name={restaurantName}
            view={modalView}
            handleEnter={handleEnter}
            handleExit={handleExit}
            images={imageUrls}
            currSlide={currSlide}
            closeModal={this.closeModal}
            changeView={this.changeView}
            prevSlide={this.prevSlide}
            nextSlide={this.nextSlide}
          />
        )}
        <ShowGridModalBox images={imageUrls} openModal={this.openModal} />
        <SocialMediaBox name={restaurantName} />
      </GalleryContainer>
    );
  }
}

export default Gallery;
