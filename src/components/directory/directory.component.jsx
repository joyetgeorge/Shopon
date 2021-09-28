import React from "react";
import "./directory.style.scss";
import MenuItem from "../menu-item/menu-item.component";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "hats",
          imageUrl: "https://i.ibb.co/q9dWxc4/james-bak-x-Ky-LB4j9-EBg-unsplash.jpg",
          id: 1,
          linkUrl: "shop/hats",
          bgcolor: "#6b5c2c"
        },
        {
          title: "jackets",
          imageUrl: "https://i.ibb.co/fp4Bs1z/valerie-elash-o4-KRWa-T01p4-unsplash.jpg",
          id: 2,
          linkUrl: "shop/jackets",
          bgcolor: "#6b5c2c"
        },
        {
          title: "sneakers",
          imageUrl: "https://i.ibb.co/2ynSTh9/maksim-larin-1vy2-Qc-Zd5-FU-unsplash.jpg",
          id: 3,
          linkUrl: "shop/sneakers",
          bgcolor: "#6b5c2c"
        },
        {
          title: "womens",
          imageUrl: "https://i.ibb.co/CPnkSpJ/mike-von-3-Mvl-Ghagq4-E-unsplash.jpg",
          size: "large",
          id: 4,
          linkUrl: "shop/womens",
          bgcolor: "#6b5c2c",
          size: 'large'
        },
        {
          title: "mens",
          imageUrl: "https://i.ibb.co/MRh0P49/tyler-nix-ZGa9d1a-4t-A-unsplash.jpg",
          size: "large",
          id: 5,
          linkUrl: "shop/mens",
          bgcolor: "#6b5c2c",
          size: 'large'
        }
      ]
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, imageUrl, id, bgcolor, size}) => (
          <MenuItem key={id} title={title} url={imageUrl} bgcolor={bgcolor} size={size}/>
        ))}
      </div>
    );
  }
}

export default Directory;