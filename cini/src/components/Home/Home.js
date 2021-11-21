import React from 'react';
import './Home.css';
import Search from '../Search/Search';
import CategoryList from '../CategoryList/CategoryList';
import ImageFrame from '../ImageFrame/ImageFrame';
import CastSlider from '../CastSlider/CastSlider';
import Overview from '../Overview/Overview';
import Keywords from '../Keywords/Keywords';
import { dataFetch } from '../../services/ApiService';

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
      recommendList:[],
      chipList:[]
    };
  }

  componentDidMount() {
    dataFetch("https://api.themoviedb.org/3/genre/movie/list?language=%3Cstring%3E&api_key=1c06a1911fa9fd7b91f24ab61c1f9330")
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

      dataFetch("https://api.themoviedb.org/3/movie/now_playing?api_key=1c06a1911fa9fd7b91f24ab61c1f9330")
      .then(
        (result) => {
          this.setState({imageArr:result.results, colSize: 4, imgHeight: 150})
        },
        (error) => {
          // this.setState({
          //   error
          // });
        }
      );
  }

  searchCb = (val) => {
    if (val !== '') {
      dataFetch("https://api.themoviedb.org/3/search/movie?api_key=1c06a1911fa9fd7b91f24ab61c1f9330&query=" + val)
      .then(
        (result) => {
          this.setState({imageArr:result.results, colSize: 4, imgHeight: 150})
        },
        (error) => {
          // this.setState({
          //   error
          // });
        }
      );
      this.setState({searchEnabled: true, categoryTitle: 'Showing results for '+ val });
    } else if (val === '' && this.state.searchEnabled) {
      this.setState({searchEnabled: false, categoryTitle: 'Browse movies by category'});
    }
  }

  getFurtherInfo = (info) => {
    dataFetch("https://api.themoviedb.org/3/movie/" + info.id + "?api_key=1c06a1911fa9fd7b91f24ab61c1f9330")
    .then(
      (result) => {
        this.setState({imageClick: true, colSize: 1, imgHeight: 50, imageArr: [result]});
      },
      (error) => {
        // this.setState({
        //   error
        // });
      }
    );

    dataFetch("https://api.themoviedb.org/3/movie/" + info.id + "/credits?api_key=1c06a1911fa9fd7b91f24ab61c1f9330")
      .then(
        (result) => {
          this.setState({castList: result.cast})
          
        },
        (error) => {
          // this.setState({
          //   error
          // });
        }
      );

      dataFetch("https://api.themoviedb.org/3/movie/" + info.id + "/similar?api_key=1c06a1911fa9fd7b91f24ab61c1f9330")
      .then(
        (result) => {
          this.setState({recommendList: result.results})
          
        },
        (error) => {
          // this.setState({
          //   error
          // });
        }
      );

      dataFetch("https://api.themoviedb.org/3/movie/" + info.id + "/keywords?api_key=1c06a1911fa9fd7b91f24ab61c1f9330")
      .then(
        (result) => {
          this.setState({chipList: result.keywords})
          
        },
        (error) => {
          // this.setState({
          //   error
          // });
        }
      );
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
                  {this.state.imageClick && <Overview rows={this.state.imageArr}/>}
                  {this.state.imageClick && <CastSlider castList={this.state.castList}/>}
                  {this.state.imageClick && <div className="mediaEx">
                    <div className="media1">
                      <div className="mediaBlock">
                        <h2>Media</h2>
                        <CategoryList options={[{'name':'Most Popular'}, {'name':'Videos'}, {'name':'Backdrops'}, {'name':'Posters'}]}/>
                        <ImageFrame colSize={1} height={25} imageArr={this.state.imageArr}/>
                      </div>
                      <div className="keywords">
                      <h2>Keywords</h2>
                      <Keywords chips={this.state.chipList}/>
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
