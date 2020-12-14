import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableNativeFeedback,
  TouchableOpacity,
  Image,
} from 'react-native';
import Slider from '@react-native-community/slider'
import Video from 'react-native-video'; /// alreadyimported this
import Icon from 'react-native-vector-icons/FontAwesome5'; // and this
import IconAnt from 'react-native-vector-icons/AntDesign'
import Octicon from 'react-native-vector-icons/Octicons'
import Orientation from 'react-native-orientation';
import Feather from 'react-native-vector-icons/Feather'

const { width } = Dimensions.get('window');
const samplevideo = require('./sample.mp4');

export default class VideoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: 0,
      duration: 0.1,
      paused: true,
      overlay: false,
      fullscreen: false,
      like: true,
      color: '#777777'
    };
  }
  onChange() {
    this.setState({ like: !this.state.like })
    if (this.state.like === true) {
      this.setState({ color: "#0000FF" })
    } else {
      this.setState({ color: "#777777" })
    }
  }

  lastTap = null;
  handleDoubleTap = (doubleTapCallback, singleTapCallback) => {
    const now = Date.now();
    const DOUBLE_PRESS_DELAY = 300;
    if (this.lastTap && (now - this.lastTap) < DOUBLE_PRESS_DELAY) {
      clearTimeout(this.timer);
      doubleTapCallback();
    } else {
      this.lastTap = now;
      this.timer = setTimeout(() => {
        singleTapCallback();
      }, DOUBLE_PRESS_DELAY);
    }
  }

  getTime = t => {
    const digit = n => n < 10 ? `0${n}` : `${n}`;
    // const t = Math.round(time);
    const sec = digit(Math.floor(t % 60));
    const min = digit(Math.floor((t / 60) % 60));
    const hr = digit(Math.floor((t / 3600) % 60));
    return hr + ':' + min + ':' + sec; // this will convert sec to timer string
    // 33 -> 00:00:33
    // this is done here
    // ok now the theme is good to look
  }

  load = ({ duration }) => this.setState({ duration }) // now here the duration is update on load video
  progress = ({ currentTime }) => this.setState({ currentTime }) // here the current time is upated

  backward = () => {
    this.video.seek(this.state.currentTime - 5);
    clearTimeout(this.overlayTimer);
    this.overlayTimer = setTimeout(() => this.setState({ overlay: false }), 3000);
  }
  forward = () => {
    this.video.seek(this.state.currentTime + 5); // here the video is seek to 5 sec forward
    clearTimeout(this.overlayTimer);
    this.overlayTimer = setTimeout(() => this.setState({ overlay: false }), 3000);
  }

  onslide = slide => {
    this.video.seek(slide * this.state.duration); // here the upation is maked for video seeking
    clearTimeout(this.overlayTimer);
    this.overlayTimer = setTimeout(() => this.setState({ overlay: false }), 3000);
  }

  youtubeSeekLeft = () => {
    const { currentTime } = this.state;
    this.handleDoubleTap(() => {
      this.video.seek(currentTime - 5);
    }, () => {
      this.setState({ overlay: true });
      this.overlayTimer = setTimeout(() => this.setState({ overlay: false }), 3000);
    })
  }
  youtubeSeekRight = () => {
    const { currentTime } = this.state;
    this.handleDoubleTap(() => { // this fn is used to detect the double tap first callback
      this.video.seek(currentTime + 5);
    }, () => {
      this.setState({ overlay: true });
      this.overlayTimer = setTimeout(() => this.setState({ overlay: false }), 3000);
    })
  }

  fullscreen = () => {
    const { fullscreen } = this.state;
    if (fullscreen) {
      Orientation.lockToPortrait();
    } else {
      Orientation.lockToLandscape();
    }
    this.setState({ fullscreen: !fullscreen });
  }


  render = () => {
    const { currentTime, duration, paused, overlay, fullscreen } = this.state;
    const { item } = this.props
    return (
      <View style={styles.container}>
        <View style={styles.user}>
          <View style={{ flex: 4, flexDirection: 'row' }}>
            <View style={styles.avatar}>
              <Image style={styles.imageAvater} source={{ uri: item.avatar }} />
            </View>
            <Text style={styles.username}>
              {item.username}
            </Text>
          </View>
          <TouchableOpacity style={styles.edit}>
            <Feather name="more-horizontal" size={30} />
          </TouchableOpacity>
        </View>
        <View style={fullscreen ? styles.fullscreenVideo : styles.video}>
          <Video
            fullscreen={fullscreen}
            paused={paused} // this will manage the pause and play
            ref={ref => this.video = ref}
            source={samplevideo}
            style={{ ...StyleSheet.absoluteFill }}
            resizeMode='cover'
            onLoad={this.load}
            onProgress={this.progress}
          // onVideoEnd={this.onEndVideo}
          />
          <View style={styles.overlay}>
            {/* now we can remove this not */}
            {overlay ? <View style={{ ...styles.overlaySet, backgroundColor: '#0006' }}>
              <Icon name='backward' style={styles.icon} onPress={this.backward} />
              <Icon name={paused ? 'play' : 'pause'} style={styles.icon} onPress={() => this.setState({ paused: !paused })} />
              <Icon name='forward' style={styles.icon} onPress={this.forward} />
              <View style={styles.sliderCont}>
                <View style={styles.timer}>
                  <Text style={{ color: 'white' }}>{this.getTime(currentTime)}</Text>
                  <Text style={{ color: 'white' }}>{this.getTime(duration)}   <Icon onPress={this.fullscreen} name={fullscreen ? 'compress' : 'expand'} style={{ fontSize: 15 }} /></Text>
                </View>
                <Slider
                  // we want to add some param here
                  maximumTrackTintColor='white'
                  minimumTrackTintColor='white'
                  thumbTintColor='white' // now the slider and the time will work
                  value={currentTime / duration} // slier input is 0 - 1 only so we want to convert sec to 0 - 1
                  onValueChange={this.onslide}
                />
              </View>
            </View> : <View style={styles.overlaySet}>
                <TouchableNativeFeedback onPress={this.youtubeSeekLeft}><View style={{ flex: 1 }} /></TouchableNativeFeedback>
                <TouchableNativeFeedback onPress={this.youtubeSeekRight}><View style={{ flex: 1 }} /></TouchableNativeFeedback>
              </View>}
          </View>
        </View>
        <View style={styles.total}>
          <IconAnt name="like2" size={30} color="#f1538e" />
          <Text style={{ fontSize: 18 }}>{item.totalLike}</Text>
          <Text style={{ fontSize: 18, marginLeft: 200 }}>0 bình luận</Text>
        </View>
        <View style={styles.postBottom}>
          <TouchableOpacity onPress={this.onChange.bind(this)}>
            <View style={styles.like}>
              <IconAnt name="like1" size={30} style={{ color: this.state.color }} />
              <Text style={{ fontSize: 17, marginLeft: 10, color: this.state.color }}>Thích</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity  >
            <View style={styles.like}>
              <Octicon name="comment" size={30} />
              <Text style={{ fontSize: 17, marginLeft: 10, color: "#777777" }}>Bình luận</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  overlay: {
    ...StyleSheet.absoluteFillObject
  },
  overlaySet: {
    flex: 1,
    flexDirection: 'row'
  },
  icon: {
    color: 'white',
    flex: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 25
  },
  sliderCont: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0
  },
  timer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5
  },
  video: { width, height: width * .6, backgroundColor: 'black' },
  fullscreenVideo: {
    backgroundColor: 'black',
    ...StyleSheet.absoluteFill,
    elevation: 1
  },
  user: {
    marginTop: 20,
    flex: 2,
    flexDirection: "row",
    marginBottom: 10
  },
  username: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    marginLeft: 10,
  },
  imageAvater: {
    marginLeft: 10,
    width: 50,
    height: 50,
    borderRadius: 25
  },
  avatar: {
    alignItems: "center",
    justifyContent: "center"
  },
  edit: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  post: {
    padding: 20,
    fontSize: 17
  },
  imagePost: {
    height: 200
  },
  total: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 30,
    borderTopWidth: 1,
    borderTopColor: '#BBBBBB',
    marginTop: 5,
  },
  postBottom: {
    flexDirection: 'row',
    marginTop: 5,
    padding: 2,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderTopColor: '#BBBBBB',
    borderBottomColor: '#BBBBBB'
  },
  like: {
    flexDirection: 'row',
    alignItems: 'center',
    width: "80%",
    justifyContent: 'center',
  }

});