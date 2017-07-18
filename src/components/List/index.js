import React from 'react';
import Button from '../Button';
import PropTypes from 'prop-types';

const List = ({ list, handleDismiss }) =>
  <div className="list">
    {list.map(item =>
      <div key={item.objectID} className="list-row">
        <span  style={{ width: '40%' }}>
          <a href={item.url} target="_blank">
            {item.title}
          </a>
        </span>
        <span style={{ width: '30%' }}>
          {item.author}
        </span>
        <span style={{ width: '10%' }}>
          {item.num_comments}
        </span>
        <span style={{ width: '10%' }}>
          {item.points}
        </span>
        <span style={{ width: '10%' }}>
          <Button 
            onClick={() => handleDismiss(item.objectID)}
            className="button-inline"
          >
            Dismiss
          </Button>
        </span>
      </div>
    )}
  </div>

List.propTypes = {
  list: PropTypes.array.isRequired,
  handleDismiss: PropTypes.func.isRequired,
};

export default List;