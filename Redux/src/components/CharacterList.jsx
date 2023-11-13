import React, {Component} from 'react'
import { connect } from 'react-redux'

const CharacterList = () => {
    
  return (
    <div>
      <h4>Characters</h4>
    </div>
  )
}

function mapStateToProps(state) {
    console.log("state", state);
    return {};
}

export default connect(mapStateToProps, null)(CharacterList);
