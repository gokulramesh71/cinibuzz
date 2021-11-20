import React from 'react';
import './Home.css';
import Search from '../Search/Search';
import CategoryList from '../CategoryList/CategoryList';
import ImageFrame from '../ImageFrame/ImageFrame';
import CastSlider from '../CastSlider/CastSlider';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headerTitle: 'Cinibuzz',
      searchEnabled: false,
      categoryTitle:'Browse movies by category',
      imageClick: false,
      genres: [],
      imageArr:[],
      colSize: 4,
      imgHeight: 150,
      castList:[],
      recommendList:[]
    };
  }

  componentDidMount() {
    fetch("https://api.themoviedb.org/3/genre/movie/list?language=%3Cstring%3E&api_key=1c06a1911fa9fd7b91f24ab61c1f9330")
      .then(res => res.json())
      .then(
        (result) => {
          result.genres.unshift({"name": "New Releases"}, {"name": "Upcoming"});
          this.setState({
            genres: result.genres
          });
        },
        (error) => {
          // this.setState({
          //   error
          // });
        }
      );

      fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=1c06a1911fa9fd7b91f24ab61c1f9330")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({imageArr:result.results, colSize: 4, imgHeight: 150})
          // this.setState({
          //   genres: result.genres
          // });
        },
        (error) => {
          // this.setState({
          //   error
          // });
        }
      );
  }

  searchCb = (val) => {
    console.log("hiii",val, this.state.searchEnabled);
    if (val !== '') {
      fetch("https://api.themoviedb.org/3/search/movie?api_key=1c06a1911fa9fd7b91f24ab61c1f9330&query=" + val)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({imageArr:result.results, colSize: 4, imgHeight: 150})
          // this.setState({
          //   genres: result.genres
          // });
        },
        (error) => {
          // this.setState({
          //   error
          // });
        }
      );
      this.setState({searchEnabled: true, categoryTitle: 'Showing results for '+ val});
    } else if (val === '' && this.state.searchEnabled) {
      this.setState({searchEnabled: false, categoryTitle: 'Browse movies by category'});
    }
  }

  getFurtherInfo = (info) => {
    fetch("https://api.themoviedb.org/3/movie/" + info.id + "/credits?api_key=1c06a1911fa9fd7b91f24ab61c1f9330")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({castList: result.cast})
          // this.setState({
          //   genres: result.genres
          // });
        },
        (error) => {
          // this.setState({
          //   error
          // });
        }
      );

      fetch("https://api.themoviedb.org/3/movie/" + info.id + "/similar?api_key=1c06a1911fa9fd7b91f24ab61c1f9330")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({recommendList: result.results})
          // this.setState({
          //   genres: result.genres
          // });
        },
        (error) => {
          // this.setState({
          //   error
          // });
        }
      );
    this.setState({imageClick: true, colSize: 1, imgHeight: 50, imageArr: [info]});

  } 


  render () {
    const optionList = ["Kids", "TV Shows", "Movies"];
    return (
      <div>
          <div className="header">
              <div className="headerTitle">{this.state.headerTitle}</div>
              <div className="headerOptions">
                  {
                    optionList.map((opt, ind) => {
                        return <div className="options" key={ind}>{opt}</div>
                    })
                  }
              </div>
          </div>
          <div className="body">
                  {!this.state.imageClick && <div className="searchBox">
                    <Search searchCb={this.searchCb}/>
                  </div>}
                  {!this.state.imageClick && <h5 className="categoryTitle">{this.state.categoryTitle}</h5>}
                  {(!this.state.searchEnabled && !this.state.imageClick) && <CategoryList options={this.state.genres}/>}
                  <ImageFrame colSize={this.state.colSize} height={this.state.imgHeight} imageArr={this.state.imageArr} furtherInfoCb={this.getFurtherInfo}/>
                  {this.state.imageClick && <CastSlider castList={this.state.castList}/>}
                  {this.state.imageClick && <div className="mediaEx">
                    <div className="media1">
                      <div className="mediaBlock">
                        <h2>Media</h2>
                        <CategoryList options={['Most Popular', 'Videos', 'Backdrops', 'Posters']}/>
                        <ImageFrame colSize={1} height={25} imageArr={this.state.imageArr}/>
                      </div>
                      <div className="keywords">
                      <h2>KEYWORDS</h2>
                      </div>
                    </div>
                      <h2>Recommendations</h2>
                      <ImageFrame colSize={3} height={25} imageArr={this.state.recommendList}/>
                    <div>

                    </div>
                  </div>}
          </div>
          <div className="footer"></div>
      </div>
  
    );
  }  
}
