import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { getChars } from "../actions";
// import actions

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
    this.props.getChars();
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// // our mapStateToProps needs to have two properties inherited from state
// const mapStateToProps = state => ({
//   characters: state.characters,
//   error: state.error
// });
// // the characters and the fetching boolean
// export default connect(
//   // null /* mapStateToProps replaces null here */,
//   mapStateToProps,
//   {
//     /* action creators go here */
//     characters: state.characters,
//     error: state.error,
//     isFetching: state.isFetching
//   }
// )(CharacterListView);

const mapStateToProps = state => {
  return {
    characters: state.charsReducer.characters,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { getChars }
)(CharacterListView);
