import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../collection-preview/collection-preview.component';
import './collection-overview.style.scss';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selector';

import './collection-overview.style.scss';

const CollectionOverview = ({ collections }) => (
    <div className="collections-overview">
        {
            collections.map(({ id, ...otherCollectionProps }) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionOverview);