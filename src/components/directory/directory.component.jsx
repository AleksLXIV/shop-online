import React from 'react'
import MenuItem from '../menu-item/menu-item.component'
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';

import './directory.styles.scss'



const Directory = ({section}) => {

	return (
		<div className='directory-menu'>
			{
				section.map(({ id, ...otherSectionProps }) => (
					<MenuItem
						key={id}
						{...otherSectionProps}
					/>
				))
			}
		</div>
	)

}

const mapDispatchToProps = createStructuredSelector({
	section: selectDirectorySections
})

export default connect(mapDispatchToProps)(Directory);