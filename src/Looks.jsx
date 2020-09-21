// Connection to Prestashop API
// Props to receive:
// api_protocol, token, api_url, id_category
//
// api examples
// https://myshow.space/api/categories/?output_format=JSON&filter[active]=1&display=[id,name,link_rewrite]&filter[id_parent]=23&sort=[id_DESC]
// https://myshow.space/api/categories/30/products?output_format=JSON
// https://myshow.space/api/products/?output_format=JSON&filter[id_category]=30
// https://myshow.space/api/images/categories

import React from "react";
import axios from "axios";

class Looks extends React.Component {
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

    axios.get(url, {
      withCredentials: true,
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
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

    const { looks, isLoading, error } = this.state,
          columns = 3;
    let rows = [],
        cols = [],
        index = 0;


    for (index; index < looks.length; index++){
      cols.push(
        <div className="looks-list-element col-xs-12 col-md-4 col-lg-4 col">
          <a href={`/${looks[index].id}-${looks[index].link_rewrite}`}>
            <img alt={looks[index].name} src={`/get-image.php?id=${looks[index].id}`} className="img-responsive" />
          </a>
        </div>
      );

      if ( ((index + 1) % columns == 0) || ((index + 1)== looks.length) ) {
          rows.push(
              <div className="row" key={index}>
                  {cols}
              </div>
          );
          cols = []
      }

    }

    return (
      <div className="looks-list looks-full-image">
        {error ? <p>{error.message}</p> : null}

        {!isLoading ? (
          <div>
            {rows}
          </div>
        ):(
          <h3>Loading...</h3>
        )}
      </div>
    );
  }

}
export default Looks;
