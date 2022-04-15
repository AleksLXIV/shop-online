import React from 'react'
import { selectCollections } from '../../redux/shop/shop.selector';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CollectionPreview from '../preview-collection/collection-preview.component';

import './collection-overview.styles.scss'


const CollectionsOverviev = ({ collections }) => (
	<div className='collections-overview'>
		{
			collections.map(({ id, ...otherCollectionProps }) => (
				<CollectionPreview key={id} {...otherCollectionProps} />
			))
		}
	</div>
)


const mapStateToProps = createStructuredSelector({
	collections: selectCollections
})

export default connect(mapStateToProps)(CollectionsOverviev)