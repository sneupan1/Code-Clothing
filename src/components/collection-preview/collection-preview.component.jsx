import React from "react";
import { Link, withRouter } from "react-router-dom";

import "./collection-preview.styles.scss";
import CollectionItem from "../collection-item/collection-item.component";

const CollectionPreview = ({ title, items, match }) => (
  <div className="collection-preview">
    <Link to ={`${match.path}/${title.toLowerCase()}`} className="title">{title.toUpperCase()}</Link>
    <div className="preview">
      {items
        .filter((item, index) => index < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default withRouter(CollectionPreview);
