import React from "react";
import axios from "axios";
import PostSlider from './PostSlider.jsx';

class Lookslider extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      looks: [],
      isLoading: true,
      error: null
    }

  }

  componentDidMount() {
    const url = `${this.props.api_protocol}://${this.props.token}@${this.props.api_url}/categories/?output_format=JSON&filter[active]=1&display=[id,name,link_rewrite]&sort=[id_DESC]&filter[id_parent]=[${this.props.id_category}]`;
    const usernamePasswordBuffer = Buffer.from(this.props.token);
    const base64data = usernamePasswordBuffer.toString('base64');

    axios.get(url,{
      withCredentials: true,
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        'Authorization': `Basic ${base64data}`
      }
    },{
      auth: {
        password: this.props.token
    }})
      .then( (response) => response.data )
      .then( (data) => {
              console.log(data);
              this.setState({ looks: data.categories, isLoading: false })
      })
      // Catch any errors we hit and update the app
      .catch(error => this.setState({ error, isLoading: false }));

    console.log(this.state);

  }

  render() {
    const { looks, isLoading, error } = this.state;

    return (
      <div className="looks-slider">
      {error ? <p>{error.message}</p> : null}
      {!isLoading ? (
          <PostSlider looks={looks} />
      ):(
        <h3>Loading...</h3>
      )}

      </div>
    );
  }
}
export default Lookslider;
